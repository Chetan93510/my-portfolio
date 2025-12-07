import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', ...new Set(skills.map((skill) => skill.category))];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 6);

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

        {/* Vertical Timeline Skills */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          />

          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => {
              const isLeft = index % 2 === 0;
              return (
                <SkillItem
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isLeft={isLeft}
                  isInView={isInView}
                />
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        {filteredSkills.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : `Show More (${filteredSkills.length - 6} more)`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Individual Skill Item Component
const SkillItem = ({ skill, index, isLeft, isInView }) => {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: false, margin: '-50px' });

  return (
    <motion.div
      ref={itemRef}
      className={`relative flex items-center mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 z-10 transform -translate-x-1/2"
        style={{ borderColor: 'var(--bg-primary)' }}
        initial={{ scale: 0 }}
        animate={itemInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
      />

      {/* Horizontal Line */}
      <motion.div
        className={`hidden md:block absolute top-1/2 h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500 ${
          isLeft ? 'right-1/2 mr-2' : 'left-1/2 ml-2'
        }`}
        initial={{ scaleX: 0 }}
        animate={itemInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
        style={{ transformOrigin: isLeft ? 'right' : 'left' }}
      />

      {/* Skill Card */}
      <motion.div
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
        whileHover={{ scale: 1.02 }}
      >
        <div
          className="p-5 rounded-2xl border hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {skill.name}
            </h3>
            <span className="text-sm text-purple-400 font-bold">
              {skill.level}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 rounded-full overflow-hidden mb-2" style={{ backgroundColor: 'var(--border-color)' }}>
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={itemInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.4, ease: 'easeOut' }}
            />
          </div>

          <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            {skill.category}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
