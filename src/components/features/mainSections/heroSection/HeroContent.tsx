import { motion } from "framer-motion";

export const HeroContent = ({ style }: { style?: any }) => (
  <motion.div
    className="max-w-xl space-y-6"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    style={style}
  >
    <div className="h-1 w-14 bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] rounded-full" />

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
      Hi, I’m <span className="bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] text-transparent bg-clip-text">Boris</span> Karasek
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
      Frontend developer focused on clarity, performance, and clean digital experiences.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-400 pt-6">
      <div>
        <p className="font-semibold bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] text-transparent bg-clip-text">Frontend</p>
        <span className="text-sm md:text-sm">React / TypeScript</span>
      </div>
      <div>
        <p className="font-semibold bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] text-transparent bg-clip-text">Mobile</p>
        <span className="text-sm md:text-sm">React Native</span>
      </div>
      <div>
        <p className="font-semibold bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] text-transparent bg-clip-text">UI-Driven</p>
        <span className="text-sm md:text-sm">Design & Motion</span>
      </div>
    </div>
  </motion.div>
);
