import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Pre-Footer CTA */}
      <div className="bg-medical-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Recovery Journey Today</h2>
          <p className="text-medical-100 mb-8 max-w-2xl mx-auto">
            Don't let pain hold you back. Book your assessment online and take the first step towards a new life.
          </p>
          <a href="https://www.google.com/" className="inline-block bg-white text-medical-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg active:scale-95 transform duration-200">
            Make an Appointment
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-medical-600 font-bold">N</div>
              <span className="text-2xl font-bold text-white">Newlife Physio</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading the way in physiotherapy excellence with a focus on value-based patient care. Trusted by thousands for over 25 years.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="https://www.google.com/" className="hover:text-medical-400 transition-colors">About Us</a></li>
              <li><a href="https://www.google.com/" className="hover:text-medical-400 transition-colors">Our Specialists</a></li>
              <li><a href="https://www.google.com/" className="hover:text-medical-400 transition-colors">Patient Portal</a></li>
              <li><a href="https://www.google.com/" className="hover:text-medical-400 transition-colors">Careers</a></li>
              <li><a href="https://www.google.com/" className="hover:text-medical-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-medical-500 flex-shrink-0" size={20} />
                <span>123 Wellness Avenue, Suite 100,<br />Kukatpally, Hyderabad</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-medical-500 flex-shrink-0" size={20} />
                <span>+91 555-0123-456</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-medical-500 flex-shrink-0" size={20} />
                <span>info@newlifephysio.com</span>
              </li>
            </ul>
          </div>

           {/* Hours */}
           <div>
            <h3 className="text-white font-bold text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Sunday</span>
                <span className="text-white">10:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>&copy; 2025 Newlife Physio. All rights reserved.</p>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{icon: React.ReactNode}> = ({ icon }) => (
  <a href="https://www.google.com/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-600 hover:text-white transition-all duration-300">
    {icon}
  </a>
);