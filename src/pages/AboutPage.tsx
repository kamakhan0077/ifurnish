import React from 'react';
import { ShieldCheck, Truck, Banknote, Heart, Award, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pb-16 space-y-16">
      
      {/* Hero Banner */}
      <div className="bg-[#FAF8F3] py-16 px-4 border-b border-[#8A5A2B]/10 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="bg-[#E8B63D] text-[#2B2B2B] text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
            About iFurnish UK
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2B2B2B]">
            Crafting Comfortable UK Homes Since Day One
          </h1>
          <p className="text-xs sm:text-base text-[#555555] leading-relaxed">
            iFurnish is a dedicated British online furniture retailer specializing in Wardrobe Sets, Beds, and Sofas. Built on trust, craftsmanship, and uncompromised quality.
          </p>
        </div>
      </div>

      {/* Main Brand Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-[#555555] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B]">
              Direct to Your Home with Cash on Delivery
            </h2>
            <p>
              We founded iFurnish with a simple mission: to replace expensive middleman showroom markups with high-quality, durable furniture delivered directly to UK households with complete peace of mind.
            </p>
            <p>
              Unlike traditional furniture stores that require full upfront payments weeks before delivery, iFurnish operates exclusively on a <strong>100% Free Delivery & Cash on Delivery (COD)</strong> policy across England, Wales, and Greater Glasgow. You inspect your furniture in your room of choice before paying a single penny.
            </p>
            
            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-bold text-[#2B2B2B]">
              <div className="bg-[#FAF8F3] p-4 rounded-xl border border-gray-200">
                <span className="text-2xl font-extrabold text-[#8A5A2B] block">10,000+</span>
                <span className="text-gray-500">Delivered Homes</span>
              </div>
              <div className="bg-[#FAF8F3] p-4 rounded-xl border border-gray-200">
                <span className="text-2xl font-extrabold text-[#4CAF50] block">4.9 / 5</span>
                <span className="text-gray-500">Average UK Rating</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
              alt="iFurnish Showroom Quality"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
};
