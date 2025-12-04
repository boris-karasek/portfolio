import { ProjectOne } from "./ProjectOne";
import { ProjectTwo } from "./ProjectTwo";
import { useUIStore } from "@/store/useUIStore";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const activeProject = useUIStore((state) => state.activeProject);

  const fadeVariants = {
    active: { opacity: 1, scale: 1 },
    inactive: { opacity: 0 }
  };

  return (
    <section
      id="projects"
      className="
        relative z-20 w-full h-screen
        flex flex-col items-center
        md:flex-row md:items-start
      "
    >
      {/* ===== Project One ===== */}
      <motion.div
        animate={activeProject === "project1" ? "active" : "inactive"}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          w-full md:w-1/2 p-4
          flex justify-center md:justify-start text-center md:text-left
          md:mt-10 md:p-16 md:mr-36
          ${activeProject === "project1" ? "mt-[30vh]" : "hidden md:flex"}
        `}
      >
        <ProjectOne />
      </motion.div>

      {/* ===== Project Two ===== */}
      <motion.div
        animate={activeProject === "project2" ? "active" : "inactive"}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          w-full md:w-1/2 p-4
          flex justify-center md:justify-end text-center md:text-right
          md:mt-10 md:p-16 md:ml-36
          ${activeProject === "project2" ? "mt-[30vh]" : "hidden md:flex"}
        `}
      >
        <ProjectTwo />
      </motion.div>
    </section>
  );
};
