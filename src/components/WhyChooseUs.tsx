import React from 'react';
import { 
  Truck, 
  Banknote, 
  Wrench, 
  Award, 
  ShieldCheck, 
  Tag, 
  Headphones, 
  Zap 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Truck,
      title: 'Free UK Delivery',
      desc: '100% Free delivery across all mainland addresses in England, Wales, and Greater Glasgow.',
      color: 'text-[#4CAF50]',
    },
    {
      icon: Banknote,
      title: 'Cash on Delivery',
      desc: 'No credit card needed online. Inspect your furniture in your home before paying cash.',
      color: 'text-[#F39A1F]',
    },
    {
      icon: Wrench,
      title: 'Fully Assembled Option',
      desc: 'Our experienced UK technicians assemble wardrobes, beds, and sofas in your room of choice.',
      color: 'text-[#E8B63D]',
    },
    {
      icon: Award,
      title: 'Premium Materials',
      desc: 'Crafted from high-density engineered timber, luxury velvets, top-grain leather, and glass mirrors.',
      color: 'text-[#8A5A2B]',
    },
    {
      icon: ShieldCheck,
      title: 'Durable Construction',
      desc: 'Heavy-duty steel sliding tracks and reinforced frames backed by a 10-Year Guarantee.',
      color: 'text-[#4CAF50]',
    },
    {
      icon: Tag,
      title: 'Affordable Direct Prices',
      desc: 'Cut out expensive retail showroom markups and enjoy direct factory prices on UK furniture.',
      color: 'text-[#F39A1F]',
    },
    {
      icon: Headphones,
      title: 'Friendly UK Support',
      desc: 'Dedicated phone and email support based in Manchester and London open 6 days a week.',
      color: 'text-[#E8B63D]',
    },
    {
      icon: Zap,
      title: 'Fast 3-5 Day Delivery',
      desc: 'In-stock furniture items dispatched with agreed 2-hour morning or afternoon delivery slots.',
      color: 'text-[#8A5A2B]',
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F3] border-y border-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[#E8B63D] uppercase font-bold tracking-[0.2em] text-xs block">
            Why Choose iFurnish
          </span>
          <h2 className="text-3xl sm:text-4xl font-extralight text-[#2B2B2B]">
            Designed for Comfort, <span className="font-bold">Crafted to Last</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            We make buying furniture simple, trustworthy, and stress-free across England, Wales & Glasgow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="luxury-card p-6 rounded-sm bg-white border border-[#F5F1E8] hover:border-[#E8B63D]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xs bg-[#FAF8F3] border border-[#F5F1E8] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="font-bold text-sm text-[#2B2B2B] uppercase tracking-wide group-hover:text-[#E8B63D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
