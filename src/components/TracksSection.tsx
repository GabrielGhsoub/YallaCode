// TracksSection.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TracksSection.css'; // Import the CSS file for track-specific styling

// Interfaces (Module, Track) remain the same
interface Module {
  timeline: string;
  title: string;
  topics: string | string[];
  projects: string | string[];
  delivery: string;
}

interface Track {
  id: string;
  title: string;
  subtitle: string;
  duration?: string;
  shortDescription: string;
  mainFocus: string[];
  detailedCurriculum: {
    overview: string;
    modules: Module[];
  };
}

const tracksData: Track[] = [
  {
    id: "full-stack-bootcamp",
    title: "Full-Stack Developer Bootcamp",
    subtitle: "12-Week Immersive Program",
    duration: "12 Weeks",
    shortDescription: "Go from foundational concepts to a job-ready full-stack developer. This comprehensive program covers Python, web development (HTML, CSS, JS, React), back-end tech (Node.js, Databases), and deploying applications.",
    mainFocus: [
      "Python & Programming Fundamentals",
      "HTML, CSS & Responsive Web Design",
      "JavaScript & Interactive UIs",
      "Modern Front-End with React.js",
      "Back-End with Node.js & Databases",
      "Agile Methodologies & Teamwork",
      "Career Prep & Full-Stack Capstone"
    ],
    detailedCurriculum: {
      overview: "Our 12-week Full-Stack Bootcamp is meticulously designed to take you from coding basics to building and deploying sophisticated web applications. Gain hands-on experience with in-demand technologies and graduate with a portfolio-ready capstone project, fully prepared for a tech career. Yalla, let's build!",
      modules: [
        {
          timeline: "Weeks 1–3",
          title: "Foundations of Programming & Python Fundamentals",
          topics: ["Intro to Python (syntax, data types, loops, functions)", "Algorithms, data structures, OOP basics", "Git, command line, version control"],
          projects: ["“Hello World” program", "Personal Greeter script", "Text-based adventure game"],
          delivery: "Live coding, hands-on labs, individual exercises, GitHub setup."
        },
        {
          timeline: "Weeks 4–5",
          title: "Web Development Basics: HTML, CSS & Responsive Design",
          topics: ["How the web works (HTTP, browsers/servers)", "Semantic HTML5 & CSS styling", "Responsive design (Flexbox, Grid, media queries)", "Intro UX & accessibility"],
          projects: ["Personal “About Me” webpage", "Responsive multi-page fictional site"],
          delivery: "Blended lectures & labs, design exercises, peer reviews, live project work."
        },
        {
          timeline: "Week 6",
          title: "Interactive Web Pages with JavaScript",
          topics: ["JS fundamentals (syntax, data types, control flow)", "DOM manipulation & event handling", "Comparing JS with Python"],
          projects: "Interactive Quiz or similar dynamic webpage",
          delivery: "Live coding workshops, interactive labs, short project sprints."
        },
        {
          timeline: "Week 7",
          title: "Introduction to React.js & Component-Based UI",
          topics: ["React basics (JSX, components, props, state)", "React hooks (useState, useEffect)", "Building single-page applications"],
          projects: "Simple React To-Do List application",
          delivery: "Guided live sessions, coding labs, Git version control, peer code reviews."
        },
        {
          timeline: "Weeks 8–9",
          title: "Back-End Development: Node.js/Express & Database Integration",
          topics: ["Node.js setup, RESTful APIs with Express", "Database connection (MongoDB or SQL)", "CRUD operations, basic API testing (Postman)"],
          projects: "Simple REST API integrated with React front-end",
          delivery: "Combined lectures & labs, interactive debugging, API testing."
        },
        {
          timeline: "Week 10",
          title: "Full-Stack Mini-Project & Agile Teamwork",
          topics: ["Agile methodologies (stand-ups, sprints)", "Collaborative coding (Git branching, pair programming)", "Full-stack integration"],
          projects: "Team-based mini-project (e.g., task manager)",
          delivery: "Team collaboration, interactive workshops, agile practice labs."
        },
        {
          timeline: "Weeks 11–12",
          title: "Career Preparation & Capstone Project",
          topics: ["CV writing, LinkedIn, portfolio building, mock interviews", "Final project planning & management", "Capstone execution & Demo Day prep"],
          projects: ["Fully developed capstone full-stack application", "Polished portfolio piece"],
          delivery: "Career workshops, mentor check-ins, project mentoring, Demo Day."
        }
      ]
    }
  },
  {
    id: "advanced-devops-innovations",
    title: "Advanced Full-Stack & DevOps Innovations",
    subtitle: "Flexible Part-Time or Full-Time Intensive Modules",
    duration: "Varies by module",
    shortDescription: "Elevate your expertise with advanced back-end architecture, front-end frameworks, DevOps, cloud deployment, and emerging AI integrations. Tailor your learning with flexible module options.",
    mainFocus: [
      "Advanced Back-End (Microservices, Scalability)",
      "Deep Dive into React.js & State Management",
      "DevOps, CI/CD & Cloud Deployment (AWS, Azure, GCP)",
      "Containerization (Docker) & Orchestration",
      "Emerging Tech: Practical AI Integration",
      "Optional Comprehensive Capstone"
    ],
    detailedCurriculum: {
      overview: "This Specialized Track offers an in-depth exploration of advanced full-stack development, DevOps, and cutting-edge tech. Choose a part-time or full-time schedule to fit your needs and build a portfolio showcasing sophisticated, scalable applications with AI-powered features. Take your skills to the next level!",
      modules: [
        {
          timeline: "Module 1 (PT: Wks 1–3 / FT: 1 wk)",
          title: "Advanced Back-End Architecture",
          topics: ["Scalable architectures (monolithic vs. microservices)", "Advanced RESTful APIs, GraphQL intro", "Database optimization, caching (Redis)", "Security (JWT, OAuth2), testing (unit, integration)"],
          projects: "Robust API service/microservices with security & caching",
          delivery: "Evening lectures, Saturday workshops, design sprints, code reviews."
        },
        {
          timeline: "Module 2 (PT: Wks 4–6 / FT: 1 wk)",
          title: "Advanced Front-End Frameworks",
          topics: ["React.js deep dive (hooks, optimization)", "State management (Redux/Context API)", "Client-side routing, performance optimization", "Accessibility, i18n, component testing (Jest, RTL)"],
          projects: "Advanced dynamic front-end app with optimized performance",
          delivery: "Intensive live coding, practical labs, design sprints, peer reviews."
        },
        {
          timeline: "Module 3 (PT: Wks 7–9 / FT: 3-4 wks)",
          title: "DevOps & Cloud Deployment",
          topics: ["Docker & Docker Compose", "CI/CD pipelines (GitHub Actions, Jenkins)", "Cloud deployment (AWS, Azure, or GCP)", "Infrastructure as Code (Terraform)", "Monitoring & logging (CloudWatch, Prometheus)"],
          projects: "Containerized full-stack app on cloud with CI/CD & monitoring",
          delivery: "Evening lectures, Saturday deployment sprints, hands-on cloud exercises."
        },
        {
          timeline: "Module 4 (PT: Wks 10–12 / FT: 1 wk)",
          title: "Emerging Tech – AI Integration",
          topics: ["AI/ML fundamentals", "Integrating external AI services (OpenAI GPT, AWS Rekognition)", "Data, performance, cost considerations", "Ethical implications, secure API integration"],
          projects: "AI-powered feature integrated into full-stack app",
          delivery: "Evening sessions, mini-hackathons, AI API workshops, ethical Q&As."
        },
        {
          timeline: "Optional Capstone (PT: Wks 13–16 / FT: 1 wk)",
          title: "Capstone Project & Advanced Topics",
          topics: ["Comprehensive project synthesizing all modules", "In-depth project planning, system design", "Advanced topics (system design, cloud optimization)", "Technical presentation & interview prep"],
          projects: "Complete portfolio-ready capstone with advanced features",
          delivery: "Extended project sprints, mentor check-ins, agile reviews, Demo Day."
        }
      ]
    }
  }
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: Track | null;
}

