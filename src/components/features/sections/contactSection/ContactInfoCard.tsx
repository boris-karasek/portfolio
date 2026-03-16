import { Github, Linkedin, Mail } from "lucide-react";

export const ContactInfoCard = () => {
    return (
      <div className="bg-white/5 backdrop-blur-xs p-4 sm:p-5 lg:p-4 xl:p-8 rounded-2xl border border-white/10 shadow-xs space-y-3 sm:space-y-4 lg:space-y-2 xl:space-y-6">
        <h2 className="text-xl sm:text-2xl lg:text-lg xl:text-3xl font-bold bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-sm xl:text-base">
          Feel free to reach out for collaborations, inquiries, or just to say
          hello!
        </p>
        <div className="space-y-2 sm:space-y-3 lg:space-y-1 xl:space-y-3 text-sm flex flex-col min-w-0">
          <a
            href="mailto:karasekboris@gmail.com"
            className="inline-flex items-center gap-2 group hover:text-cyan-600 min-w-0 w-fit max-w-full"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:scale-110 transition" />{" "}
            <span className="truncate">karasekboris@gmail.com</span>
          </a>

          <a
            href="https://github.com/boris-karasek"
            target="_blank"
            className="inline-flex items-center gap-2 group hover:text-cyan-600 min-w-0 w-fit max-w-full"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:scale-110 transition" />{" "}
            <span className="truncate">github.com/boris-karasek</span>
          </a>

          <a
            href="https://www.linkedin.com/in/boris-karasek-50231a143"
            target="_blank"
            className="inline-flex items-center gap-2 group hover:text-cyan-600 min-w-0 w-fit max-w-full"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:scale-110 transition" />{" "}
            <span className="truncate">linkedin.com/in/boris-karasek</span>
          </a>
        </div>
      </div>
    );
}