import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  tag: string;
  image: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Musculoskeletal Physio',
    tag: 'Joints & Muscles',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Expert care for back pain, neck pain, and joint conditions using manual therapy and exercise prescription.'
  },
  {
    id: 2,
    title: 'Sports Injury Rehab',
    tag: 'Performance',
    image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Specialized recovery programs for athletes to return to sport stronger and safer than before.'
  },
  {
    id: 3,
    title: 'Post-Surgical Rehab',
    tag: 'Recovery',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Guided rehabilitation following orthopedic surgeries like ACL reconstruction or joint replacements.'
  }
];

export const Specialists: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-medical-600 font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Specialized Treatments</h2>
          <div className="w-20 h-1.5 bg-brand-green mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-800 rounded-full shadow-sm">
                    {service.tag}
                  </span>
                </div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors flex justify-between items-center">
                  {service.title}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-medical-600" size={24} />
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <a href="https://www.google.com/" className="text-medical-600 font-semibold text-sm uppercase tracking-wide border-b-2 border-transparent group-hover:border-medical-600 transition-all inline-block">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};