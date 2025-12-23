import React from 'react';
import { Award, Target, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Newlife Physio Clinic Entrance" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-medical-900/20 mix-blend-multiply"></div>
            </div>
            
            {/* 25 Years Badge */}
            <div className="absolute -top-10 -right-10 md:top-10 md:-right-10 w-40 h-40 bg-medical-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-8 border-slate-50 transform rotate-12 hover:rotate-0 transition-transform duration-500 z-10">
              <span className="text-5xl font-bold">25</span>
              <span className="text-sm font-medium uppercase tracking-wide mt-1">Years of</span>
              <span className="text-xs opacity-90">Excellence</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-medical-600" size={24} />
              <span className="text-medical-600 font-bold uppercase tracking-wider">Who We Are</span>
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Welcome to Newlife Physio</h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Newlife Physio is your premier destination for advanced physiotherapy and rehabilitation. We combine clinical expertise with state-of-the-art facilities to help you recover faster and move better.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Heart className="text-brand-green fill-brand-green" size={20} />
                <span className="font-serif italic text-2xl">Minds that Cure, Hearts that Care</span>
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 bg-medical-100 p-2 rounded-lg h-fit">
                    <Target className="text-medical-600" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Our Mission</h4>
                    <p className="text-sm text-slate-600">To empower our community to live pain-free lives through compassionate and evidence-based physiotherapy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-medical-100 p-2 rounded-lg h-fit">
                    <Award className="text-medical-600" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Our Vision</h4>
                    <p className="text-sm text-slate-600">To be the most trusted rehabilitation partner, known for restoring health and inspiring new life.</p>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://www.google.com/" className="inline-block px-8 py-3 border-2 border-medical-600 text-medical-600 font-semibold rounded-lg hover:bg-medical-600 hover:text-white transition-all duration-300">
              Read Our Full Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};