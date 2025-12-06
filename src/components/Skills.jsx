import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', ...new Set(skills.map((skill) => skill.category))];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-pink-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4" style={{ color: 'var(--text-primary)' }}>
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'hover:border-purple-500/50'
              }`}
              style={activeCategory !== category ? { backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)', borderWidth: '1px', borderColor: 'var(--border-color)' } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-6 rounded-2xl border hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {skill.name}
                </h3>
                <span className="text-sm text-purple-400 font-medium">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border-color)' }}>
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={isInView ? { x: '200%' } : { x: '-100%' }}
                  transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                />
              </div>

              <div className="mt-3">
                <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button */}
        {filteredSkills.length > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : `Show More (${filteredSkills.length - 5} more)`}
            </motion.button>
          </motion.div>
        )}

        {/* Decorative Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center items-center gap-8 flex-wrap"
        >
          {['⚛️', '📦', '🔥', '🎨', '⚡', '🔧'].map((emoji, index) => (
            <motion.span
              key={index}
              className="text-4xl opacity-50 hover:opacity-100 transition-opacity cursor-default"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
