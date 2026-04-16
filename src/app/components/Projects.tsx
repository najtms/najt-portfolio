import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  // Sample projects - you can replace with actual projects from GitHub
  const projects = [
    {
      id: 1,
      title: 'OLX Car Tracker',
      description: 'OLX Car Tracker is a Streamlit web app for searching, analyzing, and visualizing car listings from OLX.ba Instantly estimate your cars value, find the best deals, and explore listings on an interactive map.',
      tech: ['Python', 'Streamlit', 'PyDeck', 'Google Gemini API','Custom Python scrapers'],
      github: 'https://github.com/najtms/olx-car-insights',
      featured: true,
    },
    {
      id: 2,
      title: 'Ivox Car Rental',
      description: 'Ivox Car Rental is a single-page, mobile-friendly car rental web application.The app enables users to register, browse and book cars, while administrators can manage cars, users, and bookings. The project follows a modern web development architecture using a PHP, JavaScript, and MySQL tech stack, with strict separation between frontend and backend.',
      tech: ['JavaScript', 'PHP', 'MySQL','OpenAPI/Swagger','JWT','HTML','CSS/BootStrap'],
      github: 'https://github.com/najtms/introductionToWeb',
      featured: true,
    },
    {
      id: 3,
      title: 'QA Automation Framework',
      description: 'Built a Java-based test automation framework using Selenium to simulate real user behavior and verify application stability. Designed reusable test scenarios and assertion-based validations for key workflows.',
      tech: ['Java', 'Selenium'],
      github: 'https://github.com/najtms/',
      featured: false,
    },
    {
      id: 4,
      title: 'Interactive Algorithm Visualizer',
      description: 'Developed a web-based tool for visualizing data structures and algorithms through interactive animations and real-time feedback, enhancing understanding of core computer science concepts.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/najtms/ds-algo-visualizer',
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs text-white">
                  Featured
                </div>
              )}

              {/* Project Content */}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/najtms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-600 hover:border-blue-500 text-white rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
