"use client";
import React, { useRef } from "react";
import projects from "./projects";
import Image from "next/image";

import LaptopAnimation from "./laptop-animation";

import ProjectCard from "./project-card";
import useCurSection from "@/hooks/use-cur-section";

export default function ProjectsSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <div ref={ref} id="projects" className="w-full p-12 flex justify-between container my-32">
      <div>
        <div className="sticky top-8">
          {/* grid image behind */}
          <Image className="absolute -top-2 -left-5 -z-10 text-transparent opacity-30 w-full h-1/2 object-cover" src="/svgs/grid.svg" alt="grid image" width={0} height={0} />
          <h1 className="text-4xl text-gradient-primary">
            <span>{"//"}</span>
            Recent Projects
          </h1>
          <LaptopAnimation className="w-[300px] -scale-x-100 scale-y-100" />
          <p className="w-[400px] text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id incidunt voluptatibus.</p>
        </div>
      </div>
      <div className="px-16 space-y-[800px]">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
