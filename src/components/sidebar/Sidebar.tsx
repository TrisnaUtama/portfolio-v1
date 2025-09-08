"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export const Sidebar = () => {
  const socialLinks = [
    { icon: faGithub, url: "https://github.com/TrisnaUtama" },
    {
      icon: faLinkedinIn,
      url: "https://www.linkedin.com/in/trisna-utama-a3535b2bb",
    },
    { icon: faInstagram, url: "https://www.instagram.com/trisnautamaa/" },
  ];

  const menuItems = [
    { name: "ABOUT", path: "#about" },
    { name: "EXPERIENCES", path: "#experiences" },
    { name: "PROJECTS", path: "#projects" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="h-full flex flex-col justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top Content */}
      <div className="space-y-16">
        {/* Header Section */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h1 className="text-white text-5xl font-bold tracking-tight">
            Trisna Utama
          </h1>
          <h3 className="text-white/90 text-2xl font-medium">
            Software & AI Engineer
          </h3>
          <p className="text-base leading-relaxed max-w-xs pt-2">
            I build reliable and efficient software that solves real-world
            problems.
          </p>
        </motion.section>

        {/* Sidebar Menu */}
        <motion.nav variants={itemVariants} className="space-y-5">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="flex items-center gap-4 group"
            >
              <hr className="w-8 border-t-2 border-gray-600 transition-all duration-300 ease-in-out group-hover:w-16 group-hover:border-white" />
              <p className="text-sm font-bold tracking-widest text-gray-400 transition-colors duration-300 group-hover:text-white">
                {item.name}
              </p>
            </Link>
          ))}
        </motion.nav>
      </div>

      {/* Bottom-Aligned Icons */}
      <motion.section
        className="flex gap-6"
        variants={containerVariants} // Stagger the icons as well
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
          >
            <FontAwesomeIcon icon={social.icon} className="text-xl" />
          </motion.a>
        ))}
      </motion.section>
    </motion.div>
  );
};
