interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillCategories.map((category, index) => (
        <div key={index}>
          <h4 className="mb-4">{category.category}</h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="px-3 py-2 bg-secondary text-secondary-foreground rounded print:bg-gray-100 print:border print:border-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}