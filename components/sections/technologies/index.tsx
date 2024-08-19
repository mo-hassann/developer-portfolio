import Link from "next/link";
import skills from "./technologies";
import Image from "next/image";

export default function Technologies() {
  return (
    <div className="flex gap-4 items-center flex-col justify-center bg-muted w-full py-12 my-12">
      <h2 className="text-2xl font-bold">
        <span className="text-gradient-secondary">My Technologies</span>
      </h2>
      <div className="flex gap-4 items-center justify-center w-11/12 overflow-x-auto p-2">
        {skills.map((skill) => (
          <Link href={skill.link} target="_blank" key={skill.name} className="bg-background border size-[90px] flex items-center justify-center rounded-full overflow-hidden p-6 flex-shrink-0">
            <Image className="h-full w-auto" src={skill.src} alt={skill.name} width={50} height={50} />
          </Link>
        ))}
      </div>
    </div>
  );
}
