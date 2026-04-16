import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="pt-20 pb-10 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email Card */}
          <motion.a
            href="mailto:your.email@example.com"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                <Mail size={28} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Email Me</h3>
                <p className="text-gray-400 text-sm">Send me an email</p>
              </div>
            </div>
            <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
              muhamadassaadw@gmail.com
            </p>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com/najtms"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                <Github size={28} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">GitHub</h3>
                <p className="text-gray-400 text-sm">Check out my code</p>
              </div>
            </div>
            <p className="text-purple-400 group-hover:text-purple-300 transition-colors">
              github.com/najtms
            </p>
          </motion.a>



            <motion.a
            href="https://www.linkedin.com/in/muhamad-assaad-24b1b029b/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                <Linkedin size={24} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Check me out on LinkedIn</p>
              </div>
            </div>
            <p className="text-purple-400 group-hover:text-purple-300 transition-colors">
              linkedin.com
            </p>
          </motion.a>
        </div>

        
        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Connect with me on</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/najtms"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:muhamadassaadw@gmail.com"
              className="p-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-assaad-24b1b029b/"
              className="p-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
