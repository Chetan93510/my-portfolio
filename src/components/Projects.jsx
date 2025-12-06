import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

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

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4" style={{ color: 'var(--text-primary)' }}>
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden border hover:border-purple-500/50 transition-all duration-500"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-medium text-white">
                      Featured
                    </span>
                  </div>
                )}

                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-purple-400 rounded-full border"
                      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {projects.some(p => !p.featured) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500/50 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300"
              style={{ color: 'var(--text-primary)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFilter />
              {showAll ? 'Show Featured Only' : `View All Projects (${projects.length})`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
