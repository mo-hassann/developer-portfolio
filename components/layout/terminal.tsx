"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { TerminalInput } from "./terminal-input";

export default function Terminal() {
  const [isFocused, setIsFocused] = useState(false);
  const pathname = usePathname();
  const ref = useRef<null | HTMLUListElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([`○ Compiling / ...`]);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<null | HTMLInputElement>(null);
  const spanRef = useRef<null | HTMLSpanElement>(null);

  useEffect(() => {
    if (inputRef.current && spanRef.current) {
      // Set the span text to the input value
      spanRef.current.textContent = inputValue || " ";
      // Calculate and set the width of the input based on the span
      inputRef.current.style.width = `${spanRef.current.offsetWidth}px`;
    }
  }, [inputValue]);

  // auto stack to the bottom
  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      // scroll to the bottom
      ref.current?.lastElementChild?.scrollIntoView({ behavior: "instant" });
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [pathname]);

  // add elements every time the path name changes
  useEffect(() => {
    setTerminalLines((curState) => [...curState, `GET ${pathname} in ${Math.floor(Math.random() * 1000)}ms`, `✓ Compiled in ${(Math.random() * 1.5).toFixed(2)}s (${Math.floor(Math.random() * 1000)} modules)`]);
  }, [pathname]);

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
      <ul ref={ref} className="w-full px-6 pt-8 pb-4 cursor-text h-full overflow-y-scroll" onClick={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
        {terminalLines.map((line) => {
          const lineArr = line.split("✓");
          return (
            <li key={Math.random()}>
              {lineArr.map((value) =>
                !value ? (
                  <span className="text-green-500 font-extrabold" key={Math.random()}>
                    ✓
                  </span>
                ) : (
                  value
                )
              )}
            </li>
          );
        })}
        <li>
          {/* <form
            onSubmit={(e) => {
              e.preventDefault();
              setTerminalLines((curValues) => [...curValues, inputValue]);
              setInputValue("");
            }}
            className="w-full flex items-center"
          >
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" ref={inputRef} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="bg-inherit h-auto outline-none w-4 text-foreground overflow-hidden resize-none" />
            <div className={cn("border w-1.5 h-4 border-foreground", isFocused && "bg-foreground")} />
          </form>
          {/* Hidden span to measure the width of the text 
          <span ref={spanRef} style={{ visibility: "hidden", whiteSpace: "pre", fontSize: "inherit", fontFamily: "inherit" }}>
            {inputValue || " "}
          </span>
           */}
          <TerminalInput />
        </li>
      </ul>
    </div>
  );
}
