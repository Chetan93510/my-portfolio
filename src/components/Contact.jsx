import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    }

    setIsSubmitting(false);

    // Clear status after 5 seconds
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}
    >
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4" style={{ color: 'var(--text-primary)' }}>
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Contact Information</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-2xl border hover:border-purple-500/50 transition-all duration-300 group"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social CTA */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
            >
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Let's connect on social media!
              </h4>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Follow me for updates on my latest projects and tech insights.
              </p>
              <div className="flex gap-3">
                {Object.entries(personalInfo.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-sm hover:bg-purple-500/20 transition-all capitalize"
                    style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Subject
                </label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  placeholder="Project Inquiry"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-4 rounded-xl ${
                    status.type === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                >
                  {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4\" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
