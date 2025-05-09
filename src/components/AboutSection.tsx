import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const AboutSection: React.FC = () => (
  <motion.section
    id="about"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container">
      <motion.h2 variants={itemVariants}>About YallaCode</motion.h2>
      <motion.p variants={itemVariants}>
        YallaCode is a dynamic Beirut-based coding education startup on a mission to
        cultivate and empower the next generation of software developers in Lebanon and beyond.
        We offer an immersive, hands-on learning experience meticulously designed to bridge
        the gap between traditional academic education and the evolving demands of the global tech industry.
      </motion.p>
      <motion.p variants={itemVariants}>
        Our founder, a Beirut native and seasoned tech industry veteran, established YallaCode
        with a clear vision: to address the scarcity of practical, industry-aligned coding programs
        in the region. We champion a "learning by doing" philosophy, foster a supportive and collaborative
        community, and provide career-focused training and mentorship to launch successful and fulfilling tech careers.
        Yalla, let's build the future, together!
      </motion.p>
    </div>
  </motion.section>
);

export default AboutSection;