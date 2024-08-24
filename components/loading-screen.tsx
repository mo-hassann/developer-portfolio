"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, [isMounted]);

  if (isMounted) return;

  return (
    <div className="fixed top-0 left-0 size-full bg-muted z-50 flex items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="block size-5 animate-bounce duration-900 rounded-full bg-primary-foreground" />
        <span className="block size-5 animate-bounce duration-700 rounded-full bg-primary-foreground" />
        <span className="block size-5 animate-bounce duration-300 rounded-full bg-primary-foreground" />
      </div>
    </div>
  );
}
