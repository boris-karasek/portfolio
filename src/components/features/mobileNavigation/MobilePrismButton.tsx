import { motion } from "framer-motion";

export const MobilePrismButton = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {

  const handleClick = () => {
    onClick();
    if (navigator.vibrate) navigator.vibrate(20);
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 
        w-16 h-16 rounded-full 
        shadow-[0_0_20px_rgba(255,255,255,0.35)]
        bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C]
        flex items-center justify-center
        z-50
      "
      style={{ willChange: "transform" }}
    >
      <motion.span 
        className="text-black text-2xl font-bold"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{type: "tween", duration: 0.25}}
      >▲
      </motion.span>
    </motion.button>
  );
};
