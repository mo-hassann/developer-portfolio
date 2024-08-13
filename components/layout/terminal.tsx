"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export default function Terminal() {
  const [isFocused, setIsFocused] = useState(false);

  const ref = useRef<null | HTMLUListElement>(null);

  const scrollToBottom = () => {
    ref.current?.lastElementChild?.scrollIntoView({ behavior: "instant" });
  };

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      scrollToBottom();
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="border-t w-full text-xs h-full bg-muted overflow-hidden">
      {/* tabs */}
      <ul className="flex items-start gap-4 sticky top-0 text-muted-foreground px-4 py-2 bg-muted flex-shrink-0">
        <li className="cursor-pointer hover:text-foreground">PROBLEMS</li>
        <li className="cursor-pointer hover:text-foreground">OUTPUT</li>
        <li className="cursor-pointer hover:text-foreground">DEBUG CONSOLE</li>
        <li className="relative text-foreground">
          TERMINAL <div className="absolute -bottom-1 w-full h-0.5 bg-primary" />
        </li>
        <li className="cursor-pointer hover:text-foreground">PORTS</li>
        <li className="cursor-pointer hover:text-foreground">GITLENS</li>
      </ul>
      {/* console */}
      <ul ref={ref} className="w-full px-6 pb-4 cursor-text h-full overflow-y-scroll" onClick={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
        <li>
          <span className="font-bold">○</span> Compiling / ...
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled / in 5.1s (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 737ms (255 modules)
        </li>
        <li>
          GET / <span className="font-bold text-green-600">200</span> in 5912ms
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 1690ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <span className="font-bold text-green-600">✓</span> Compiled in 429ms (538 modules)
        </li>
        <li>
          <div className={cn("border w-1.5 h-4 border-foreground", isFocused && "bg-foreground")} />
        </li>
      </ul>
    </div>
  );
}
