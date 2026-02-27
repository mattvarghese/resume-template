import type { Experience } from '../types';

interface Props {
  experience: Experience;
}

export const ExperienceComponent = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-1 mb-2 last:mb-0">
      {/* Experience Title: Now darker (slate-900) and slightly larger for prominence */}
      <h4 className="text-[15px] font-bold text-slate-900 tracking-wide">
        {experience.title}
      </h4>

      {/* Bullet Points: Reduced gap-1.5 to gap-1 for density */}
      <ul className="flex flex-col gap-1 list-none px-1">
        {experience.bulletPoints.map((point, index) => (
          <li key={index} className="relative pl-5 text-[12px] leading-tight text-slate-800 font-sans">
            {/* Bullet: Moved slightly to accommodate the denser text */}
            <span className="absolute left-1 top-[7px] w-1.5 h-1.5 rounded-full bg-[#4da6a6] shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};