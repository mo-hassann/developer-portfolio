export default function LinesNumber() {
  return (
    <div className="h-full overflow-hidden w-fit px-5 py-5 text-muted-foreground/70 text-sm flex flex-col items-end gap-1 flex-shrink-0">
      {Array(50)
        .fill(0)
        .map((_, i) => (
          <div key={i}>{`${i + 1}` /* .padStart(2, "0") */}</div>
        ))}
    </div>
  );
}
