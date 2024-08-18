import React from "react";

export default function AboutSection() {
  return (
    <div id="about" className="w-full">
      <h1 className="text-center text-5xl mb-12">
        <span className="text-gradient-primary">{"-{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>
      <div className="grid gap-4 w-full max-w-[1600px] h-full lg:min-h-[1000px] min-h-[60vw] mx-auto grid-cols-24 px-8">
        <div className="col-span-7 row-span-6 bg-muted border rounded-md p-3">a</div>
        <div className="col-span-11 row-span-3 bg-muted border rounded-md p-3 flex flex-col justify-between">
          <h2 className="text-5xl font-bold">Who I&apos;m</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum obcaecati dignissimos quasi, dolores porro commodi odit dolorem molestiae laborum reiciendis sapiente numquam odio voluptas delectus cupiditate expedita consequatur minima labore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus, possimus adipisci! Facere quia dolore nesciunt velit, ea quasi. Dolor cupiditate optio, consectetur eum iure impedit quos aliquam quasi veniam pariatur.
          </p>
        </div>
        <div className="col-span-6 row-span-2 bg-background border rounded-md p-3">c</div>
        <div className="col-span-6 row-span-3 bg-background border rounded-md p-3">d</div>
        <div className="col-span-7 row-span-3 bg-background border rounded-md p-3">e</div>
        <div className="col-span-4 row-span-3 bg-muted border rounded-md p-3">f</div>
        <div className="col-span-6 row-span-4 bg-muted border rounded-md p-3">g</div>
        <div className="col-span-8 row-span-3 bg-muted border rounded-md p-3">h</div>
        <div className="col-span-10 row-span-3 bg-muted border rounded-md p-3">j</div>
      </div>
    </div>
  );
}
