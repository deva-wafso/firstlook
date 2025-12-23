import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specialists } from './components/Specialists';
import { About } from './components/About';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRedirect = () => {
    window.location.href = "https://www.google.com/";
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-medical-100 selection:text-medical-900">
      <Navbar />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="services">
          <Specialists />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="reviews">
          <Testimonials />
        </div>

        <div id="faq">
          <FAQ />
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>

      {/* Floating Action Buttons */}
      <div className={`fixed bottom-6 right-6 flex flex-col gap-4 z-40 transition-all duration-300 ${showFloating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <button 
          onClick={handleRedirect}
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
        <button 
          onClick={handleRedirect}
          className="flex items-center justify-center w-14 h-14 bg-medical-600 text-white rounded-full shadow-lg hover:bg-medical-700 transition-colors hover:scale-105"
          aria-label="Call Us"
        >
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;