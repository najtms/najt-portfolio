import { Github, Mail, Linkedin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              © 2026 Muhamad Assaad | NAJT
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/najtms"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-assaad-24b1b029b/"
              className="p-2 text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6 pt-6 border-t border-white/5">
          <p className="text-gray-500 text-sm">
            Designed & Built by Muhamad Assaad • Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
