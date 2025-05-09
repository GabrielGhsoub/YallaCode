import React, { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const formElementVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ContactSection: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [track, setTrack] = useState<string>('Full-Stack Developer Bootcamp');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email to apply.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }

    // Simulate API call
    console.log({ name, email, track, message });
    // alert(`Thank you, ${name}! We've received your application for the ${track} and will contact you with next steps. Yalla, let's do this!`);
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setTrack('Full-Stack Developer Bootcamp');
    setMessage('');

    // Hide success message after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <motion.h2 variants={formElementVariants}>Apply Now & Transform Your Career</motion.h2>
        <motion.p variants={formElementVariants} className="section-intro-text">
          Ready to join the YallaCode family? Fill out the form below, and our admissions team will
          get back to you soon to discuss your goals and the next steps.
        </motion.p>

        <motion.form
            onSubmit={handleSubmit}
            variants={formElementVariants} // Apply to form for a slight delay
        >
          {error && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="form-error" style={{color: 'red', textAlign: 'center', marginBottom: '1rem'}}>{error}</motion.p>}
          {isSubmitted && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="form-success" style={{color: 'green', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold'}}>Thank you! Your application has been submitted successfully.</motion.p>}

          <motion.div className="form-group" variants={formElementVariants}>
            <label htmlFor="name">
              Full Name<span style={{ color: 'var(--accent-color)' }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g., Fatima Hassan"
            />
          </motion.div>

          <motion.div className="form-group" variants={formElementVariants}>
            <label htmlFor="email">
              Email Address<span style={{ color: 'var(--accent-color)' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </motion.div>

          <motion.div className="form-group" variants={formElementVariants}>
            <label htmlFor="track">Program Track of Interest</label>
            <select
              id="track"
              value={track}
              onChange={(e) => setTrack(e.target.value)}
            >
              <option value="Full-Stack Developer Bootcamp">Full-Stack Developer Bootcamp</option>
              <option value="Advanced Full-Stack & DevOps Innovations">Advanced Full-Stack & DevOps Innovations</option>
              <option value="Not Sure Yet">Not Sure Yet - Need Guidance</option>
            </select>
          </motion.div>

          <motion.div className="form-group" variants={formElementVariants}>
            <label htmlFor="message">Your Message (Optional)</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us a bit about your coding background or any questions you have..."
            />
          </motion.div>

          <motion.button
            type="submit"
            className="btn btn-accent" // Using general button styles
            variants={formElementVariants}
            whileHover={{ scale: 1.03, boxShadow: "0px 6px 12px rgba(255, 153, 0, 0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            Submit Application
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection;