import { SkillsGrid } from "@/components/skills/SkillGrid";

export const ProjectTwo = () => {
    const skills = [
      { label: "React Native", icon: "/icons/reactnative.svg" },
      { label: "JavaScript", icon: "/icons/javascript.svg" },
      { label: "Expo", icon: "/icons/expo.svg" },
      { label: "Firebase", icon: "/icons/firebase.svg" },
      { label: "Electron", icon: "/icons/electron.svg" },
      { label: "Github", icon: "/icons/github.svg" },
      { label: "Express", icon: "/icons/expressjs-dark.svg" },
    ];

    return (
      <section id="project-2">
        <div className="space-y-1 text-center xl:text-left flex flex-col justify-end z-50">
          <h2 className="text-xl sm:text-4xl 2xl:text-5xl font-bold text-gray-50">
            MyInvoice - React Native Mobile and Desktop App
          </h2>

          <h3 className="text-base sm:text-xl 2xl:text-2xl bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] text-transparent bg-clip-text">
            <a
              href="https://github.com/boris-karasek/myInvoice"
              target="_blank"
            >
              Visit Github
            </a>
          </h3>

          <p className="text-gray-300 text-sm sm:text-base 2xl:text-lg leading-relaxed">
            A React Native mobile and desktop app for managing invoices,
            products, and company data. Users can create, edit, and send
            invoices as PDFs. Firebase handles data storage and authentication,
            with optional Google sign-in via OAuth. The desktop version is built
            using Electron, and includes lightweight Express server to handle
            Google OAuth flows. The app is designed to be user-friendly and
            responsive, making it easy for small business owners to manage their
            invoicing needs on the go.
          </p>

          <div className="sm:mt-6">
            <p className="font-semibold text-gray-200 text-base sm:text-lg mt-4">
              Skills used:
            </p>
            <SkillsGrid skills={skills} size="sm" />
          </div>
        </div>
      </section>
    );
  }