const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.1 } }
};

const modalContainerVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } },
  exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2, ease: "easeIn" } }
};

const TrackModal: React.FC<ModalProps> = ({ isOpen, onClose, track }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!track) return null;

  const renderListOrString = (items: string | string[] | undefined) => {
    if (!items) return <p>Details not available.</p>;
    if (typeof items === 'string') return <p>{items}</p>;
    return (
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          variants={modalOverlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="modal-content-container"
            onClick={(e) => e.stopPropagation()}
            variants={modalContainerVariants}
          >
            <div className="modal-header">
              <h2>{track.title}</h2>
              <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-subtitle">
                <strong>{track.subtitle}</strong> {track.duration && `(${track.duration})`}
              </p>
              <motion.p
                className="modal-overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {track.detailedCurriculum.overview}
              </motion.p>
              <h3 className="modal-section-title">Curriculum Modules:</h3>
              <div className="modules-container">
                {track.detailedCurriculum.modules.map((module, index) => (
                  <motion.div
                    key={index}
                    className="module-card-modal"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4>{module.timeline}: {module.title}</h4>
                    <h5>Topics & Activities:</h5>
                    {renderListOrString(module.topics)}
                    <h5>Key Projects/Outcomes:</h5>
                    {renderListOrString(module.projects)}
                    <h5>Delivery Format:</h5>
                    <p>{module.delivery}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const cardVariants = { 
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// Simple Chevron Right Icon SVG component
const ChevronRightIcon = () => (
  <svg 
    width="1em" 
    height="1em" 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true" // Hide from screen readers as text provides context
    style={{ verticalAlign: 'middle' }} // Helps with alignment if needed
  >
    <path 
      fillRule="evenodd" 
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);


const TracksSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const openModalWithTrack = (track: Track) => {
    setSelectedTrack(track);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <motion.section
      id="tracks"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <h2>Our Program Tracks</h2>
        <p className="section-intro-text">
          Ready to YallaCode? Whether you're launching a new tech career or mastering advanced skills, our programs empower you. Explore the tracks and find your path!
        </p>
        <div className="tracks-grid">
          {tracksData.map((track) => (
            <motion.div
              className="program-card"
              key={track.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 15px 30px var(--shadow-hover-color, rgba(0,0,0,0.2))",
                borderColor: "var(--primary-color)"
              }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <h3>{track.title}</h3>
              <p className="program-subtitle">
                <strong>{track.subtitle}</strong> {track.duration && `(${track.duration})`}
              </p>
              <p className="program-description">{track.shortDescription}</p>
              <h4>Key Focus Areas:</h4>
              <ul className="focus-list">
                {track.mainFocus.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <motion.button
                className="btn learn-more-button cta-button-variant" // This class will be styled for the new look
                onClick={() => openModalWithTrack(track)}
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: "var(--accent-color)", // Fill with accent on hover
                  color: "var(--text-on-accent)",       // Change text/icon color for contrast
                  borderColor: "var(--accent-color)",    // Ensure border matches on hover
                  y: -2,
                  // boxShadow: "0 4px 12px rgba(var(--accent-color-rgb), 0.25)" // Optional: add/enhance shadow on hover
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                More Details 
                <ChevronRightIcon />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      <TrackModal isOpen={modalOpen} onClose={closeModal} track={selectedTrack} />
    </motion.section>
  );
};

export default TracksSection;
