import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY!;
const gmailUser = process.env.GMAIL_USER!;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message, token } = req.body;

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`,
      {method: "POST"}
    );
  
    const data = await response.json();
    if(!data.success) return res.status(400).json({error: "reCAPTCHA verification failed"});

  } catch(error) {
    console.error("reCAPTCHA ERROR:", error);
    return res.status(500).json({ error: "reCAPTCHA verification error" });
  }

  try {
    console.log("Creating transporter");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.verify();

    console.log("Sending email");
    
    await Promise.race([
      transporter.sendMail({
        from: `"Portfolio Contact" <${gmailUser}>`,
        to: gmailUser,
        subject: `New message from ${name}`,
        replyTo: email,
        html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        `
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Email timeout")), 8000)
    ),
    ]);

    console.log("Email sent");

    return res.status(200).json({ success: true });
  } catch(error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
