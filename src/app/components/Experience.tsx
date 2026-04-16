import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, Calendar } from 'lucide-react';

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

          {/* Education Entry */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative mb-12 md:mb-16"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-lg shadow-blue-500/50" />
              
              {/* Content */}
              <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4 justify-start md:justify-end">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                      <GraduationCap size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Bachelor's Degree</h3>
                  </div>
                  
                  <h4 className="text-xl text-blue-400 mb-2">Information Technologies</h4>
                  <p className="text-gray-300 mb-3">International Burch University</p>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm justify-start md:justify-end">
                    <Calendar size={16} />
                    <span>2022 - 2026 (Expected)</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-gray-400 text-sm">
                      Final year Information Technologies student with a focus on software development, web technologies, 
                      and database systems. Built multiple full-stack projects, applying programming concepts to solve 
                      real-world problems and continuously improving technical skills.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Additional Experience/Certification Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-lg shadow-purple-500/50" />
              
              {/* Content */}
              <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">Self-Learning & Projects</h3>
                  <p className="text-gray-300 mb-3">Continuous Development</p>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Calendar size={16} />
                    <span>2021 - Present</span>
                  </div>
                  
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p>• Built and deployed multiple full-stack web applications</p>
                    <p>• Focused on creating practical, real-world solutions through projects</p>
                    <p>• Exploring new frameworks, tools, and development patterns</p>
                    <p>• Constantly improving problem-solving and software design skills</p>
                    <p>• Currently working on building more impactful and scalable applications</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white font-medium">Graduating 2026 • Available for Opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
