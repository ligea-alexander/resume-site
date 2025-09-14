import { ExternalLink, Github } from "lucide-react";

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectItem({ title, description, technologies, liveUrl, githubUrl }: ProjectItemProps) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-start justify-between mb-2">
        <h3>{title}</h3>
        <div className="flex gap-3 ml-4 print:hidden">
          {githubUrl && (
            <a 
              href={githubUrl} 
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              title="View GitHub Repository"
            >
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              title="View Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="text-muted-foreground mb-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-muted text-muted-foreground rounded text-sm print:bg-gray-100"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}