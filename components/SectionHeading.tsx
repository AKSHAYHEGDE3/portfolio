type Props = {
  number: string;
  title: string;
};

export default function SectionHeading({ number, title }: Props) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        <span className="font-mono text-base text-accent sm:text-lg">{number}.</span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
