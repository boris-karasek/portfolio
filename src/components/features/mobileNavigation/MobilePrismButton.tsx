import { motion } from "framer-motion";

export const MobilePrismButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 
        w-16 h-16 rounded-full 
        shadow-[0_0_20px_rgba(255,255,255,0.35)]
        bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C]
        flex items-center justify-center
        z-50
      "
      style={{ pointerEvents: "auto" }}
    >
      <span className="text-black text-2xl font-bold">▲</span>
    </motion.button>
  );
};
