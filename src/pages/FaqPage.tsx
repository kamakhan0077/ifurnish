import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/products';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pb-16 space-y-12">
      <div className="bg-[#FAF8F3] py-12 px-4 border-b border-[#8A5A2B]/10 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="bg-[#E8B63D] text-[#2B2B2B] text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
            Clear & Transparent
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2B2B2B]">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-[#555555]">
            Find quick answers about our Wardrobe Sets, Beds, Sofas, Free Delivery, and Cash on Delivery guarantee.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#FFFDF9] border border-[#8A5A2B]/10 rounded-2xl overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#2B2B2B] hover:text-[#8A5A2B] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#E8B63D] shrink-0" />
                  <span>{item.q}</span>
                </span>
                {isOpen ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs text-[#555555] leading-relaxed border-t border-gray-100 pt-3 bg-[#FAF8F3]">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
