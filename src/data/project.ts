export interface Project {
  name: string;
  start_date: Date;
  end_date: Date;
  description: string;
  techstack: string[];
  website?: string;
}

export const projects: Project[] = [
  {
    name: "Anugerah Meuble",
    start_date: new Date(2024, 7, 1),
    end_date: new Date(2025, 8, 1),
    description:
      "A web-based application for Angkasa Pura Indonesia to streamline document workflow and provide real-time tracking of official correspondence, reducing processing time by 40%.",
    techstack: ["Next.js", "Express.js", "Firebase", "Tailwind CSS"],
    website: "https://anugerah-meuble.vercel.app ",
  },
  {
    name: "Kuta Village",
    start_date: new Date(2025, 3, 15),
    end_date: new Date(2025, 4, 11),
    description:
      "A web-based application for Angkasa Pura Indonesia to streamline document workflow and provide real-time tracking of official correspondence, reducing processing time by 40%.",
    techstack: ["Typescript","Next.js","Firebase", "Tailwind CSS"],
    website: "https://kutavillage.com ",
  },
  {
    name: "Cryptova AI HR Advisor",
    start_date: new Date(2025, 5, 1),
    end_date: new Date(2025, 5, 15),
    description:
      "A web-based application for Angkasa Pura Indonesia to streamline document workflow and provide real-time tracking of official correspondence, reducing processing time by 40%.",
    techstack: ["Python", "Next.js", "PostgreSQL", "Mistral AI", "Langchain","Open AI API", "VectorDB", "Redis"],
    website: "https://github.com/TrisnaUtama/cryptova-ai-hr-advisor",
  },
  
];
