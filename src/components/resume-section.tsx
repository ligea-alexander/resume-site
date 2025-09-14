interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="border-b border-border pb-3 mb-6 text-accent-foreground print:border-gray-300 print:text-black">{title}</h2>
      {children}
    </section>
  );
}