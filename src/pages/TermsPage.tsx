import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6 text-xs sm:text-sm text-[#555555] leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B]">Terms & Conditions</h1>
      <p>Last updated: 1 January 2026</p>
      
      <h2 className="text-base font-bold text-[#2B2B2B] pt-4">1. Cash on Delivery Policy</h2>
      <p>All furniture orders placed on iFurnish are fulfilled on a Cash on Delivery (COD) basis. Customers in England, Wales, and Glasgow must inspect their delivered items before paying the driver in cash or via mobile terminal.</p>
      
      <h2 className="text-base font-bold text-[#2B2B2B] pt-4">2. Free Delivery Coverage</h2>
      <p>Free standard room-of-choice delivery applies to mainland addresses in England, Wales, and the Greater Glasgow area.</p>

      <h2 className="text-base font-bold text-[#2B2B2B] pt-4">3. Warranties</h2>
      <p>All Wardrobe Sets, Beds, and Sofas carry a minimum 5 to 10 Year Structural Guarantee.</p>
    </div>
  );
};
