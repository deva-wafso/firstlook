import React, { useState } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Services', href: 'https://www.google.com/' },
    { name: 'About', href: 'https://www.google.com/' },
    { name: 'Reviews', href: 'https://www.google.com/' },
    { name: 'Contact', href: 'https://www.google.com/' },
  ];

  const handleRedirect = () => {
    window.location.href = "https://www.google.com/";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={handleRedirect}>
            {/* Custom SVG Logo based on the provided image */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Outer Circles */}
                  <path d="M85 50 A 35 35 0 0 1 15 50" stroke="#66C2BD" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15 50 A 35 35 0 0 0 85 50" stroke="#935FA7" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  
                  {/* Figure Body */}
                  <path d="M50 85 Q 35 60 50 40 Q 65 60 80 20" stroke="#935FA7" strokeWidth="6" strokeLinecap="round" fill="none" />
                  {/* Figure Head */}
                  <circle cx="55" cy="25" r="8" fill="#935FA7" />
                  
                  {/* Spine dots */}
                  <circle cx="45" cy="55" r="3" fill="#66C2BD" />
                  <circle cx="48" cy="65" r="2.5" fill="#66C2BD" />
                  <circle cx="50" cy="75" r="2" fill="#66C2BD" />
                </svg>
            </div>
            <div className="flex flex-col justify-center -space-y-1">
              <div className="flex items-baseline">
                <span className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">new</span>
                <span className="text-lg sm:text-2xl font-serif italic font-bold text-brand-green ml-0.5">life</span>
              </div>
              <p className="text-[8px] sm:text-[10px] text-slate-500 font-medium tracking-[0.2em] uppercase pl-0.5">Physio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-medical-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.google.com/"
              className="inline-flex items-center gap-2 bg-medical-600 hover:bg-medical-700 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span>Book Appointment</span>
              <CalendarCheck size={18} />
            </a>
          </div>

          {/* Mobile menu button and CTA */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://www.google.com/"
              className="bg-medical-600 hover:bg-medical-700 text-white text-[10px] sm:text-xs font-bold py-2 px-3 rounded-lg shadow-sm transition-all active:scale-95 whitespace-nowrap"
            >
              Book Appointment
            </a>
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-medical-600 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-medical-600 hover:bg-slate-50 rounded-md transition-colors border-b border-slate-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://www.google.com/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-medical-600 text-white px-4 py-3 rounded-lg font-medium shadow-sm active:scale-95 transition-transform"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};