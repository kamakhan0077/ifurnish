import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { DeliveryMap } from '../components/DeliveryMap';
import { Testimonials } from '../components/Testimonials';
import { REVIEWS } from '../data/products';
import { 
  ArrowRight, 
  Truck, 
  Banknote, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  CheckCircle2, 
  Flame 
} from 'lucide-react';

interface HomePageProps {
  products: Product[];
  setActiveTab: (tab: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onOrderNow: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  setActiveTab,
  onSelectProduct,
  onQuickView,
  onOrderNow,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const popularProducts = products.filter(p => p.isPopular).slice(0, 8);
  const saleProducts = products.filter(p => p.isSale).slice(0, 8);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="space-y-16 pb-12">
      
      {/* --- HERO BANNER --- */}
      <section className="relative bg-[#FAF8F3] pt-10 pb-16 overflow-hidden border-b border-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-[#E8B63D] uppercase font-bold tracking-[0.2em] text-xs block">
                UK's Premier Furniture Specialist
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#2B2B2B] leading-[1.1]">
                Beautiful Furniture <br />
                <span className="font-bold">For Your Home</span>
              </h1>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Premium quality wardrobes, beds and sofas delivered across England, Wales and Glasgow with 100% Free Delivery and Cash on Delivery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('wardrobes')}
                  className="w-full sm:w-auto py-3.5 px-8 bg-[#2B2B2B] hover:bg-black text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Shop Wardrobe Sets</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveTab('beds')}
                  className="w-full sm:w-auto py-3.5 px-8 bg-white hover:bg-[#FAF8F3] text-[#2B2B2B] border border-[#2B2B2B] font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Browse Beds & Sofas</span>
                </button>
              </div>

              {/* Key Highlights Bar */}
              <div className="pt-6 border-t border-[#F5F1E8] grid grid-cols-3 gap-3 text-center text-xs text-[#2B2B2B]">
                <div className="bg-white p-3 rounded-sm border border-[#F5F1E8]">
                  <Truck className="w-4 h-4 text-[#4CAF50] mx-auto mb-1" />
                  <span className="font-bold block text-[11px] uppercase tracking-wider">Free Delivery</span>
                  <span className="text-[10px] text-gray-500">England, Wales & Glasgow</span>
                </div>

                <div className="bg-white p-3 rounded-sm border border-[#F5F1E8]">
                  <Banknote className="w-4 h-4 text-[#E8B63D] mx-auto mb-1" />
                  <span className="font-bold block text-[11px] uppercase tracking-wider">Cash on Delivery</span>
                  <span className="text-[10px] text-gray-500">Pay on Arrival</span>
                </div>

