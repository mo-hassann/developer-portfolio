"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function Terminal() {
  const [isFocused, setIsFocused] = useState(false);
  const pathname = usePathname();
  const ref = useRef<null | HTMLUListElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([`○ Compiling / ...`]);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<null | HTMLInputElement>(null);
  const spanRef = useRef<null | HTMLSpanElement>(null);

  // input fucus
  useEffect(() => {
    if (inputRef.current && isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  // change the input width while typing
  useEffect(() => {
    if (inputRef.current && spanRef.current) {
      // Set the span text to the input value
      spanRef.current.textContent = inputValue || "";
      // Calculate and set the width of the input based on the span
      inputRef.current.style.width = `${spanRef.current.offsetWidth}px`;
    }
  }, [inputValue]);

  // auto scroll stack to the bottom
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

  // add lines to the terminal every time the path name changes
  useEffect(() => {
    const time1 = setTimeout(() => {
      setTerminalLines((curValues) => [...curValues, `GET ${pathname} in ${Math.floor(Math.random() * 1000)}ms`]);
    }, 600);
    // show server success
    const time2 = setTimeout(() => {
      setTerminalLines((curValues) => [...curValues, `✓ Compiled in ${(Math.random() * 1.5).toFixed(2)}s (${Math.floor(Math.random() * 1000)} modules)`]);
    }, 1000);

    return () => {
      clearTimeout(time1);
      clearTimeout(time2);
    };
  }, [pathname]);

  // handle terminal input submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;
    // add user input line
    setTerminalLines((curValues) => [...curValues, inputValue]);
    setInputValue("");
    // show error message after while
    const time1 = setTimeout(() => {
      setTerminalLines((curValues) => [...curValues, `The term '${inputValue}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again. At line:1 char:1`]);
    }, 600);
    // show server success
    const time2 = setTimeout(() => {
      setTerminalLines((curValues) => [...curValues, `✓ Compiled in ${(Math.random() * 1.5).toFixed(2)}s (${Math.floor(Math.random() * 1000)} modules)`]);
    }, 1000);

    return () => {
      clearTimeout(time1);
      clearTimeout(time2);
    };
  };

  return (
    <div className="border-t w-full text-xs h-full bg-muted overflow-hidden">
      {/* tabs */}
      <ul className="flex items-start gap-4 sticky top-0 text-muted-foreground px-4 py-2 bg-muted flex-shrink-0">
        <li className="cursor-pointer hover:text-foreground">PROBLEMS</li>
        <li className="cursor-pointer hover:text-foreground">OUTPUT</li>
        <li className="cursor-pointer hover:text-foreground">DEBUG CONSOLE</li>
        <li className="relative text-foreground">
          TERMINAL <div className="absolute -bottom-1 w-full h-0.5 bg-primary-foreground" />
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
          <form onSubmit={handleSubmit} className="w-full flex items-center">
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" ref={inputRef} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="bg-inherit h-auto outline-none w-0 text-foreground overflow-hidden resize-none caret-muted" />
            <div className={cn("border w-1.5 h-4 border-foreground", isFocused && "bg-foreground")} />
          </form>
          {/* Hidden span to measure the width of the text */}
          <span ref={spanRef} style={{ visibility: "hidden", whiteSpace: "pre", fontSize: "inherit", fontFamily: "inherit" }}>
            {inputValue || " "}
          </span>
        </li>
      </ul>
    </div>
  );
}
