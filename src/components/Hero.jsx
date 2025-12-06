import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary), var(--bg-primary))' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
            👋 Welcome to my Portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span style={{ color: 'var(--text-primary)' }}>Hi, I'm </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-light mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          {personalInfo.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </motion.a>
          
          <motion.a
            href={personalInfo.resumeLink}
            className="group px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
            style={{ color: 'var(--text-primary)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="group-hover:animate-bounce" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          {[
            { icon: FiGithub, href: personalInfo.socialLinks.github, label: 'GitHub' },
            { icon: FiLinkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
            { icon: FiTwitter, href: personalInfo.socialLinks.twitter, label: 'Twitter' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-purple-500/20 border hover:border-purple-500/50 transition-all duration-300"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={floatingAnimation}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <FiArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
