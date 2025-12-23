import React from 'react';
import { Activity, ShieldCheck, HeartPulse, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-medical-50 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-medical-100 text-medical-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              Your Partner in Recovery
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Restore Movement, <span className="block text-brand-green font-serif italic">Reclaim Your Life</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We provide expert physiotherapy, rehabilitation, and pain management solutions. 
              Get back to doing what you love with our personalized care plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.google.com/" className="inline-flex justify-center items-center px-8 py-4 bg-medical-600 text-white font-semibold rounded-lg hover:bg-medical-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="https://www.google.com/" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md">
                Our Services
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center">
             {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-medical-200/20 blur-3xl rounded-full -z-10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
              alt="Physiotherapist helping patient" 
              className="rounded-2xl shadow-2xl object-cover h-full w-full max-h-[500px] lg:max-h-full border-4 border-white"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Certified Experts</p>
                  <p className="text-sm text-slate-500">Licensed Therapists</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Activity className="text-white" size={24} />}
            title="Manual Therapy"
            desc="Hands-on treatment to mobilize joints and soft tissues for pain relief."
            color="bg-medical-600"
          />
          <FeatureCard 
            icon={<ShieldCheck className="text-white" size={24} />}
            title="Injury Rehabilitation"
            desc="Comprehensive recovery programs for sports injuries and post-op care."
            color="bg-brand-green"
          />
          <FeatureCard 
            icon={<HeartPulse className="text-white" size={24} />}
            title="Pain Management"
            desc="Specialized techniques for managing chronic back, neck, and joint pain."
            color="bg-brand-teal"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string, color: string}> = ({ icon, title, desc, color }) => (
  <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
    <div className={`w-14 h-14 ${color} rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);