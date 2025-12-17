import { Github, Linkedin, Mail } from "lucide-react";

export const ContactInfoCard = () => {
    return (
        <div className="bg-white/5 backdrop-blur-xs p-8 rounded-2xl border border-white/10 shadow-xs space-y-6">
          <h2 className="text-3xl font-bold bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] text-transparent bg-clip-text">Get in Touch</h2>
          <p className="text-gray-300">
            Feel free to reach out for collaborations, inquiries, or just to say
            hello!
          </p>
          <div className="space-y-3">
            <a
              href="mailto:karasekboris@gmail.com"
              className="inline-flex items-center gap-3 group hover:text-cyan-600 w-fit cursor-pointer"
            >
              <Mail className="group-hover:scale-110 transition" />{" "}
              karasekboris@gmail.com
            </a>

            <a
              href="https://github.com/boris-karasek"
              target="_blank"
              className="inline-flex items-center gap-3 group hover:text-cyan-600 w-fit cursor-pointer"
            >
              <Github className="group-hover:scale-110 transition" />{" "}
              github.com/boris-karasek
            </a>

            <a
              href="https://www.linkedin.com/in/boris-karasek-50231a143"
              target="_blank"
              className="inline-flex items-center gap-3 group hover:text-cyan-600 w-fit cursor-pointer"
            >
              <Linkedin className="group-hover:scale-110 transition" />{" "}
              linkedin.com/in/boris-karasek
            </a>
          </div>
        </div>
    )
}