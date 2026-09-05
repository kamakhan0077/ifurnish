import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  setActiveTab: (tab: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ setActiveTab }) => {
  return (
    <div className="py-20 text-center px-4 space-y-4">
      <span className="text-5xl font-extrabold text-[#E8B63D]">404</span>
      <h1 className="text-2xl font-extrabold text-[#2B2B2B]">Page Not Found</h1>
      <p className="text-xs text-gray-500 max-w-sm mx-auto">
        The page you are looking for might have been moved or does not exist.
      </p>
      <button
        onClick={() => setActiveTab('home')}
        className="py-3 px-6 bg-[#8A5A2B] text-white font-bold text-xs rounded-xl inline-flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to iFurnish Home</span>
      </button>
    </div>
  );
};
