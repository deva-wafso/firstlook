import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I make an appointment?",
    answer: "You can book an appointment by calling our reception desk, using the online booking form on this website, or via WhatsApp. We accept both scheduled appointments and walk-ins for emergencies."
  },
  {
    question: "Is there a charge for copies of medical records?",
    answer: "We provide digital access to your medical records free of charge through our patient portal. For physical copies or detailed historical records, a nominal administrative fee may apply."
  },
  {
    question: "How do I assure who has access to my records?",
    answer: "We strictly adhere to data privacy laws. Your records are encrypted and stored securely. Only authorized medical personnel directly involved in your care have access, and we never share data without your consent."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 ${openIndex === index ? 'border-medical-500 shadow-md' : 'border-slate-200'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-medical-600' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-medical-600 flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};