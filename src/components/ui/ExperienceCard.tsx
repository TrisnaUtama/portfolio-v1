import { Experiences } from "@/data/experiences";
import React from "react";

export const ExperienceCard = ({ data }: { data: Experiences }) => {
  const startDate = data.start_date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  const isOngoing = data.end_date > new Date();

  const endDate = isOngoing
    ? "Present"
    : data.end_date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-10 p-6 rounded-lg 
                 transition-all duration-300 ease-in-out 
                 group hover:!opacity-100 group-hover/list:opacity-50
                 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-slate-900/50"
    >
      <header className="flex justify-center items-center md:col-span-2 text-sm md:text-base font-medium text-gray-400 mt-1 z-10 whitespace-nowrap">
        {startDate} — {endDate}
      </header>

      <div className="md:col-span-6 space-y-3">
        <h3 className="font-bold text-white text-xl">
          <span className="group-hover:text-primary transition-colors duration-300">
            {data.position} · {data.company}
          </span>
        </h3>

        {/* Description */}
        <p className="text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
          {data.description}
        </p>
      </div>
    </div>
  );
};
