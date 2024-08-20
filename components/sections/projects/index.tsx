import React from "react";
import projects from "./projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LaptopAnimation from "./laptop-animation";
import { ExternalLink, Globe } from "lucide-react";

export default function ProjectsSection() {
  return (
    <div id="projects" className="w-full p-12 flex justify-between container my-32">
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
          <div key={project.title} className="w-[500px] sticky top-8 rounded-2xl bg-muted border overflow-hidden">
            <div className="flex justify-between flex-shrink-0 px-4 pt-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe size={18} />
                <span>Web-Page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="block rounded-full size-3 bg-green-500 ml-auto" />
                <span className="block rounded-full size-3 bg-yellow-500" />
                <span className="block rounded-full size-3 bg-red-500 " />
              </div>
            </div>
            <div className="group relative h-[200px] overflow-hidden cursor-pointer rounded-lg m-2">
              <Image className="size-full object-cover object-top" src={project.image} alt={project.title} width={400} height={400} />
              <div className="size-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <ExternalLink size={24} className="absolute top-4 right-4 opacity-90 hidden group-hover:block" />
            </div>
            <div className="px-4 py-2 w-full">
              <h2 className="text-xl capitalize font-bold my-3">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="space-x-2 my-7">
                <Button variant="secondary">Live view</Button>
                <Button variant="ghost" className="bg-muted-foreground/10">
                  Git Hub
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
