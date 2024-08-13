import Game from "@/components/game";

export default function Home() {
  return (
    <div className="size-full flex gap-14 p-4 items-center justify-center">
      <div className="space-y-1 text-left [&_span]:text-secondary [&_span]:font-normal text-xl">
        <span className="-ml-12">{"<body>"}</span>
        <br />
        <span className="-ml-6">{"<div>"}</span>
        <p className="text-muted-foreground">
          <span>{"<p>"}</span> Hi There 👋, I&apos;m <span>{"</p>"}</span>
        </p>
        <h1 className="text-4xl font-thin">
          <span>{"<h1>"}</span>Mohamed Adel<span>{"</h1>"}</span>
        </h1>
        <h2 className="text-primary text-base">
          <span>{"<h2>"}</span> Fullstack Web Developer <span>{"</h2>"}</span>
        </h2>
        <span className="-ml-6">{"</div>"}</span>
        <br />
        <span className="-ml-12">{"</body>"}</span>
      </div>
      <Game />
    </div>
  );
}
