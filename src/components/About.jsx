import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUser, FiCode, FiAward, FiSmile } from 'react-icons/fi';
import { aboutData } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const icons = [FiUser, FiCode, FiAward, FiSmile];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Side - Image/Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500"
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Profile Image */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <img 
                    src="/chetan-photo.jpg" 
                    alt="Chetan Malav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-3xl">💻</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            {/* Section Title */}
            <motion.div variants={itemVariants}>
              <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">
                {aboutData.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ color: 'var(--text-primary)' }}>
                {aboutData.title}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              {aboutData.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {aboutData.highlights.map((stat, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={stat.label}
                    className="p-4 rounded-2xl border text-center group hover:border-purple-500/50 transition-all duration-300"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-purple-400 group-hover:text-pink-400 transition-colors" />
                    <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
                <span>→</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
