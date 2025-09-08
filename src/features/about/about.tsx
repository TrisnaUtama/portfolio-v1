"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTimes,
  faDownload,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  AnimatePresence,
  easeIn,
  easeOut,
  motion,
  Variants,
} from "framer-motion";

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPdfLoading, setIsPdfLoading] = useState(true);

  const openModal = () => {
    setIsPdfLoading(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } as any,
    },
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalPanelVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: easeOut },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { duration: 0.2, ease: easeIn },
    },
  };

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-gray-200"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* About Text */}
        <motion.div variants={itemVariants} className="space-y-6 text-justify">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            I'm a passionate Software Engineer with a strong background in web
            and mobile development, specializing in building scalable and
            efficient applications. With expertise in modern technologies such
            as{" "}
            <span className="font-semibold text-white">
              Next.js, Express, Elysia.js,
            </span>{" "}
            and <span className="font-semibold text-white">Flutter</span>, I
            thrive on solving complex problems through clean, maintainable, and
            well-optimized code.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            Currently, I am in my final year at{" "}
            <span className="font-semibold text-white">
              Atma Jaya Yogyakarta University
            </span>
            , pursuing a degree in Informatics. Throughout my journey, I had the
            opportunity to develop a web-based application for{" "}
            <span className="text-white font-medium">
              Angkasa Pura Indonesia
            </span>
            , designed to streamline letter tracking. This system significantly
            enhances efficiency for employees, especially secretaries, by
            providing real-time updates on letter statuses.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            Beyond my academic and professional experiences, I co-founded{" "}
            <span className="font-semibold text-white">Avenire</span>, a
            software house I built alongside my friends. Together, we are
            dedicated to transforming real-world challenges into innovative
            digital solutions.
          </p>
        </motion.div>

        {/* --- Enhanced & Animated Button --- */}
        <motion.button
          onClick={openModal}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center gap-3 mt-12 sm:mt-14 md:mt-16 px-8 py-4 text-lg font-bold text-white overflow-hidden bg-primary rounded-lg transition-shadow duration-300 ease-in-out"
        >
          <span className="z-10">View Full Resume</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-5 h-5 z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
        </motion.button>
      </motion.div>

      {/* --- Enhanced & Animated Modal --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              variants={modalPanelVariants}
              className="bg-slate-900 w-full max-w-4xl h-[90vh] rounded-xl shadow-2xl ring-1 ring-white/10 flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
                <h2 className="text-xl font-semibold text-white">My Resume</h2>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-slate-700 hover:text-white transition"
                  aria-label="Close modal"
                >
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>

              {/* PDF Viewer Area */}
              <div className="flex-1 relative">
                {isPdfLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900">
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="animate-spin text-primary text-4xl"
                    />
                    <p className="mt-4 text-gray-300">Loading Resume...</p>
                  </div>
                )}
                <iframe
                  src="/cv/resume_trisna_utama.pdf"
                  className={`w-full h-full transition-opacity duration-500 ${
                    isPdfLoading ? "opacity-0" : "opacity-100"
                  }`}
                  title="Resume"
                  onLoad={() => setIsPdfLoading(false)}
                ></iframe>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-900/80 border-t border-slate-700 flex justify-end flex-shrink-0">
                <a
                  href="/cv/resume_trisna_utama.pdf"
                  download="Trisna-Utama-Resume.pdf"
                  className="inline-flex items-center gap-3 bg-primary text-white px-6 py-2.5 rounded-lg shadow-md hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
