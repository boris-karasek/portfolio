import { motion } from "framer-motion";
import { User, Folder, Mail, Home } from "lucide-react";

export const MobilePrismMenu = ({
  open,
  onSelect,
}: {
  open: boolean;
  onSelect: (id: string) => void;
}) => {
  const items = [
    { id: "hero", icon: <Home size={20} strokeWidth={1.8} />, delay: 0 },
    { id: "about", icon: <User size={20} strokeWidth={1.8} />, delay: 0.07 },
    { id: "projects", icon: <Folder size={20} strokeWidth={1.8} />, delay: 0.14 },
    { id: "contact", icon: <Mail size={20} strokeWidth={1.8} />, delay: 0.21 },
  ];

  return (
    <div className="fixed flex justify-center bottom-20 left-0 right-0 z-50 pointer-events-none">
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className="
            absolute pointer-events-auto
            w-12 h-12 rounded-full 
            flex items-center justify-center
            backdrop-blur-md
            border border-white/20
            shadow-[0_0_18px_rgba(255,255,255,0.35)]
          "
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={
            open
              ? {
                  opacity: 1,
                  scale: 1,
                  y: -70 - index * 65,
                  transition: { delay: item.delay, type: "spring", stiffness: 220 },
                }
              : {
                  opacity: 0,
                  scale: 0,
                  y: 0,
                  transition: { delay: 0.05 },
                }
          }
          style={{
            background:
              "linear-gradient(135deg, rgba(60,120,255,0.85), rgba(0,200,255,0.75))",
          }}
          whileTap={{ scale: 0.88 }}
          whileHover={{ scale: 1.1 }}
        >
          {/* Icon */}
          <div className="text-white opacity-95">{item.icon}</div>
        </motion.button>
      ))}
    </div>
  );
};
