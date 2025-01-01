import React from 'react';
import { FileDown, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioHero = ({ darkMode ,setDarkMode}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className={` ${darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-600 to-indigo-700'} text-white relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      
      <div className="absolute mt-10 top-16 right-4 space-x-4">
        {['github', 'linkedin', 'twitter'].map((social) => (
          <motion.a
            key={social}
            href={`https://${social}.com`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block p-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            {social === 'github' && <Github className="w-5 h-5" />}
            {social === 'linkedin' && <Linkedin className="w-5 h-5" />}
            {social === 'twitter' && <Twitter className="w-5 h-5" />}
          </motion.a>
        ))}
      </div>

      <div className="container mx-auto px-6 py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-3xl space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="overflow-hidden m-5">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
                >
                  <p className="text-xl font-medium">Hello, I'm a web developer and freelancer</p>
                </motion.div>
              </div>
              <h1 className="text-6xl font-bold leading-tight">
                Full Stack
                <span className="block">Developer</span>
              </h1>
              <p className="text-xl text-blue-50/90">
                Building beautiful, functional, and scalable web applications with modern technologies.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2 shadow-lg"
              >
                <FileDown className="h-5 w-5" /> Download Resume
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-30 animate-pulse"></div>
              </motion.div>
              <img
                src="/gautam.png"
                alt="Developer"
                className="absolute inset-8 rounded-full object-cover border-4 border-white/50 shadow-2xl w-80 h-80"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default PortfolioHero;