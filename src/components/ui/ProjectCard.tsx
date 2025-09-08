// components/ProjectCard.tsx

import { Project } from "@/data/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

export const ProjectCard = ({ data }: { data: Project }) => {
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
    <Link
      href={data.website || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View project: ${data.name}`}
      className="block"
    >
      <div
        id="project"
        className="grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-10 p-6 rounded-lg 
                   transition-all duration-300 ease-in-out cursor-pointer 
                   group hover:!opacity-100 group-hover/list:opacity-50
                   hover:bg-slate-800/50 hover:shadow-lg hover:shadow-slate-900/50"
      >
        {/* Left Column: Date */}
        <div className="flex justify-center items-center md:col-span-2 text-sm md:text-base font-medium text-gray-400 mt-1 whitespace-nowrap">
          {startDate} — {endDate}
        </div>

        {/* Right Column: Project Details */}
        <div className="md:col-span-6 space-y-4">
          <h3 className="font-bold text-white text-xl flex items-center gap-2">
            <span className="group-hover:text-primary transition-colors duration-300">
              {data.name}
            </span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-3.5 h-3.5 text-white transition-transform duration-300 
                         transform-gpu group-hover:translate-x-1 group-hover:-translate-y-1 
                         group-hover:text-primary"
            />
          </h3>

          {/* Description */}
          <p className="text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
            {data.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {data.techstack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center rounded-full bg-primary/10 px-3 py-1"
              >
                <p className="font-medium text-primary text-xs whitespace-nowrap">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
