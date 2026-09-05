import React from 'react';
import { Truck, Banknote, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { DeliveryMap } from '../components/DeliveryMap';

export const DeliveryPage: React.FC = () => {
  return (
    <div className="pb-16 space-y-12">
      <div className="bg-[#FAF8F3] py-12 px-4 border-b border-[#8A5A2B]/10 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="bg-[#E8B63D] text-[#2B2B2B] text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
            100% Free UK Delivery
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2B2B2B]">
            Delivery Information & Cash on Delivery
          </h1>
          <p className="text-xs sm:text-sm text-[#555555]">
            Everything you need to know about our room-of-choice delivery across England, Wales, and Glasgow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-gray-200 space-y-2">
            <Truck className="w-8 h-8 text-[#4CAF50]" />
            <h3 className="font-extrabold text-sm text-[#2B2B2B]">1. Free Room Placement</h3>
            <p className="text-gray-600 leading-relaxed">
              Our professional 2-man white-glove delivery teams carry your wardrobes, beds, or sofas straight into your bedroom or living room.
            </p>
          </div>

          <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-gray-200 space-y-2">
            <Banknote className="w-8 h-8 text-[#F39A1F]" />
            <h3 className="font-extrabold text-sm text-[#2B2B2B]">2. Cash on Delivery (COD)</h3>
            <p className="text-gray-600 leading-relaxed">
              Zero upfront online payments required. Inspect all boxes and mirror panels before handing cash or card payment to our driver.
            </p>
          </div>

          <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-gray-200 space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#8A5A2B]" />
            <h3 className="font-extrabold text-sm text-[#2B2B2B]">3. Home Assembly Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Add our optional assembly service at checkout. Experienced technicians build your furniture and remove all cardboard packaging.
            </p>
          </div>
        </div>

        {/* Interactive UK Delivery Coverage Map */}
        <DeliveryMap />
      </div>
    </div>
  );
};
