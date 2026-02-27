import type { Resume } from './types';
import { resumeData } from './data';
import { PersonSummary } from './components/PersonSummary';
import { PersonContact } from './components/PersonContact';
import { SideBar } from './components/SideBar';
import { SkillList } from './components/SkillList';

const App = () => {
  const data: Resume = resumeData;
  
  return (
    <div className="bg-slate-200 min-h-screen py-10 print:p-0 print:bg-white flex flex-col items-center">

      {/* Single Continuous Paper Wrapper */}
      <div className="relative w-[8.5in] bg-white shadow-2xl print:shadow-none flex min-h-[11in]">
        
        {/* Left Column */}
        <main className="w-[67%] flex flex-col p-1 gap-1 ">
           <PersonSummary person={data.person} />
           {/* Content... */}
        </main>

        {/* Right Column */}
        <div className="w-[33%] flex flex-col p-1">
           <div className="p-2 bg-[#2c3e50] mb-2">
             <PersonContact connections={data.person.connections} />
           </div>
           <SideBar>
             <SkillList skillSet={data.person.skillSet} />
           </SideBar>
           {/* Content... */}
        </div>
      </div>
    </div>
  );
};

export default App;