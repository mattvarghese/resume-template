import type { ResumeData } from './types';

export const mockData: ResumeData = {
  personalInfo: {
    name: "ALEX ARCHITECT",
    title: "Software Architect",
    email: "architect@example.com",
    phone: "555-0123",
    location: "Madison, WI",
    linkedin: "linkedin.com/in/username"
  },
  summary: "Software Architect with 20 years of experience designing complex systems and multi-part integrations. Seeking to leverage a massive trove of knowledge to solve impactful real-world problems. [cite: 1]",
  experience: [
    {
      company: "Global Health Systems",
      role: "Software Architect",
      location: "Madison, WI",
      period: "2020 – Present",
      achievements: [
        "Technical leader for implementation of complex regulatory requirements and interfaces. [cite: 2]",
        "Led the development of robust standalone testing applications to emulate upstream and downstream providers. [cite: 4]",
        "Deep mastery of industry standards including FHIR, SMART on FHIR, and OAuth2. [cite: 5]"
      ]
    },
    {
      company: "Tech Informatics",
      role: "Senior Systems Developer",
      location: "Remote",
      period: "2010 – 2020",
      achievements: [
        "Built authoritative, efficient, and RFC-compliant JSON tools for legacy environments. [cite: 10]",
        "Proactively identified long-term infrastructure needs and executed vision for scalability. [cite: 12]",
        "Developed high-availability broker services focused on security and observability. [cite: 15]"
      ]
    }
  ],
  skills: [
    { category: "Interoperability", items: ["FHIR", "HL7", "OAuth2", "SMART on FHIR"] },
    { category: "Architecture", items: ["Data Modeling", "Microservices", "System Design"] },
    { category: "Tools", items: ["TypeScript", "React", "Tailwind", "Cache/M"] }
  ],
  education: [
    { degree: "Master of Computer Science", school: "University of Wisconsin" }
  ]
};