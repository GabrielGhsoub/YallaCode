import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram } from 'lucide-react'; // Example icons

const Footer: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as HTMLFormElement).email.value;
    alert(`Thank you for subscribing with ${email}!`);
    // Add your newsletter subscription logic here (e.g., API call)
    (event.target as HTMLFormElement).reset();
  };

  return (
    <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
      <div className="footer-content container">
        <div className="footer-brand">
          <h3>YallaCode</h3>
          <p>Beirut’s Premier Hybrid Coding Bootcamp.</p>
          <p>Launch your tech career with our immersive programs and dedicated support.</p>
          <p>&copy; {new Date().getFullYear()} YallaCode. All rights reserved.</p>
        </div>


    

        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={24}/></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24}/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24}/></a>
          </div>
          <p>Follow us on social media to be part of our growing community.</p>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest news, program updates, and tech insights.</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-accent">Subscribe</button>
          </form>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;