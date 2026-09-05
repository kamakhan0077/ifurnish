import React from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Truck, 
  Banknote, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Heart
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-16 pb-8 border-t-4 border-[#E8B63D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-gray-800 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#8A5A2B]/20 text-[#E8B63D] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Free UK Delivery</h4>
              <p className="text-xs text-gray-400">England, Wales & Glasgow</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#8A5A2B]/20 text-[#F39A1F] flex items-center justify-center shrink-0">
              <Banknote className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Cash on Delivery</h4>
              <p className="text-xs text-gray-400">Pay after home inspection</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#8A5A2B]/20 text-[#4CAF50] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">10-Year Guarantee</h4>
              <p className="text-xs text-gray-400">Solid wood & metal frames</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#8A5A2B]/20 text-[#E8B63D] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Assembly Available</h4>
              <p className="text-xs text-gray-400">Room-of-choice installation</p>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          
          {/* Column 1: Brand Logo & About */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-xs text-gray-400 leading-relaxed pt-2">
              iFurnish is a premier UK online furniture brand bringing elegant, high-durability Wardrobe Sets, Beds, and Sofas straight to your home with 100% Free Delivery and Cash on Delivery guarantee.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E8B63D] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
              <span>Official UK Online Store</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-[#E8B63D] pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About iFurnish' },
                { id: 'contact', label: 'Contact Customer Support' },
                { id: 'delivery', label: 'Delivery Coverage & Map' },
                { id: 'faq', label: 'Frequently Asked Questions' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className="hover:text-[#E8B63D] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#8A5A2B]" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Furniture Categories */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-[#E8B63D] pl-2.5">
              Categories
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'wardrobes', label: 'Wardrobe Sets & Sliding Mirrors' },
                { id: 'beds', label: 'Ottoman Beds & Chesterfield Frames' },
                { id: 'sofas', label: 'Corner Sofas, Recliners & Loungers' },
                { id: 'wardrobes', label: '4-Door High Gloss Wardrobes' },
                { id: 'beds', label: '2000 Pocket Sprung Divan Beds' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className="hover:text-[#E8B63D] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#8A5A2B]" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Operating Hours */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-[#E8B63D] pl-2.5">
              Contact & Hours
            </h3>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E8B63D] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:08001234567" className="font-bold text-white hover:text-[#E8B63D]">0800 123 4567</a>
                  <p className="text-[11px] text-gray-400">Toll-Free UK Helpline</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#E8B63D] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:enquiries@ifurnish.co.uk" className="hover:text-[#E8B63D]">enquiries@ifurnish.co.uk</a>
                  <p className="text-[11px] text-gray-400">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#E8B63D] shrink-0 mt-0.5" />
                <span>UK Distribution Hub, Express Park, Manchester & London Depot</span>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#E8B63D] shrink-0 mt-0.5" />
                <span>Mon - Sat: 8:00 AM - 8:00 PM<br />Sunday: Closed for Delivery</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer legal bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} iFurnish Ltd. All rights reserved. Registered UK Online Furniture Retailer.</p>

          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => setActiveTab('privacy')} className="hover:text-[#E8B63D]">Privacy Policy</button>
            <button onClick={() => setActiveTab('terms')} className="hover:text-[#E8B63D]">Terms & Conditions</button>
            <button onClick={() => setActiveTab('delivery')} className="hover:text-[#E8B63D]">Delivery Policy</button>
          </div>

          <div className="flex items-center gap-2 bg-[#2B2B2B] px-3 py-1.5 rounded-full border border-gray-700">
            <Banknote className="w-4 h-4 text-[#4CAF50]" />
            <span className="text-gray-300 text-[11px] font-semibold">Cash on Delivery (COD) Only</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
