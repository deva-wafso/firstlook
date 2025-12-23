import React from 'react';
import { Star, Home, MapPin } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-medical-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-medical-600/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Exceptional Service, Exceptional Care</h2>
          <p className="text-medical-200 text-lg max-w-2xl mx-auto">
            We go above and beyond to ensure your experience at Newlife Physio is comfortable, efficient, and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureItem 
            icon={<Star size={32} />}
            title="Personalized Treatment"
            description="Experience one-on-one attention from our therapists. We design custom recovery plans tailored specifically to your body and lifestyle."
          />
          <FeatureItem 
            icon={<Home size={32} />}
            title="Complete Rehabilitation"
            description="From initial diagnosis to final strength training, we handle every aspect of your recovery journey under one roof."
          />
          <FeatureItem 
            icon={<MapPin size={32} />}
            title="Convenient Location"
            description="Located in the heart of Kukatpally, Hyderabad. We are walking distance from the metro station with ample parking available."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({ icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
    <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-green-900/20">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-medical-100 leading-relaxed">
      {description}
    </p>
  </div>
);