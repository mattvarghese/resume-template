export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description?: string;
  achievements: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
  };
  summary: string;
  experience: Experience[];
  skills: SkillGroup[];
  education: {
    degree: string;
    school: string;
  }[];
  philosophy?: string; // Matching your draft header [cite: 15]
}
