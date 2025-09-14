interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

export function ExperienceItem({ title, company, location, duration, achievements }: ExperienceItemProps) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <div>
          <h3>{title}</h3>
          <p className="text-muted-foreground">{company} • {location}</p>
        </div>
        <p className="text-muted-foreground mt-1 sm:mt-0">{duration}</p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 leading-relaxed">
        {achievements.map((achievement, index) => (
          <li key={index} className="pl-1">{achievement}</li>
        ))}
      </ul>
    </div>
  );
}