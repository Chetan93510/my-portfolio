// ============================================
// 🎯 PORTFOLIO DATA - CHETAN MALAV
// ============================================

export const personalInfo = {
  name: "Chetan Malav",
  role: "AI/ML Engineer & Full Stack Developer",
  tagline: "Building intelligent solutions with AI, Machine Learning & Modern Web Technologies",
  description: "AI/ML Engineer with 6+ months of experience in Artificial Intelligence and Machine Learning. Skilled in Python, FastAPI, Django, and cutting-edge AI technologies including Google Vertex AI, FAISS, and NLP. Passionate about creating AI-powered solutions that drive real business impact.",
  email: "chetanmalav9692@gmail.com",
  phone: "+91 9351046462",
  location: "Kota, Rajasthan, India",
  resumeLink: "/CV_Chetan_malav2025.pdf",
  socialLinks: {
    github: "https://github.com/chetanmalav",
    linkedin: "https://www.linkedin.com/in/chetan-malav-a53b5b237",
    twitter: "https://twitter.com/chetanmalav",
  }
};

export const aboutData = {
  title: "About Me",
  subtitle: "Get to know me better",
  description: `I'm an AI/ML Engineer with 6+ months of hands-on experience in Artificial Intelligence and Machine Learning, along with expertise in Full Stack Web Development.

I have successfully designed and delivered AI-powered solutions including the Fitsol Chatbot using FastAPI, FAISS, OCR, and Google Vertex AI. I'm a Python Developer proficient in Django, Flask, REST API development, and API testing using tools like JMeter and Postman.

As an experienced Data Engineer, I'm skilled in data extraction, pre-processing, analysis, time-series forecasting, and web scraping. I'm passionate about building intelligent systems that solve real-world problems and drive business value.`,
  highlights: [
    { label: "AI/ML Exp", value: "6+ Months" },
    { label: "Projects", value: "5+" },
    { label: "Technologies", value: "20+" },
    { label: "Web Dev Exp", value: "2+ Months" },
  ]
};

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Govt. Engineering College, Jhalawar",
    year: "Nov 2022 - Present",
    grade: "CGPA: 8.2",
  },
  {
    degree: "Higher Secondary (12th)",
    field: "Science (PCM)",
    institution: "Jawahar Navodaya Vidyalaya, Khairabad",
    year: "April 2020 - March 2021",
    grade: "Percentage: 82.40% (CBSE)",
  },
  {
    degree: "Secondary (10th)",
    field: "General",
    institution: "Jawahar Navodaya Vidyalaya, Khairabad",
    year: "April 2018 - March 2019",
    grade: "Percentage: 74.4% (CBSE)",
  },
];

export const skills = [
  // Programming & Frameworks
  { name: "Python", level: 95, category: "Languages" },
  { name: "Django", level: 85, category: "Languages" },
  { name: "Flask", level: 85, category: "Languages" },
  { name: "FastAPI", level: 90, category: "Languages" },
  { name: "SQL/MySQL", level: 85, category: "Languages" },
  
  // AI/ML & Data Science
  { name: "Machine Learning", level: 90, category: "AI/ML" },
  { name: "Deep Learning (ANN, CNN, RNN, LSTM)", level: 85, category: "AI/ML" },
  { name: "Natural Language Processing (NLP)", level: 88, category: "AI/ML" },
  { name: "Google Vertex AI (Gemini)", level: 85, category: "AI/ML" },
  { name: "TensorFlow / PyTorch", level: 80, category: "AI/ML" },
  { name: "FAISS Vector Database", level: 85, category: "AI/ML" },
  { name: "Generative AI & LLMs", level: 85, category: "AI/ML" },
  
  // Data Engineering
  { name: "Pandas / NumPy", level: 92, category: "Data" },
  { name: "Data Visualization (Matplotlib, Seaborn)", level: 88, category: "Data" },
  { name: "Web Scraping (Selenium, BeautifulSoup)", level: 90, category: "Data" },
  { name: "OCR (Tesseract, EasyOCR)", level: 85, category: "Data" },
  { name: "Scikit-Learn", level: 88, category: "Data" },
  
  // Web Development
  { name: "HTML/CSS/JavaScript", level: 85, category: "Frontend" },
  { name: "REST APIs", level: 90, category: "Frontend" },
  { name: "API Testing (Postman, JMeter)", level: 85, category: "Frontend" },
  
  // Tools & DevOps
  { name: "Git & GitHub", level: 88, category: "Tools" },
  { name: "CI/CD Deployment", level: 75, category: "Tools" },
  { name: "Windows / Mac / Linux", level: 85, category: "Tools" },
  { name: "OAuth / JWT Authentication", level: 82, category: "Tools" },
];

