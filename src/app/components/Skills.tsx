import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { BrainCircuit, Code2, Database, Server } from 'lucide-react';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const coreStack = ['Python','JavaScript', 'PHP', 'MySQL', 'MongoDB'];

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'HTML', level: 84, confidence: 'Comfortable', note: 'Used to structure and ship responsive pages' },
        { name: 'CSS', level: 82, confidence: 'Comfortable', note: 'Styling systems, layouts, and modern UI patterns' },
        { name: 'JavaScript', level: 86, confidence: 'Comfortable', note: 'Used in multiple projects and interactive features' },
        { name: 'Tailwind', level: 76, confidence: 'Comfortable', note: 'Utility-first styling for fast UI development' },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'PHP', level: 82, confidence: 'Comfortable', note: 'Built backend logic and API-connected features' },
        { name: 'Java', level: 72, confidence: 'Familiar', note: 'Object-oriented programming and core syntax' },
        { name: 'Python', level: 78, confidence: 'Comfortable', note: 'Problem solving and scripting workflows' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 80, confidence: 'Comfortable', note: 'Relational schema design and query writing' },
        { name: 'MongoDB', level: 70, confidence: 'Familiar', note: 'NoSQL data modeling and basic aggregation' },
      ],
    },
  ];

  const coreConcepts = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'System Design & Analysis',
    'Database Design (SQL & NoSQL)',
    'Operating Systems & Networking Fundamentals',
    'Software Testing & Quality Assurance',
    'UI/UX Principles',
    'Problem Solving',
  ];

  const toolTags = [
    'Git & GitHub',
    'REST APIs & JSON',
    'Docker',
    'Linux / CLI',
    'VS Code',
    'Agile Methodology',
  ];

  return (
    <section
      id="skills"
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
            Tech Stack & Learning Journey
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A combination of technologies I&apos;ve worked with and tools I&apos;m actively developing my skills in.
          </p>
        </motion.div>

        {/* Core Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
            <h3 className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-4 text-center">Core Stack</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {coreStack.map((stack, index) => (
                <motion.span
                  key={stack}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.15 + index * 0.06 }}
                  className="px-4 sm:px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-100 font-medium shadow-[0_0_18px_rgba(96,165,250,0.24)]"
                >
                  {stack}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * categoryIndex, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                    <Icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-300 text-sm font-medium">{skill.confidence}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-xs text-gray-400">{skill.note}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1, duration: 1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                <BrainCircuit size={24} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Core Concepts</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {coreConcepts.map((concept, index) => (
                <motion.div
                  key={concept}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.07 }}
                  className="px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-gray-200 text-sm sm:text-base"
                >
                  {concept}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl text-gray-300 mb-6">Tools I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {toolTags.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-gray-200 text-sm sm:text-base font-medium hover:border-blue-400/70 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto">
            Constantly learning, building, and adapting to new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
