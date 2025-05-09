import React from 'react';
import { motion } from 'framer-motion';

// Simple SVG Icons (replace with a library like react-icons if preferred)
const HybridLearningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a10 10 0 00-4.472-8.445M12 22a10 10 0 014.472-8.445M12 22V12M12 12a4 4 0 100-8 4 4 0 000 8z"/>
    <path d="M12 12a4 4 0 110-8 4 4 0 010 8z" fill="currentColor" opacity="0.3"/>
    <path d="M18 8a6 6 0 00-5.223-5.91L12 2M6 8a6 6 0 015.223-5.91L12 2"/>
  </svg>
);
const ProjectBasedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);
const CareerSupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <polyline points="17 11 19 13 23 9"></polyline>
  </svg>
);
const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
    <path d="M16 3.13a4 4 0 010 7.75"></path>
  </svg>
);


interface WhyItemData {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const whyList: WhyItemData[] = [
  {
    title: 'Hybrid Learning Model',
    text: 'Experience the best of both worlds: engaging in-person sessions in Beirut combined with flexible online learning modules.',
    icon: <HybridLearningIcon />
  },
  {
    title: 'Project-Driven Curriculum',
    text: 'Learn by doing. Build a portfolio of real-world projects, developing practical, job-ready skills from day one.',
    icon: <ProjectBasedIcon />
  },
  {
    title: 'Dedicated Career Support',
    text: 'Receive personalized resume and interview coaching, plus job placement assistance to launch your tech career.',
    icon: <CareerSupportIcon />
  },
  {
    title: 'Vibrant Local Community',
    text: 'Join a supportive network of YallaCoders, mentors, and industry professionals, tailored to Lebanon’s market.',
    icon: <CommunityIcon />
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "backOut" } }
};


const WhySection: React.FC = () => (
  <motion.section
    id="why"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    <div className="container">
      <h2>Why YallaCode?</h2>
      <p className="section-intro-text">
        We're more than just a bootcamp. We're a launchpad for your future in tech,
        providing the skills, support, and community you need to succeed.
      </p>
      <div className="why-grid">
        {whyList.map((item) => (
          <motion.div
            className="why-item"
            key={item.title}
            variants={itemVariants}
             whileHover={{ y: -10, boxShadow: "0 12px 28px var(--shadow-hover-color)"}}
          >
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default WhySection;