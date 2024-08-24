import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { RefObject, useEffect } from "react";

export default function useCurSection(curSectionRef: RefObject<Element>, amount: number | "all" | "some" = "all") {
  const isInView = useInView(curSectionRef, { amount });
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      const sectionId = curSectionRef.current?.id;
      if (isInView && sectionId) router.push(`#${sectionId}`, { scroll: false });
    }, 400);

    return () => clearTimeout(timeout);
  });

  return isInView;
}
