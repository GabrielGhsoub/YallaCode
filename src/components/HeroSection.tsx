import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import './HeroSection.css';

// Simple SVG Icons for Menu Toggle (consider using an icon library for more complex needs)
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const navVariants = {
  hidden: { opacity: 0, y: -70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2, ease: "backOut" } }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

// Mobile menu container animation variants
const mobileMenuContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } }
};

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.3,
    },
  },
};

const heroTitleWordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', damping: 15, stiffness: 100, duration: 0.6 },
  },
};

const heroParagraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const ctaButtonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 12
        }
    }
};

const HeroSection: React.FC = () => {
  const [activeLink, setActiveLink] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const heroTitle = "Beirut’s Premier Hybrid Coding Bootcamp";
  const heroTitleWords = heroTitle.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'tracks', 'why', 'testimonials', 'contact'];
      let current = 'hero';
      const navElement = document.querySelector('#hero nav');
      // Ensure navHeight defaults to a number from CSS variable if element not found immediately
      const navHeight = navElement ? (navElement as HTMLElement).offsetHeight : (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height').replace('px', '')) || 70) ;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          if (id === 'hero') {
            if (window.scrollY < window.innerHeight / 3) {
              current = id;
            }
          } else {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;
            if (window.scrollY >= sectionTop - window.innerHeight / 3) {
              current = id;
            }
          }
        }
      }
      setActiveLink(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navElement = document.querySelector('#hero nav');
      const navHeight = navElement ? (navElement as HTMLElement).offsetHeight : (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height').replace('px', '')) || 70);
      let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      if (id === 'hero') {
        elementPosition = 0;
      }
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      if (isMobileMenuOpen) { // Close mobile menu on link click
        setIsMobileMenuOpen(false);
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Effect to close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navLinks = ['hero', 'about', 'tracks', 'why', 'testimonials', 'contact'];

  return (
    <motion.header id="hero">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="nav-content"> {/* Wrapper for logo and toggle/menu */}
          <motion.div className="logo" variants={logoVariants}>YallaCode</motion.div>

          {/* Hamburger Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-links-list"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Desktop Menu Links */}
          <ul className="desktop-nav-links">
            {navLinks.map((id, index) => (
              <motion.li key={id} custom={index} variants={navItemVariants}>
                <a
                  href={`#${id}`}
                  className={activeLink === id ? 'active' : ''}
                  onClick={(e) => scrollToSection(e, id)}
                >
                  {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1).replace(/s$/, '')}
                </a>
              </motion.li>
            ))}
            <motion.li custom={navLinks.length} variants={navItemVariants}>
              <a href="#contact" className="apply-nav-link"
                 onClick={(e) => scrollToSection(e, 'contact')}
              >Apply Now</a>
            </motion.li>
          </ul>
        </div>

        {/* Mobile Menu Links with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              id="mobile-nav-links-list"
              className="mobile-nav-links"
              variants={mobileMenuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((id) => (
                <li key={`${id}-mobile`}>
                  <a
                    href={`#${id}`}
                    className={activeLink === id ? 'active' : ''}
                    onClick={(e) => scrollToSection(e, id)}
                  >
                    {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1).replace(/s$/, '')}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="apply-nav-link"
                   onClick={(e) => scrollToSection(e, 'contact')}
                >Apply Now</a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1>
          {heroTitleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={heroTitleWordVariants}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p variants={heroParagraphVariants}>
          Launch your tech career with our immersive Full-Stack & Advanced DevOps programs.
          Master in-demand skills through hands-on projects, expert mentorship, and a vibrant local community.
        </motion.p>
        <motion.a
          href="#contact"
          className="btn btn-accent cta-button"
          variants={ctaButtonVariants}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(var(--hero-accent-rgb), 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => scrollToSection(e, 'contact')}
        >
          Start Your Journey
        </motion.a>
      </motion.div>
    </motion.header>
  );
};

export default HeroSection;