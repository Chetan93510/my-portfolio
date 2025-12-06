import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name}
            </motion.h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {personalInfo.role} passionate about creating amazing digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="hover:text-purple-400 transition-colors text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: FiGithub, href: personalInfo.socialLinks.github },
                { icon: FiLinkedin, href: personalInfo.socialLinks.linkedin },
                { icon: FiTwitter, href: personalInfo.socialLinks.twitter },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-purple-500/20 transition-all"
                  style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-sm flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} {personalInfo.name}. Made with{' '}
            <FiHeart className="text-pink-500 animate-pulse" /> using React
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Designed & Built with Passion
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
