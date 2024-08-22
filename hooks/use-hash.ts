"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState<undefined | string>();
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  const updateHash = (newHash: string) => {
    router.push(`#${newHash}`, { scroll: false });
  };

  return { hash, updateHash };
}
