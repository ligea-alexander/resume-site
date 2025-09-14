interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  relevant?: string[];
}

export function EducationItem({ degree, institution, location, duration, gpa, relevant }: EducationItemProps) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <div>
          <h3>{degree}</h3>
          <p className="text-muted-foreground">{institution} • {location}</p>
          {gpa && <p className="text-muted-foreground">GPA: {gpa}</p>}
        </div>
        <p className="text-muted-foreground mt-1 sm:mt-0">{duration}</p>
      </div>
      {relevant && relevant.length > 0 && (
        <div className="mt-2">
          <p className="text-muted-foreground">Relevant Coursework: {relevant.join(", ")}</p>
        </div>
      )}
    </div>
  );
}