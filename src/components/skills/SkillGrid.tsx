import { SkillCard } from "./SkillCard";

type Skill = {
  label: string;
  icon: string;
};

type SkillsGridProps = {
  skills: Skill[];
  size?: "sm" | "md" | "lg";
};

export const SkillsGrid = ({ skills, size = "md" }: SkillsGridProps) => {

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 place-items-center">
      {skills.map((skill) => (
        <SkillCard key={skill.label} label={skill.label} icon={skill.icon} size={size}/>
      ))}
    </div>
  );
};
