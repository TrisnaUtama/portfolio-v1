"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/project";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ProjectSection() {
  const featuredProjects = projects.slice(0, 3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-white my-8"
        variants={itemVariants}
      >
        Featured Projects
      </motion.h2>

      <div className="space-y-8 group/list">
        {featuredProjects.map((project, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <ProjectCard data={project} />
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-primary transition-colors duration-300"
          aria-label="View all projects"
        >
          <span>View All Projects</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-4 h-4 transition-transform duration-300 transform-gpu group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </motion.section>
  );
}
