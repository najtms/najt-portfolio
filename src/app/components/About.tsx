import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Database, Server, Globe, Terminal, Smartphone } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const technologies = [
    { name: 'Python', icon: Code2 },
    { name: 'Java', icon: Code2 },
    { name: 'JavaScript', icon: Globe },
    { name: 'PHP', icon: Server },
    { name: 'MySQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'React', icon: Globe },
    { name: 'Node.js', icon: Terminal },
    { name: 'PostgresSQL', icon: Database},
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm an <span className="text-blue-400 font-semibold">Information Technologies student</span> at 
                  International Burch University, graduating this year. My journey in tech has been driven by 
                  a passion for building innovative solutions and continuously expanding my skill set.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Throughout my studies, I've developed a strong foundation in both <span className="text-purple-400 font-semibold">
                  frontend and backend development</span>, working with modern technologies and frameworks to 
                  create robust, user-friendly applications.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm now seeking opportunities to break into the tech industry, where I can apply my skills, 
                  contribute to meaningful projects, and grow as a professional developer.
                </p>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Technologies I Work With</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                          <Icon size={20} className="text-blue-400" />
                        </div>
                        <span className="text-gray-300 font-medium">{tech.name}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