                <div className="bg-white p-3 rounded-sm border border-[#F5F1E8]">
                  <ShieldCheck className="w-4 h-4 text-[#8A5A2B] mx-auto mb-1" />
                  <span className="font-bold block text-[11px] uppercase tracking-wider">10-Yr Guarantee</span>
                  <span className="text-[10px] text-gray-500">Solid Frames</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden shadow-lg border border-[#F5F1E8]">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                  alt="iFurnish Luxury Bedroom Furniture"
                  className="w-full h-[380px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-sm shadow-md border border-[#F5F1E8] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#8A5A2B] tracking-widest block">
                      Featured Collection
                    </span>
                    <h3 className="font-bold text-sm text-[#2B2B2B]">Oslo Mirror Sliding Wardrobe Set</h3>
                  </div>
                  <button
                    onClick={() => setActiveTab('wardrobes')}
                    className="py-2 px-4 bg-[#2B2B2B] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#E8B63D] hover:text-[#2B2B2B] transition-colors"
                  >
                    View Set
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SHOP BY CATEGORY --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[#E8B63D] uppercase font-bold tracking-[0.2em] text-xs block">
            Explore Furniture Range
          </span>
          <h2 className="text-3xl sm:text-4xl font-extralight text-[#2B2B2B]">
            Shop by <span className="font-bold">Category</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            Discover luxury wardrobe sets, ottoman beds, and corner sofas designed for modern UK homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 'wardrobes',
              title: 'Wardrobe Sets',
              subtitle: 'Mirror Sliding & Gloss Wardrobes',
              image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
              count: '10+ Models Available',
            },
            {
              id: 'beds',
              title: 'Beds & Ottomans',
              subtitle: 'Chesterfield & Gas-Lift Storage',
              image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
              count: '10+ Models Available',
            },
            {
              id: 'sofas',
              title: 'Sofas & Recliners',
              subtitle: 'Corner Loungers & Velvet Suites',
              image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
              count: '10+ Models Available',
            },
          ].map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="group relative rounded-sm overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 aspect-[4/5] flex flex-col justify-end p-6 border border-[#F5F1E8]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="relative z-10 text-white space-y-2">
                <span className="bg-[#E8B63D] text-white text-[9px] font-bold px-2.5 py-1 rounded-xs uppercase tracking-widest">
                  {cat.count}
                </span>
                <h3 className="text-2xl font-bold tracking-tight">{cat.title}</h3>
                <p className="text-xs text-gray-300">{cat.subtitle}</p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#E8B63D] group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- POPULAR PRODUCTS SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[#E8B63D] uppercase font-bold tracking-[0.2em] text-xs block">
              Customer Favorites
            </span>
            <h2 className="text-3xl sm:text-4xl font-extralight text-[#2B2B2B] mt-1">
              Our Most <span className="font-bold">Popular Products</span>
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('wardrobes')}
            className="text-xs font-bold text-[#2B2B2B] hover:text-[#E8B63D] flex items-center gap-1 uppercase tracking-wider"
          >
            <span>View Entire Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onSelectProduct={onSelectProduct}
              onQuickView={onQuickView}
              onOrderNow={onOrderNow}
              isWishlisted={wishlistIds.includes(p.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </section>

      {/* --- SALE ITEMS SECTION --- */}
      <section className="bg-[#FFFDF9] py-16 border-y border-[#8A5A2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-2 text-[#E53935] font-extrabold text-xs uppercase tracking-wider">
            <Flame className="w-4 h-4 fill-current" />
            <span>Limited Time Offers</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2B2B2B]">
                Latest Sale Collection
              </h2>
              <p className="text-xs text-[#555555] mt-1">
                Up to 25% OFF on premium wardrobes, beds, and sofas with Free Delivery and Cash on Delivery.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelectProduct={onSelectProduct}
                onQuickView={onQuickView}
                onOrderNow={onOrderNow}
                isWishlisted={wishlistIds.includes(p.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <WhyChooseUs />

      {/* --- UK DELIVERY COVERAGE MAP --- */}
      <DeliveryMap />

      {/* --- CUSTOMER TESTIMONIALS --- */}
      <Testimonials reviews={REVIEWS} />

      {/* --- NEWSLETTER SIGNUP --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B2B2B] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-[#E8B63D]/30">
          <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
            <div className="w-12 h-12 bg-[#E8B63D] text-[#2B2B2B] rounded-full flex items-center justify-center mx-auto shadow-md">
              <Mail className="w-6 h-6" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Stay Updated with iFurnish Offers
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Subscribe to receive exclusive discounts, new arrival alerts, and private sale codes delivered straight to your inbox.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-[#4CAF50]/20 text-[#4CAF50] p-4 rounded-xl border border-[#4CAF50]/40 flex items-center justify-center gap-2 text-xs font-bold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you for subscribing! You will receive our latest offers soon.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#E8B63D]"
                />
                <button
                  type="submit"
                  className="py-3 px-6 bg-[#E8B63D] hover:bg-[#F39A1F] text-[#2B2B2B] font-extrabold text-xs rounded-xl transition-all shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
