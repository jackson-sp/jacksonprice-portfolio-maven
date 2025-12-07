import { Linkedin, Github, Mail } from "lucide-react";
import content from "@/data/content.json";

const Footer = () => {
  const { profile } = content;

  return (
    <footer className="bg-footer py-10">
      <div className="container-portfolio text-center">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-footer/70 hover:text-footer transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-footer/70 hover:text-footer transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profile.email}
            className="text-footer/70 hover:text-footer transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-sm text-footer/60">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