export const projects = [
  {
    id: 1,
    title: "Fitsol AI Chatbot",
    description: "Designed and implemented an AI-powered chatbot for Fitsol (Sustainability Solutions) providing context-driven answers based on website and LinkedIn data. Built end-to-end scalable system with FastAPI, FAISS vector database, Google Vertex AI (Gemini), and hybrid scraping pipeline with OCR.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "FAISS", "Google Vertex AI", "Selenium", "OCR", "NLP"],
    liveLink: "#",
    githubLink: "https://github.com/chetanmalav",
    featured: true,
    highlights: [
      "Built Chat UI & Admin Test UI",
      "Reduced response latency with optimized FAISS retrieval",
      "Token usage & cost monitoring",
      "Production-ready pipeline"
    ]
  },
  {
    id: 2,
    title: "Online E-Book Selling System",
    description: "Full Stack web application for online e-book selling with complete user authentication, book catalog, shopping cart, and payment integration. Built using Django MVT architecture with MySQL database.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
    technologies: ["Python", "Django", "MySQL", "HTML/CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "https://github.com/chetanmalav",
    featured: true,
  },
  // {
  //   id: 3,
  //   title: "Stock Recommendation System",
  //   description: "AI-powered stock recommendation system improving user engagement and accuracy using machine learning algorithms for time-series forecasting and predictive analysis.",
  //   image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  //   technologies: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Time Series"],
  //   liveLink: "#",
  //   githubLink: "https://github.com/chetanmalav",
  //   featured: true,
  // },
  // {
  //   id: 3,
  //   title: "NLP Text Classification Model",
  //   description: "Built intent classification and entity recognition system using NLP techniques including chunking, embeddings, and transformer models for conversational AI applications.",
  //   image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  //   technologies: ["Python", "NLP", "Transformers", "SentenceTransformers", "BERT"],
  //   liveLink: "#",
  //   githubLink: "https://github.com/chetanmalav",
  //   featured: true,
  // },
  {
    id: 3,
    title: "Data Web Scraping Pipeline",
    description: "Automated data extraction pipeline using Selenium, BeautifulSoup, and OCR for scraping dynamic web pages and image-heavy content with intelligent fallback mechanisms.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Tesseract OCR", "EasyOCR"],
    liveLink: "#",
    githubLink: "https://github.com/chetanmalav",
    featured: false,
  },
  {
    id: 4,
    title: "REST API Development",
    description: "Developed and tested secure REST APIs with OAuth and JWT authentication, including comprehensive API testing using Postman and JMeter for performance benchmarking.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "Flask", "JWT", "OAuth", "Postman"],
    liveLink: "#",
    githubLink: "https://github.com/chetanmalav",
    featured: false,
  },
];

export const experience = [
  {
    title: "Artificial Intelligence Engineer",
    company: "Fitsol Supply Chain Solutions Pvt. Ltd.",
    location: "Gurugram",
    duration: "June 2025 - Present",
    description: [
      "Designed and delivered AI-powered Fitsol Chatbot using FastAPI, FAISS, OCR, and Google Vertex AI",
      "Built context-driven sustainability insights and intelligent customer interactions",
      "Implemented hybrid scraping pipeline with Selenium + BeautifulSoup + OCR",
      "Optimized FAISS index with pre-chunked embeddings for fast responses",
      "Developed Admin Test UI for token usage and cost monitoring",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Juneco Infotech Private Limited",
    location: "Taramandal, Gorakhpur",
    duration: "June 2024 - September 2024",
    description: [
      "Developed Online E-Book Selling System using Python and Django",
      "Implemented Model View Template (MVT) architecture",
      "Built database operations with MySQL",
      "Created responsive frontend with HTML/CSS/JavaScript",
    ],
  },
];

export const certifications = [
  {
    title: "Machine Learning & AI",
    issuer: "Professional Certification",
    year: "2024",
  },
  {
    title: "Python Development",
    issuer: "Professional Certification",
    year: "2024",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Online Course",
    year: "2024",
  },
  {
    title: "Natural Language Processing",
    issuer: "Online Course",
    year: "2024",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
