import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { COLOR_OPTIONS } from '../data/products';
import { Filter, SlidersHorizontal, ArrowUpDown, Truck, Banknote, ShieldCheck } from 'lucide-react';

interface CategoryPageProps {
  categoryKey: 'wardrobes' | 'beds' | 'sofas';
  title: string;
  description: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onOrderNow: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryKey,
  title,
  description,
  products,
  onSelectProduct,
  onQuickView,
  onOrderNow,
  wishlistIds,
  onToggleWishlist,
}) => {
  const categoryProducts = products.filter(p => p.category === categoryKey);

  // Filter States
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [priceMax, setPriceMax] = useState<number>(2000);
  const [saleOnly, setSaleOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  let filtered = categoryProducts.filter((p) => {
    const effectivePrice = p.salePrice || p.price;
    if (effectivePrice > priceMax) return false;
    if (saleOnly && !p.isSale) return false;
    if (selectedColor !== 'all') {
      const hasColor = p.colors?.some(c => c.name.toLowerCase().includes(selectedColor.toLowerCase()));
      if (!hasColor) return false;
    }
    return true;
  });

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="space-y-8 pb-16">
      
      {/* Category Header Banner */}
      <div className="bg-[#FAF8F3] py-12 px-4 border-b border-[#8A5A2B]/10">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="bg-[#E8B63D] text-[#2B2B2B] text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
            100% Free Delivery & Cash on Delivery
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2B2B2B]">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Filter Controls Bar */}
        <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-[#8A5A2B]/10 shadow-xs mb-8 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {/* Color Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[#2B2B2B]">Colour:</span>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="p-2 bg-[#FAF8F3] border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#E8B63D]"
              >
                <option value="all">All Colours</option>
                {COLOR_OPTIONS.map((c, i) => (
                  <option key={i} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Price Max Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[#2B2B2B]">Max Price:</span>
              <span className="font-extrabold text-[#8A5A2B]">£{priceMax}</span>
              <input
                type="range"
                min={300}
                max={2000}
                step={50}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-24 accent-[#E8B63D]"
              />
            </div>

            {/* Sale Only Checkbox */}
            <label className="flex items-center gap-1.5 cursor-pointer font-bold text-xs text-[#2B2B2B] bg-[#FAF8F3] px-2.5 py-1.5 rounded-lg border border-gray-200">
              <input
                type="checkbox"
                checked={saleOnly}
                onChange={(e) => setSaleOnly(e.target.checked)}
                className="accent-[#E8B63D]"
              />
              <span>Sale Items Only</span>
            </label>
          </div>

          {/* Sort By Selector */}
          <div className="flex items-center gap-2 text-xs">
            <ArrowUpDown className="w-4 h-4 text-[#8A5A2B]" />
            <span className="font-bold text-[#2B2B2B]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="p-2 bg-[#FAF8F3] border border-gray-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-[#E8B63D]"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Product Count */}
        <p className="text-xs text-gray-500 font-semibold mb-4">
          Showing <span className="text-[#8A5A2B] font-bold">{filtered.length}</span> models
        </p>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center bg-[#FFFDF9] rounded-2xl border border-gray-200 space-y-3">
            <p className="text-sm font-bold text-[#2B2B2B]">No products found matching your active filters.</p>
            <button
              onClick={() => {
                setSelectedColor('all');
                setPriceMax(2000);
                setSaleOnly(false);
              }}
              className="py-2 px-4 bg-[#E8B63D] text-[#2B2B2B] font-bold text-xs rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onQuickView={onQuickView}
                onOrderNow={onOrderNow}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        )}

        {/* SEO Keywords Text Footer Box */}
        <div className="mt-16 bg-[#FAF8F3] p-8 rounded-2xl border border-[#E8B63D]/20 space-y-3 text-xs text-[#555555]">
          <h3 className="text-sm font-bold text-[#2B2B2B]">
            Premium {title} UK — Free Delivery & Cash on Delivery
          </h3>
          <p className="leading-relaxed">
            Looking for luxury {categoryKey} in England, Wales, or Glasgow? At iFurnish, every unit is engineered for long-lasting durability and style. Choose from sliding mirror doors, high gloss finishes, plush velvet upholstery, and natural wood veneers. We make ordering straightforward with 100% Free Room-of-Choice Delivery and Cash on Delivery guarantee.
          </p>
        </div>

      </div>
    </div>
  );
};
