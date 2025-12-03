import { SkillsGrid } from "@/components/skills/SkillGrid";

export const ProjectOne = () => {
  const skills = [
    { label: "React", icon: "/icons/react.svg" },
    { label: "JavaScript", icon: "/icons/javascript.svg" },
    { label: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    { label: "FileZilla", icon: "/icons/filezilla.svg" },
  ];

  return (
    <section id="project-1">
      <div className="space-y-1 text-center sm:text-left flex flex-col justify-end z-50">
        <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold">
          Boki-Edi Business Website
        </h2>

        <h3 className="text-base sm:text-xl text-blue-400 underline">
          <a href="https://www.boki-edi.com" target="_blank">
            Visit Website
          </a>
        </h3>

        <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
          A React website for Boki-Edi, a company specializing in the production
          and sale of metal haberdashery. The website showcases their product
          range, company information, and contact details. It is designed to be
          user-friendly and fully responsive, providing potential customers with
          easy access to information about the company's offerings. The site was
          deployed using FileZilla to upload the built files to the client's FTP
          server. SEO optimization techniques were implemented to enhance the
          website's visibility on search engines.
        </p>

        <p className="font-semibold text-gray-200 text-lg sm:text-xl mt-6">
          Skills used:
        </p>

        <div className="mt-4 sm:mt-6">
          <SkillsGrid skills={skills} size="sm"/>
        </div>
      </div>
    </section>
  );
};
