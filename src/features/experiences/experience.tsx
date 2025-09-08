"use client";

import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experiences";
import React from "react";
import { motion } from "framer-motion";

export default function Experiences() {
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
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <motion.section
      id="experiences"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-white my-8"
        variants={itemVariants}
      >
        My Experiences
      </motion.h2>
      <div className="space-y-8 group/list">
        {experiences.map((experience, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <ExperienceCard data={experience} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
