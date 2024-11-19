import { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  skillName: string;
}
const SkillCard = ({ icon, skillName }: SkillCardProps) => {
  return (
    /* From Uiverse.io by Tiagoadag */
    <div className="card">
      <div className="card2">
        <div className="space-y-2 justify-center flex items-center flex-col">
          {icon}
          <h3 className="md:text-lg font-semibold uppercase text-zinc-400 text-center">
            {skillName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
