import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";

export function ResumeHeader() {
  return (
    <header className="border-b border-border pb-8 mb-8 print:border-gray-300">
      <div className="text-center">
        <h1 className="mb-3 text-5xl print:text-4xl">Ligea Alexander</h1>
        <div className="w-24 h-1 bg-accent-foreground mx-auto mb-4 print:bg-gray-400"></div>
        <h2 className="text-muted-foreground mb-2 print:text-gray-600">
          Frontend Developer (Internship Candidate)
        </h2>
        <p className="text-muted-foreground mb-4 text-sm italic print:text-gray-600">
          Currently in Hamburg, Germany from Brooklyn, NYC
        </p>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-muted-foreground text-sm lg:text-base">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>ligea.alex@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>015172334579</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Hamburg, Germany</span>
          </div>
          <a 
            href="https://linkedin.com/in/ligea-alexander" 
            className="flex items-center gap-2 hover:text-accent-foreground transition-colors print:text-muted-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
            <span>linkedin.com/in/ligea-alexander</span>
          </a>
          <a 
            href="https://github.com/ligea-alexander" 
            className="flex items-center gap-2 hover:text-accent-foreground transition-colors print:text-muted-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            <span>github.com/ligea-alexander</span>
          </a>
        </div>
      </div>
    </header>
  );
}