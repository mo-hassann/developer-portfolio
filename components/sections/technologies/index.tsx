"use client";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";

export default function Technologies() {
  const ref = useRef(null);
  useCurSection(ref);
  return (
    <div ref={ref} className="flex gap-4 items-center flex-col justify-center bg-muted w-full py-12 my-12 overflow-hidden">
      <h2 className="text-2xl font-bold">
        <span className="text-gradient-secondary">My Technologies</span>
      </h2>
      <Marquee autoFill pauseOnClick>
        <div className="flex gap-4 items-center justify-center w-11/12 p-2">
          {data.technologies.skills.map((skill) => (
            <Link key={skill.name} href={skill.link} target="_blank" className="bg-background border size-[70px] md:size-[90px] flex items-center justify-center rounded-full overflow-hidden p-6 flex-shrink-0 hover:bg-border">
              <Image className="h-full w-auto" src={skill.src} alt={skill.name} width={50} height={50} />
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
