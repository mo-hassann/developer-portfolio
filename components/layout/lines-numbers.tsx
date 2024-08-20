"use client";
import { useEffect, useState } from "react";

export default function LinesNumber() {
  const [scrollHeight, setScrollHeight] = useState<undefined | number>();
  useEffect(() => {
    setScrollHeight(Math.floor(document.body.scrollHeight / 3));
    console.log(document.body.scrollHeight, "scroll height-------");
  }, []);
  console.log(scrollHeight);
  return (
    <div className="w-fit px-5 py-5 text-muted-foreground/70 text-sm hidden sm:flex flex-col items-end gap-1 flex-shrink-0">
      {Array(scrollHeight || 1)
        .fill(0)
        .map((_, i) => (
          <div key={i}>{`${i + 1}` /* .padStart(2, "0") */}</div>
        ))}
    </div>
  );
}
