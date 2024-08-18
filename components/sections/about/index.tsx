import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <div id="about" className="w-full py-12 bg-muted">
      <h1 className="text-center text-5xl mb-12">
        <span className="text-gradient-primary">{"-{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>

      <div className="flex gap-9 items-center w-10/12 mx-auto p-5 rounded-lg">
        <div className="relative flex-shrink-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl" />
          <div className="rounded-full size-[200px] bg-gradient-primary p-0.5">
            <Image className="size-full rounded-full grayscale hover:grayscale-0 transition-all" width={600} height={600} alt="about profile image" src="/imgs/about-image.png" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            <span className="text-secondary">{"< "}</span>
            Who I&apos;m
            <span className="text-secondary">{" />"}</span>
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur expedita eius unde. Esse accusamus a, earum quia, eius, debitis possimus iste natus saepe aliquid quasi. Consequatur reiciendis, illo alias quaerat facere vitae
            exercitationem rem!
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between text-center w-3/5 max-w-[900px] h-[100px] mx-auto mt-7 p-5">
        <div className="space-y-1">
          <p className="text-muted-foreground">PROJECTS-COMPLETED</p>
          <p className="text-4xl font-bold">+100</p>
        </div>
        <Separator orientation="vertical" />
        <div className="space-y-1">
          <p className="text-muted-foreground">TASk-COMPLETED</p>
          <p className="text-4xl font-bold">+150</p>
        </div>
        <Separator orientation="vertical" />
        <div className="space-y-1">
          <p className="text-muted-foreground">TODOS-COMPLETED</p>
          <p className="text-4xl font-bold">+7</p>
        </div>
      </div>
      {/* TODO: add technologies i use */}
    </div>
  );
}

/* 
      <div className="grid gap-4 w-full max-w-[1600px] h-full lg:min-h-[1000px] min-h-[60vw] mx-auto grid-cols-24 px-8">
        <div className="col-span-7 row-span-6 bg-muted border rounded-md p-7">a</div>
        <div className="col-span-11 row-span-3 bg-muted border rounded-md p-7 flex flex-col justify-between">
          <h2 className="text-5xl font-bold">Who I&apos;m</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum obcaecati dignissimos quasi, dolores porro commodi odit dolorem molestiae laborum reiciendis sapiente numquam odio voluptas delectus cupiditate expedita consequatur minima labore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus, possimus adipisci! Facere quia dolore nesciunt velit, ea quasi. Dolor cupiditate optio, consectetur eum iure impedit quos aliquam quasi veniam pariatur.
          </p>
        </div>
        <div className="col-span-6 row-span-2 bg-background border rounded-md p-7">c</div>
        <div className="col-span-6 row-span-3 bg-background border rounded-md p-7">d</div>
        <div className="col-span-7 row-span-3 bg-background border rounded-md p-7">e</div>
        <div className="col-span-4 row-span-3 bg-muted border rounded-md p-7">f</div>
        <div className="col-span-6 row-span-1 bg-muted border rounded-md p-7">g</div>
      </div>

*/
