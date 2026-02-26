import type { ResumeData } from './types';
import { mockData } from './mockData';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone, FaCircle } from 'react-icons/fa';

function App() {
  const data: ResumeData = mockData;

  return (
    <div className="bg-slate-100 min-h-screen py-10 print:p-0 print:bg-white">
      <div className="mx-auto w-[210mm] min-h-[297mm] bg-white shadow-2xl print:shadow-none p-12">
        
        {/* 1. FULL WIDTH HEADER (Matches Marie's style) */}
        <header className="border-b-2 border-slate-800 pb-6 mb-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tighter">{data.personalInfo.name}</h1>
          <p className="text-xl text-slate-600 font-medium mt-1">{data.personalInfo.title}</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-slate-600">
            <div className="flex items-center gap-2"><FaEnvelope className="text-xs" /> {data.personalInfo.email}</div>
            <div className="flex items-center gap-2"><FaPhone className="text-xs" /> {data.personalInfo.phone}</div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-xs" /> {data.personalInfo.location}</div>
            <div className="flex items-center gap-2"><FaLinkedin className="text-xs" /> {data.personalInfo.linkedin}</div>
          </div>
        </header>

        <div className="flex gap-12">
          {/* 2. LEFT MAIN COLUMN (Experience) */}
          <main className="w-2/3">
            <section>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b pb-1 mb-4">
                Work Experience
              </h2>
              {data.experience.map((job, idx) => (
                <div key={idx} className="mb-8">
                  <div className="flex justify-between items-baseline font-bold text-slate-800">
                    <h3 className="text-md">{job.role}</h3>
                    <span className="text-xs font-normal italic">{job.period}</span>
                  </div>
                  <p className="text-sm text-blue-700 font-semibold mb-2">{job.company}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((bullet, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-[8px] mt-1.5"><FaCircle /></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </main>

          {/* 3. RIGHT SIDEBAR (Skills & Education) */}
          <aside className="w-1/3">
            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b pb-1 mb-4">
                Technical Skills
              </h2>
              <div className="flex flex-col gap-4">
                {data.skills.map((group, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">{group.category}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{group.items.join(', ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b pb-1 mb-4">
                Education
              </h2>
              {data.education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <p className="text-sm font-bold text-slate-800">{edu.degree}</p>
                  <p className="text-sm text-slate-600">{edu.school}</p>
                </div>
              ))}
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;