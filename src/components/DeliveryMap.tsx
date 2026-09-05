import React, { useState } from 'react';
import { MapPin, Truck, Banknote, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const DeliveryMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'england' | 'wales' | 'glasgow'>('england');

  const regionDetails = {
    england: {
      title: 'England Delivery Zone',
      coverage: 'Full coverage across Greater London, Midlands, North West, Yorkshire, South West & North East.',
      time: '3 - 5 Working Days',
      cod: 'Available on all orders',
      assembly: 'Available in room of choice',
      hubs: ['Manchester Logistics Depot', 'London Gateway Hub', 'Birmingham Express Depot'],
    },
    wales: {
      title: 'Wales Delivery Zone',
      coverage: 'Full coverage across Cardiff, Swansea, Newport, Wrexham and all Welsh counties.',
      time: '3 - 5 Working Days',
      cod: 'Available on all orders',
      assembly: 'Available in room of choice',
      hubs: ['Cardiff Distribution Hub', 'Wrexham Regional Depot'],
    },
    glasgow: {
      title: 'Glasgow Area Delivery Zone',
      coverage: 'Greater Glasgow, Paisley, East Kilbride, Hamilton, Clydebank & Dumbarton.',
      time: '3 - 5 Working Days',
      cod: 'Available on all orders',
      assembly: 'Available in room of choice',
      hubs: ['Glasgow Central Depot'],
    },
  };

  const current = regionDetails[selectedRegion];

  return (
    <section className="py-16 bg-[#FFFDF9] border-y border-[#8A5A2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="bg-[#E8B63D] text-[#2B2B2B] text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
            100% Free UK Delivery
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2B2B2B]">
            UK Delivery Coverage
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            We proudly deliver premium furniture across England, Wales and the Glasgow area with 100% Free Delivery and Cash on Delivery guarantee.
          </p>
        </div>

        {/* Map & Region Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive SVG UK Map Representation */}
          <div className="lg:col-span-7 bg-[#FAF8F3] p-6 rounded-3xl border border-[#E8B63D]/20 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-center gap-3 mb-6">
              <button
                onClick={() => setSelectedRegion('england')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedRegion === 'england'
                    ? 'bg-[#8A5A2B] text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-[#F5F1E8]'
                }`}
              >
                England (Free)
              </button>
              <button
                onClick={() => setSelectedRegion('wales')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedRegion === 'wales'
                    ? 'bg-[#8A5A2B] text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-[#F5F1E8]'
                }`}
              >
                Wales (Free)
              </button>
              <button
                onClick={() => setSelectedRegion('glasgow')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedRegion === 'glasgow'
                    ? 'bg-[#8A5A2B] text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-[#F5F1E8]'
                }`}
              >
                Glasgow Area (Free)
              </button>
            </div>

            {/* Custom Interactive SVG Visual */}
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-white rounded-2xl p-4 shadow-inner border border-gray-100 flex items-center justify-center">
              <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-md">
                <defs>
                  <linearGradient id="mapGradientActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E8B63D" />
                    <stop offset="100%" stopColor="#F39A1F" />
                  </linearGradient>
                  <linearGradient id="mapGradientBase" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E2E8F0" />
                    <stop offset="100%" stopColor="#CBD5E1" />
                  </linearGradient>
                </defs>

                {/* Scotland Base Shape (with Glasgow Highlighted) */}
                <path
                  d="M120,20 Q140,10 160,30 L170,80 L130,110 L100,80 Z"
                  fill="#E2E8F0"
                  stroke="#94A3B8"
                  strokeWidth="2"
                />

                {/* Glasgow Area Hotspot */}
                <path
                  d="M105,85 Q125,75 145,85 Q135,105 115,105 Z"
                  fill={selectedRegion === 'glasgow' ? 'url(#mapGradientActive)' : '#4CAF50'}
                  stroke="#388E3C"
                  strokeWidth="2"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedRegion('glasgow')}
                />

                {/* Wales Shape */}
                <path
                  d="M90,180 L125,185 L120,240 L70,225 L80,190 Z"
                  fill={selectedRegion === 'wales' ? 'url(#mapGradientActive)' : '#B07A45'}
                  stroke="#8A5A2B"
                  strokeWidth="2"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedRegion('wales')}
                />

                {/* England Shape */}
                <path
                  d="M125,110 L210,130 L220,260 L180,350 L100,320 L120,240 L125,185 Z"
                  fill={selectedRegion === 'england' ? 'url(#mapGradientActive)' : '#E8B63D'}
                  stroke="#F39A1F"
                  strokeWidth="2"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedRegion('england')}
                />

                {/* Pin Markers */}
                {/* London */}
                <circle cx="180" cy="290" r="6" fill="#8A5A2B" />
                <circle cx="180" cy="290" r="10" fill="#8A5A2B" opacity="0.3" className="animate-ping" />
                <text x="190" y="294" fontSize="10" fontWeight="bold" fill="#2B2B2B">London Hub</text>

                {/* Manchester */}
                <circle cx="145" cy="180" r="6" fill="#8A5A2B" />
                <circle cx="145" cy="180" r="10" fill="#8A5A2B" opacity="0.3" className="animate-ping" />
                <text x="155" y="184" fontSize="10" fontWeight="bold" fill="#2B2B2B">Manchester Depot</text>

                {/* Cardiff */}
                <circle cx="105" cy="230" r="6" fill="#8A5A2B" />
                <text x="115" y="234" fontSize="10" fontWeight="bold" fill="#2B2B2B">Cardiff Depot</text>

                {/* Glasgow */}
                <circle cx="125" cy="95" r="6" fill="#4CAF50" />
                <circle cx="125" cy="95" r="10" fill="#4CAF50" opacity="0.3" className="animate-ping" />
                <text x="135" y="99" fontSize="10" fontWeight="bold" fill="#2B2B2B">Glasgow Depot</text>
              </svg>
            </div>
            
            <p className="text-[11px] text-center text-gray-500 mt-3 italic">
              Click regions on the map to view regional delivery hubs and schedules.
            </p>
          </div>

          {/* Region Info Panel */}
          <div className="lg:col-span-5 space-y-6 bg-[#FAF8F3] p-8 rounded-3xl border border-[#E8B63D]/30 shadow-sm">
            <div>
              <span className="text-xs font-bold text-[#8A5A2B] uppercase tracking-wider">
                Region Selected
              </span>
              <h3 className="text-2xl font-extrabold text-[#2B2B2B] mt-1">
                {current.title}
              </h3>
            </div>

            <p className="text-xs text-[#555555] leading-relaxed">
              {current.coverage}
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                <Truck className="w-5 h-5 text-[#4CAF50] shrink-0" />
                <div>
                  <p className="font-bold text-[#2B2B2B]">Standard Delivery Window</p>
                  <p className="text-gray-500">{current.time} (100% Free)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                <Banknote className="w-5 h-5 text-[#F39A1F] shrink-0" />
                <div>
                  <p className="font-bold text-[#2B2B2B]">Cash on Delivery (COD)</p>
                  <p className="text-gray-500">{current.cod} with zero upfront fees</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-[#8A5A2B] shrink-0" />
                <div>
                  <p className="font-bold text-[#2B2B2B]">Room of Choice Placement</p>
                  <p className="text-gray-500">{current.assembly}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs font-bold text-[#2B2B2B] mb-2">Regional Logistics Hubs:</p>
              <div className="flex flex-wrap gap-2">
                {current.hubs.map((hub, idx) => (
                  <span
                    key={idx}
                    className="bg-[#F5F1E8] text-[#8A5A2B] text-[11px] font-bold px-3 py-1 rounded-full border border-[#E8B63D]/20 flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{hub}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
