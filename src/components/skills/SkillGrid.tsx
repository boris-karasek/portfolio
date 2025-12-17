import { SkillCard } from "./SkillCard";

type Skill = {
  label: string;
  icon: string;
};

type SkillsGridProps = {
  skills: Skill[];
  size?: "sm" | "lg" | "xl";
};

export const SkillsGrid = ({ skills, size = "sm" }: SkillsGridProps) => {

  return (
    <div className="grid
        gap-2
        sm:gap-3
        lg:gap-2
        xl:gap-3
        place-items-center
        grid-cols-[repeat(auto-fit,minmax(72px,1fr))]
        sm:grid-cols-[repeat(auto-fit,minmax(88px,1fr))]">
      {skills.map((skill) => (
        <SkillCard key={skill.label} label={skill.label} icon={skill.icon} size={size}/>
      ))}
    </div>
  );
};
