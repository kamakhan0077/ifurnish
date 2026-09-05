import React, { useState } from 'react';
import { CustomerReview } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface TestimonialsProps {
  reviews: CustomerReview[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-[#FFFDF9] border-t border-[#8A5A2B]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="bg-[#E8B63D] text-[#2B2B2B] text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
              Verified UK Customer Reviews
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2B2B2B] mt-2">
              Loved by Thousands Across UK Homes
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-[#FAF8F3] hover:bg-[#E8B63D] hover:text-[#2B2B2B] text-[#8A5A2B] transition-colors border border-[#8A5A2B]/10 shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-[#FAF8F3] hover:bg-[#E8B63D] hover:text-[#2B2B2B] text-[#8A5A2B] transition-colors border border-[#8A5A2B]/10 shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, idx) => (
            <div
              key={review.id}
              className="luxury-card p-6 rounded-2xl bg-[#FAF8F3] border border-[#E8B63D]/20 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#E8B63D]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-[10px] text-[#4CAF50] font-extrabold bg-white px-2 py-0.5 rounded-full border border-[#4CAF50]/20">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Order</span>
                    </span>
                  )}
                </div>

                <Quote className="w-8 h-8 text-[#E8B63D]/30" />

                <p className="text-xs sm:text-sm text-[#2B2B2B] italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8A5A2B] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#2B2B2B]">{review.name}</h4>
                  <p className="text-[11px] text-[#8A5A2B] font-medium">{review.location}</p>
                  <p className="text-[10px] text-gray-400 font-normal mt-0.5">{review.productName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
