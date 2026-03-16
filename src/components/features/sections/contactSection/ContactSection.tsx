import { motion } from "framer-motion";
import { ContactInfoCard } from "./ContactInfoCard";
import { ContactFormCard } from "./ContactFormCard";
import { useSectionRefs } from "@/store/useSectionRefsStore";

export const ContactSection = () => {
  const contactRef = useSectionRefs((s) => s.refs.contact);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="text-white h-dvh snap-start overflow-x-hidden overflow-y-auto
        px-4 sm:px-8 md:px-14 lg:px-20 xl:px-32
        pt-10 sm:pt-12 md:pt-16 lg:pt-16 xl:pt-28
        pb-8 sm:pb-10 lg:pb-8 xl:pb-28"
    >
      <div
        className="max-w-[1600px] mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-4 sm:gap-6 md:gap-10 xl:gap-20
          items-start"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[450px]">
            <ContactInfoCard />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[450px]">
            <ContactFormCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
