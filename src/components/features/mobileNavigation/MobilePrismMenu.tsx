import { AnimatePresence, motion } from "framer-motion";
import { User, Folder, Mail, Home } from "lucide-react";

export const MobilePrismMenu = ({
  open,
  onSelect,
}: {
  open: boolean;
  onSelect: (id: string) => void;
}) => {
  const items = [
    { id: "contact", icon: <Mail size={20} strokeWidth={1.8} /> },
    { id: "projects", icon: <Folder size={20} strokeWidth={1.8} />},
    { id: "about", icon: <User size={20} strokeWidth={1.8} /> },
    { id: "hero", icon: <Home size={20} strokeWidth={1.8} /> },
  ];

  const BASE = 75;
  const STEP = 65;

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          className="fixed flex justify-center bottom-20 left-0 right-0 z-50 pointer-events-none"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
        {items.map(({id, icon}, index) => (
          <motion.button
            key={id}
            onClick={() => {
              onSelect(id)
              if(navigator.vibrate) navigator.vibrate([20, 30, 20]);
            }}
            className="
                absolute w-12 h-12 rounded-full pointer-events-auto
                flex items-center justify-center shadow-[0_0_18px_rgba(255,255,255,0.35)]
                backdrop-blur-md border border-white/20 text-white opacity-95
            "
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
              y: -(BASE + index * STEP),
              scale: 1,
              opacity: 1,
              transition: {type: "tween", duration: 0.28},
            }}
            exit={{
              opacity: 0,
              scale: 0.6,
              y:0,
              transition: {duration: 0.15},
            }}
            style={{
              background:
                "linear-gradient(135deg, rgba(60,120,255,0.85), rgba(0,200,255,0.75))",
                willChange: "transform"
            }}
            whileTap={{ scale: 0.88 }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Icon */}
            <div className="text-white opacity-95">{icon}</div>
          </motion.button>
        ))}
      </motion.div>
      )}
    </AnimatePresence>
  );
};
