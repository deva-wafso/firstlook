import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string; // e.g., Patient
  date: string;
  content: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Suresh Rao",
    role: "Patient",
    date: "2 weeks ago",
    content: "Visited for a sports injury. Dr. Ashwin Kasturi is exceptional. He explained the diagnosis clearly and the recovery plan was very effective. Highly recommended!",
    image: "https://picsum.photos/seed/suresh/100/100"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Patient",
    date: "1 month ago",
    content: "The dermatologists here are fantastic. I've struggled with skin issues for years, and within two visits, I saw a massive improvement. The staff is very polite.",
    image: "https://picsum.photos/seed/priya/100/100"
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Patient",
    date: "3 weeks ago",
    content: "Excellent cardiology care. The facility is clean, modern, and the doctors take their time to listen. I felt very safe and well-cared for during my check-up.",
    image: "https://picsum.photos/seed/amit/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Patients Say</h2>
          <p className="text-slate-600 mt-4">Real stories from real people who trust us with their health.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-50 p-8 rounded-2xl relative hover:-translate-y-2 transition-transform duration-300 border border-slate-100 shadow-sm hover:shadow-lg">
              <Quote className="absolute top-6 right-6 text-medical-200" size={40} />
              
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};