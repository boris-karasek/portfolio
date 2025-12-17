import { useSectionRefs } from "@/store/useSectionRefsStore";
import { ProjectOne } from "./ProjectOne";
import { ProjectTwo } from "./ProjectTwo";
import { useUIStore } from "@/store/useUIStore";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const activeProject = useUIStore((state) => state.activeProject);
  const projectsRef = useSectionRefs((s) => s.refs.projects);

  const fadeVariants = {
  active: {
    opacity: 1,
    scale: 1,
    pointerEvents: "auto",
    visibility: "visible"
  },
  inactive: {
    opacity: 0,
    scale: 0.98,
    pointerEvents: "none",
    visibility: "hidden"
  }
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="
        relative z-20 w-full h-screen snap-start
        flex flex-col items-center
        md:pt-[12vh]
        lg:pt-[16vh]
        xl:pt-0
        xl:flex-row xl:items-start
      "
    >

      {/* ===== Project One ===== */}
      <motion.div
        animate={activeProject === "project1" ? "active" : "inactive"}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          w-full xl:w-1/2 p-4
          flex justify-center xl:justify-start text-center 
          xl:text-left xl:mt-2 xl:p-16 xl:mr-36
          ${activeProject === "project1" ? "mt-[30vh]" : "hidden xl:flex"}
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
          w-full xl:w-1/2 p-4 
          flex justify-center xl:justify-end text-center xl:text-right
          xl:mt-2 xl:p-16 xl:ml-36
          ${activeProject === "project2" ? "mt-[30vh]" : "hidden xl:flex"}
        `}
      >
        <ProjectTwo />
      </motion.div>
    </section>
  );
};
