import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Phone, 
  Truck, 
  Banknote, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { CartItem, Product } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  wishlistCount: number;
  cartItems: CartItem[];
  openCartDrawer: () => void;
  openWishlistModal: () => void;
  onSearch: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  products: Product[];
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  wishlistCount,
  cartItems,
  openCartDrawer,
  openWishlistModal,
  onSearch,
  onSelectProduct,
  products
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setShowSearchDropdown(false);
      setActiveTab('search');
    }
  };

  const matchingProducts = searchQuery.trim()
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'wardrobes', label: 'Wardrobe Sets', badge: 'Popular' },
    { id: 'beds', label: 'Beds' },
    { id: 'sofas', label: 'Sofas' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'delivery', label: 'Delivery Info' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#8A5A2B] text-[#FFFDF9] text-xs py-2 px-4 sm:px-8 border-b border-[#8A5A2B]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5 text-[11px] font-semibold tracking-wide uppercase">
            <span className="flex items-center gap-1.5 text-[#FFFDF9]">
              <Truck className="w-4 h-4 text-[#E8B63D] shrink-0" />
              <span>🚚 <strong>Free Delivery</strong> across England, Wales & Glasgow Area</span>
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#FFFDF9]">
              <Banknote className="w-4 h-4 text-[#E8B63D] shrink-0" />
              <span>💷 <strong>Cash on Delivery</strong> Available (COD Only)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wider">
            <a 
              href="tel:08001234567" 
              className="flex items-center gap-1.5 text-[#E8B63D] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0800 123 4567</span>
            </a>
            <span className="hidden sm:inline text-white/60">Mon-Sat 8am - 8pm</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#F5F1E8]' 
            : 'bg-white py-4 border-b border-[#F5F1E8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div onClick={() => setActiveTab('home')} className="shrink-0 cursor-pointer">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`relative py-1 transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-[#2B2B2B] font-bold border-b-2 border-[#E8B63D]' 
                      : 'text-[#555555] hover:text-[#E8B63D]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="bg-[#E8B63D] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-xs uppercase tracking-widest">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Search Bar & Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Search Input Box */}
            <div className="relative hidden md:block w-48 lg:w-60">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search wardrobes, beds..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  onFocus={() => setShowSearchDropdown(true)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F3] border border-[#F5F1E8] rounded-sm text-[#2B2B2B] placeholder-gray-400 focus:outline-none focus:border-[#E8B63D] transition-all"
                />
                <Search className="w-4 h-4 text-[#8A5A2B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </form>

              {/* Search Suggestions Dropdown */}
              {showSearchDropdown && matchingProducts.length > 0 && (
                <div 
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-sm shadow-xl border border-[#F5F1E8] overflow-hidden z-50 p-2"
                  onMouseLeave={() => setShowSearchDropdown(false)}
                >
                  <p className="text-[10px] uppercase font-bold text-gray-400 px-3 py-1 tracking-wider">Matching Products</p>
                  {matchingProducts.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onSelectProduct(p);
                        setShowSearchDropdown(false);
                      }}
                      className="w-full text-left p-2 hover:bg-[#FAF8F3] rounded-sm flex items-center gap-3 transition-colors"
                    >
                      <img src={p.images[0]} alt={p.name} className="w-10 h-10 object-cover rounded-xs shrink-0" />
                      <div className="overflow-hidden">
                        <p className="text-xs font-semibold text-[#2B2B2B] truncate">{p.name}</p>
                        <p className="text-[11px] text-[#8A5A2B] font-bold">
                          £{p.salePrice || p.price} <span className="text-[10px] text-gray-400 font-normal">({p.categoryLabel})</span>
                        </p>
                      </div>
                    </button>
                  ))}
                  <button
                    onClick={handleSearchSubmit}
                    className="w-full mt-1 text-center py-1.5 text-xs font-bold text-[#2B2B2B] bg-[#FAF8F3] hover:bg-[#F5F1E8] rounded-xs transition-colors uppercase tracking-wider"
                  >
                    View All Results ({matchingProducts.length})
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setActiveTab('search')}
              className="md:hidden p-2 text-[#2B2B2B] hover:text-[#E8B63D] transition-colors rounded-xs hover:bg-[#FAF8F3]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={openWishlistModal}
              className="relative p-2 text-[#2B2B2B] hover:text-[#E8B63D] transition-colors rounded-xs hover:bg-[#FAF8F3]"
              title="View Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E8B63D] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Order Enquiry / Cart Drawer Button */}
            <button
              onClick={openCartDrawer}
              className="relative flex items-center gap-2 bg-[#E8B63D] hover:bg-[#D4A32E] text-white px-5 py-2.5 rounded-xs font-bold text-[12px] uppercase tracking-widest shadow-sm transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order Enquiry</span>
              <span className="bg-white/20 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-xs">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2B2B2B] hover:text-[#E8B63D] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#E8B63D]/20 shadow-2xl px-4 py-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            <form onSubmit={handleSearchSubmit} className="relative mb-2">
              <input
                type="text"
                placeholder="Search wardrobes, beds, sofas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-[#FAF8F3] border border-[#B07A45]/30 rounded-lg text-[#2B2B2B]"
              />
              <Search className="w-4 h-4 text-[#8A5A2B] absolute left-3 top-1/2 -translate-y-1/2" />
            </form>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === link.id
                    ? 'bg-[#F5F1E8] text-[#8A5A2B] font-bold border-l-4 border-[#E8B63D]'
                    : 'text-[#2B2B2B] hover:bg-[#FAF8F3]'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}

            <div className="pt-4 border-t border-gray-100 mt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-[#8A5A2B] font-semibold bg-[#FAF8F3] p-3 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
                <span>100% Free Delivery & Cash on Delivery Only</span>
              </div>
              <a
                href="tel:08001234567"
                className="flex items-center justify-center gap-2 bg-[#E8B63D] text-[#2B2B2B] font-bold p-3 rounded-lg text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline: 0800 123 4567</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
