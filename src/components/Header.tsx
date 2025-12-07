import { Linkedin, Github, Mail } from "lucide-react";
import content from "@/data/content.json";

const Header = () => {
  const { profile } = content;

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-portfolio py-4 flex items-center justify-between">
        <a 
          href="#top" 
          className="text-xl font-bold text-primary-brand hover:opacity-80 transition-opacity"
        >
          {profile.name}
        </a>
        
        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profile.email}
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
