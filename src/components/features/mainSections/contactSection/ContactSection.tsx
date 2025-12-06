import { motion } from "framer-motion";
import { ContactInfoCard } from "./ContactInfoCard";
import { ContactFormCard } from "./ContactFormCard";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="text-white min-h-screen
        px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32
        py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-[1600px] mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-10 sm:gap-14 md:gap-20 xl:gap-32
          items-start"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start
            lg:-translate-x-6 xl:-translate-x-10"
        >
          <div className="w-full max-w-[450px]">
            <ContactInfoCard />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end
            lg:translate-x-6 xl:translate-x-10"
        >
          <div className="w-full max-w-[500px]">
            <ContactFormCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
