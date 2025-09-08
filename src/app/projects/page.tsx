import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/project";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-gray-200 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-primary transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Back to Main</span>
          </Link>
        </div>

        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          All Projects
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          A collection of my work, from freelance contracts to personal
          experiments.
        </p>

        {/* Full Projects List */}
        <div className="space-y-12 group/list">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} data={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
