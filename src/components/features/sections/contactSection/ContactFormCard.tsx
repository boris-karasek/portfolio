import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof FormSchema>;

export const ContactFormCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);

    try {
      const token = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();

      if (!token) throw new Error("reCAPTCHA token not generated");

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, token }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();

      if (!data.success) throw new Error(data.error || "Unknown server error");

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error: unknown) {
      console.error(error);

      const message = error instanceof Error ? error.message : "An error occurred while sending the message."

      toast.error( message );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xs p-8 rounded-2xl border border-white/10 shadow-xs">
      <h3 className="text-2xl font-semibold mb-6 bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] text-transparent bg-clip-text">
        Send a Message
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="bg-white/10 border-white/20 text-white min-h-[120px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* reCAPTCHA Component */}
          <div className="overflow-hidden h-0 w-0"> 
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              size="invisible"
              ref={recaptchaRef}
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="animate-spin h-5 w-5" />}
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
