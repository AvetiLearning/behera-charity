import React, { useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import FocusAreas from './components/FocusAreas';
import Projects from './components/Projects';
import Quote from './components/Quote';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Force scroll to top on refresh with cross-browser support (Firefox/Safari/Chrome)
  useLayoutEffect(() => {
    // 0. Clear any hash from the URL to prevent browser jump to anchor
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    // 1. Immediate scroll reset
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // 2. Disable native smooth scrolling initially
    document.documentElement.style.scrollBehavior = 'auto';

    // 3. Prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // 4. Execute scroll to top immediately
    scrollToTop();

    // 5. Force it again on next frame to ensure it overrides any browser restoration
    const rafId = requestAnimationFrame(() => {
      scrollToTop();
    });

    // 6. Re-enable smooth scrolling after a small delay ensures layout is stable
    const timer = setTimeout(() => {
      scrollToTop(); // One last check
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 150);

    // 7. Handle beforeunload to reset scroll position *before* the refresh actually happens (helps in Firefox)
    const handleBeforeUnload = () => {
      // Temporarily disable smooth scroll for immediate effect
      document.documentElement.style.scrollBehavior = 'auto';
      scrollToTop();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.documentElement.style.scrollBehavior = 'auto'; // Reset on unmount
    };
  }, []);

  return (
    <div className="min-h-screen bg-light font-sans text-text antialiased selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <FocusAreas />
        <Projects />
        <div className="h-6 bg-light"></div> {/* Spacer */}
        <Quote />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
