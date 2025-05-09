import React from 'react';
import { motion } from 'framer-motion';
import './TestimonialsSection.css'; // Import the CSS file

interface Testimonial {
  quote: string;
  author: string;
  avatar?: string; // Optional avatar image URL
  role?: string; // Optional: To display under author name or more detailed title
}

const testimonials: Testimonial[] = [
  {
    quote:
      'YallaCode transformed my career path! I started with minimal coding knowledge and, thanks to their immersive Full-Stack bootcamp and incredible instructors, I landed my first job as a Junior Developer. The project-based learning was key.',
    author: 'Ali A.',
    role: 'Junior Full-Stack Developer',
    // avatar: 'path/to/ali-avatar.jpg' // Example
  },
  {
    quote:
      "The Advanced Full-Stack & DevOps track was exactly what I needed to level up my skills. The curriculum is challenging, relevant, and the career support is top-notch. I felt truly prepared for senior roles. Highly recommend!",
    author: 'Sara K.',
    role: 'DevOps Engineer',
    // avatar: 'path/to/sara-avatar.jpg' // Example
  },
  {
    quote:
      "I was hesitant about online learning, but YallaCode's hybrid model is fantastic. The in-person sessions built a strong community, and the online resources were always accessible. The mentors genuinely care about your success.",
    author: 'Omar B.',
    role: 'Software Engineer',
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.25 }
  }
};

const testimonialVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const TestimonialsSection: React.FC = () => (
  <motion.section
    id="testimonials"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    <div className="container">
      <h2>What Our Alumni Say</h2>
      <p className="section-intro-text">
        Hear from graduates who've transformed their careers with YallaCode.
        Their success stories are our greatest pride.
      </p>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial"
            key={i}
            variants={testimonialVariants}
            // Removed whileHover prop and its specific transition to eliminate scaling/shadow animations on hover
          >
            {t.avatar && <img src={t.avatar} alt={t.author} className="testimonial-avatar" />}
            <p className="quote">{t.quote}</p>
            <p className="author">
              {t.author}
              {t.role && <span style={{ display: 'block', fontSize: '0.85em', color: 'var(--text-medium)', fontWeight: '500' }}>{t.role}</span>}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default TestimonialsSection;