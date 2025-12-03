
type SkillCardProps = {
  label: string;
  icon: string; 
  size?: "sm" | "md" | "lg";
};

export const SkillCard = ({ label, icon, size = "md" }: SkillCardProps) => {
  const sizeMap = {
    sm: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10",
    md: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
    lg: "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
  };

  return (
    <div className="flex flex-col items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:bg-white/10 transition-all">
      <img src={icon} alt={label} className={`${sizeMap[size]} transition-all`} />
      <p className="text-xs sm:text-xs md:text-sm text-gray-300">{label}</p>
    </div>
  );
};
