export interface Experiences {
  position: string;
  description: string;
  company: string;
  start_date: Date;
  end_date: Date;
}

export const experiences: Experiences[] = [
  {
    position: "IT Internship",
    company: "Angkasa Pura I",
    description:
      "Built a web-based document tracking system using Next.js and PostgreSQL to significantly improve workflow efficiency at Bandara I Gusti Ngurah Rai.",
    start_date: new Date(2024, 7, 1),
    end_date: new Date(2025, 0, 31),
  },
  {
    position: "Assistant Lecturer",
    company: "Atma Jaya Yogyakarta University",
    description:
      "Assisted in teaching Basic Programming in C to 231 students by preparing educational modules and grading examinations.",
    start_date: new Date(2023, 1, 1),
    end_date: new Date(2023, 6, 31),
  },
  {
    position: "Public Relation Staff",
    company: "Mahatma",
    description:
      "Managed all external communications and served as the official representative for the organization at public and professional events.",
    start_date: new Date(2022, 6, 1),
    end_date: new Date(2023, 6, 31),
  },
];
