import { FaCheck } from 'react-icons/fa'; // or FaCogs, FaCheckCircle
import type { Experience } from '../model/types';

interface Props {
  experience: Experience;
}

export const ExperienceComponent = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-1 mb-2 last:mb-0">
      {/* Experience Header Container */}
      {experience.title &&
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-5 h-5 border-[1px] border-slate-300 rounded-full flex items-center justify-center text-slate-900 text-[10px]">
            <FaCheck />  {/* A Check mark is a subtle +ve connotation */}
          </div>

          {/* Experience Title */}
          <h4 className="text-[15px] font-bold text-slate-900 tracking-wide">
            {experience.title}
          </h4>
        </div>
      }

      {/* Bullet Points */}
      <ul className="flex flex-col gap-1 list-none px-1">
        {experience.bulletPoints.map((point, index) => (
          <li key={index} className="relative pl-5 text-[12px] leading-tight text-slate-800 font-sans">
            <span className="absolute left-1 top-[7px] w-1.5 h-1.5 rounded-full bg-[#4da6a6] shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};