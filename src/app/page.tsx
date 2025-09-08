"use client";
import { About } from "@/features/about/about";
import Experiences from "@/features/experiences/experience";
import Project from "@/features/projects/project";
import React from "react";

export default function page() {
  return (
    <>
      <About />
      <Experiences />
      <Project />
    </>
  );
}
