import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  setActiveTab: (tab: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setActiveTab }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="pb-16 space-y-12">
      
      {/* Header */}
      <div className="bg-[#FAF8F3] py-12 px-4 border-b border-[#8A5A2B]/10 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="bg-[#E8B63D] text-[#2B2B2B] text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
            We're Here to Help
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2B2B2B]">
            Contact iFurnish Customer Support
          </h1>
          <p className="text-xs sm:text-sm text-[#555555]">
            Have questions about wardrobe dimensions, delivery dates, or Cash on Delivery options? Our UK team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9] p-6 sm:p-8 rounded-3xl border border-[#8A5A2B]/10 shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-[#2B2B2B]">
              Send Us a Message
            </h2>

            {formSubmitted ? (
              <div className="p-6 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#4CAF50] mx-auto" />
                <h3 className="font-bold text-base text-[#2B2B2B]">Message Received!</h3>
                <p className="text-xs text-gray-600">
                  Thank you for reaching out, {formData.name}. One of our UK customer advisors will respond to your query via phone or email within 2 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="py-2 px-4 bg-[#E8B63D] text-[#2B2B2B] font-bold text-xs rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#2B2B2B] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F3] border border-gray-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#2B2B2B] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F3] border border-gray-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#2B2B2B] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. sarah@example.co.uk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F3] border border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#2B2B2B] mb-1">Enquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F3] border border-gray-200 rounded-xl font-medium"
                  >
                    <option value="General Enquiry">General Product Enquiry</option>
                    <option value="Delivery Coverage">Delivery Coverage (England / Wales / Glasgow)</option>
                    <option value="Cash on Delivery">Cash on Delivery Questions</option>
                    <option value="Assembly Service">Home Assembly Option</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#2B2B2B] mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your question or enquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F3] border border-gray-200 rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E8B63D] hover:bg-[#F39A1F] text-[#2B2B2B] font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Furniture Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Google Map Visual */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Cards */}
            <div className="bg-[#FAF8F3] p-6 rounded-3xl border border-[#E8B63D]/20 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#E8B63D]/20 text-[#8A5A2B] rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2B2B2B]">Toll-Free Phone Support</h4>
                  <a href="tel:08001234567" className="text-sm font-extrabold text-[#8A5A2B]">0800 123 4567</a>
                  <p className="text-gray-500">Mon - Sat: 8:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="p-2.5 bg-[#E8B63D]/20 text-[#8A5A2B] rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2B2B2B]">Email Customer Support</h4>
                  <a href="mailto:enquiries@ifurnish.co.uk" className="text-xs font-bold text-[#8A5A2B]">enquiries@ifurnish.co.uk</a>
                  <p className="text-gray-500">2-hour email response window</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="p-2.5 bg-[#E8B63D]/20 text-[#8A5A2B] rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2B2B2B]">UK Central Logistics Hub</h4>
                  <p className="text-gray-600">100 Furniture Way, Express Park, Manchester & London Depot</p>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder Visual */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] bg-gray-200 flex items-center justify-center text-center p-4">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="UK Distribution Center Location"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md border border-[#E8B63D]/30 max-w-xs space-y-1">
                <MapPin className="w-6 h-6 text-[#E8B63D] mx-auto animate-bounce" />
                <p className="font-bold text-xs text-[#2B2B2B]">Manchester & London Logistics Hubs</p>
                <p className="text-[10px] text-gray-500">Serving England, Wales & Glasgow</p>
              </div>
            </div>

            {/* FAQ Shortcut */}
            <button
              onClick={() => setActiveTab('faq')}
              className="w-full p-4 bg-[#FFFDF9] hover:bg-[#FAF8F3] border border-[#8A5A2B]/20 rounded-2xl flex items-center justify-between text-xs font-bold text-[#8A5A2B] transition-colors"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </span>
              <span>Read FAQ →</span>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};
