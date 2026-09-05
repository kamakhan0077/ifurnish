import React from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6 text-xs sm:text-sm text-[#555555] leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B]">Privacy Policy</h1>
      <p>Last updated: 1 January 2026</p>
      
      <h2 className="text-base font-bold text-[#2B2B2B] pt-4">1. Information We Collect</h2>
      <p>iFurnish collects contact and delivery information (such as your full name, phone number, email address, and UK street address) solely to arrange Cash on Delivery orders and schedule furniture deliveries across England, Wales, and Glasgow.</p>
      
      <h2 className="text-base font-bold text-[#2B2B2B] pt-4">2. Payment & Financial Data</h2>
      <p>Because iFurnish operates exclusively on a Cash on Delivery (COD) basis, we do NOT store credit card numbers, CVVs, or online banking passwords on our website.</p>

      <h2 className="text-base font-bold text-[#2B2B2B] pt-4">3. Contact Us</h2>
      <p>If you have any questions regarding your personal data, email enquiries@ifurnish.co.uk or call 0800 123 4567.</p>
    </div>
  );
};
