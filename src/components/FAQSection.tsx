import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQSection.css'; // Import the CSS file

interface FAQEntry { // Renamed from FAQItem for clarity
  question: string;
  answer: string;
}

const faqData: FAQEntry[] = [
  {
    question: "What is the duration of the Full-Stack Bootcamp?",
    answer: "Our Full-Stack Developer Bootcamp is an immersive 12-week program designed to take you from foundational concepts to a job-ready developer."
  },
  {
    question: "Are the programs online, in-person, or hybrid?",
    answer: "YallaCode offers a hybrid learning model, combining engaging in-person sessions at our Beirut campus with flexible online learning modules to provide the best of both worlds."
  },
  {
    question: "What kind of career support do you offer?",
    answer: "We provide dedicated career support including personalized resume and interview coaching, LinkedIn profile optimization, portfolio building assistance, and job placement support to help you launch your tech career."
  },
  {
    question: "Is there a part-time option for the Advanced DevOps track?",
    answer: "Yes, the Advanced Full-Stack & DevOps Innovations track offers flexible module options, including part-time schedules, to fit your needs."
  },
  {
    question: "What are the prerequisites for enrolling in a bootcamp?",
    answer: "For the Full-Stack Bootcamp, a passion for learning and problem-solving is key! No prior coding experience is strictly required, though some familiarity can be helpful. For the Advanced track, prior coding experience or completion of a foundational bootcamp is expected. Contact us for a consultation!"
  },
];

// Simplified variants for answer; height/spacing primarily handled by the `layout` prop
const faqAnswerVariants = {
  hidden: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 }
  }
};

const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="section-intro-text">
          Have questions? We’ve got answers! If you don’t find what you’re looking for, feel free to reach out to us.
        </p>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <motion.div
              className="faq-item"
              key={index}
              variants={faqItemVariants}
              layout // Added: Animates layout changes for the item itself
              transition={{ layout: { duration: 0.3, ease: "circOut" } }} // Customize layout animation timing
            >
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <motion.div
                  className="chevron-icon"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    variants={faqAnswerVariants} // Using simplified variants
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout // Added: Key for smooth height and position animation
                    // Transition for layout animation (can also affect opacity/y if defined here)
                    transition={{
                      layout: { duration: 0.3, ease: "circOut" }, // For height/position changes
                      opacity: { duration: 0.25 }, // Adjust if needed, or rely on variants' transition
                      y: {duration: 0.25}
                    }}
                    role="region"
                    // style={{ overflow: 'hidden' }} // CSS already handles this, but good to be mindful
                  >
                    {/* Content that defines the height */}
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;