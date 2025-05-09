import React from 'react';
import { Helmet } from 'react-helmet';

// Import your components
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TracksSection from './components/TracksSection';
import WhySection from './components/WhySection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import './App.css'; // Main component styles
import yallaCodeFavicon from './assets/favicon.png'; // Ensure you have this in src/assets

const App: React.FC = () => (
  <>
    <Helmet>
      <title>YallaCode - Beirut Coding Bootcamp</title>
      <meta
        name="description"
        content="YallaCode is a Beirut-based coding bootcamp offering beginner and advanced DevOps programs with hybrid in-person/online learning, FAQ, and career support."
      />
      <link rel="icon" type="image/png" href={yallaCodeFavicon} sizes="32x32" />
      <link rel="apple-touch-icon" href={yallaCodeFavicon} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Font stylesheet should be in index.css or public/index.html */}
    </Helmet>

    <HeroSection />
    <main> {/* Wrap sections in main for better semantics */}
      <AboutSection />
      <TracksSection />
      <WhySection />
      <TestimonialsSection />
      <FAQSection /> {/* Add FAQSection here */}
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default App;