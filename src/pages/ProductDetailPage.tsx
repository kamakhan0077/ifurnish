import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { ProductCard } from '../components/ProductCard';
import { 
  Star, 
  Truck, 
  Banknote, 
  ShieldCheck, 
  Heart, 
  ShoppingBag, 
  Check, 
  ChevronRight, 
  Wrench, 
  Clock, 
  Award, 
  Ruler 
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onOrderNow: (product: Product, color?: ProductColor, assembly?: boolean) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  setActiveTab: (tab: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
  onSelectProduct,
  onQuickView,
  onOrderNow,
  isWishlisted,
  onToggleWishlist,
  setActiveTab,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colors && product.colors.length > 0 ? product.colors[0] : { name: 'Standard Finish', hex: '#8A5A2B' }
  );
  const [includeAssembly, setIncludeAssembly] = useState<boolean>(false);
  const [activeTab, setActiveTabSection] = useState<'desc' | 'specs' | 'delivery'>('desc');

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pb-16 space-y-12">
      
      {/* Breadcrumbs Navigation */}
      <div className="bg-[#FAF8F3] py-3 px-4 border-b border-gray-200 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-500">
          <button onClick={() => setActiveTab('home')} className="hover:text-[#8A5A2B]">Home</button>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <button onClick={() => setActiveTab(product.category)} className="hover:text-[#8A5A2B]">
            {product.categoryLabel}
          </button>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="font-bold text-[#2B2B2B] truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Product Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Image Gallery & Zoom */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#FAF8F3] border border-gray-200 shadow-md">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
              />
              {product.isSale && product.discountPercent && (
                <span className="absolute top-4 left-4 bg-[#E53935] text-white text-xs font-extrabold uppercase px-3 py-1 rounded-lg shadow-sm">
                  Save {product.discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === img
                        ? 'border-[#E8B63D] shadow-md scale-105'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Gallery view" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Guarantees Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 text-center text-xs">
              <div className="bg-[#FAF8F3] p-3 rounded-2xl border border-gray-100">
                <Truck className="w-5 h-5 text-[#4CAF50] mx-auto mb-1" />
                <span className="font-bold text-[#2B2B2B] block">Free UK Delivery</span>
                <span className="text-[10px] text-gray-500">England, Wales & Glasgow</span>
              </div>
              <div className="bg-[#FAF8F3] p-3 rounded-2xl border border-gray-100">
                <Banknote className="w-5 h-5 text-[#F39A1F] mx-auto mb-1" />
                <span className="font-bold text-[#2B2B2B] block">Cash on Delivery</span>
                <span className="text-[10px] text-gray-500">No Online Payment</span>
              </div>
              <div className="bg-[#FAF8F3] p-3 rounded-2xl border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-[#8A5A2B] mx-auto mb-1" />
                <span className="font-bold text-[#2B2B2B] block">{product.warranty}</span>
                <span className="text-[10px] text-gray-500">Solid Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Purchasing Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#8A5A2B] uppercase tracking-wider">
                {product.categoryLabel}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B] mt-1">
                {product.name}
              </h1>

              {/* Rating & Stock */}
              <div className="flex items-center gap-3 mt-3 text-xs">
                <div className="flex items-center text-[#E8B63D] font-bold">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-gray-400">({product.reviewsCount} customer reviews)</span>
                <span className="bg-[#4CAF50]/10 text-[#4CAF50] font-extrabold px-2.5 py-0.5 rounded-full ml-auto">
                  ✓ {product.stockStatus}
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-[#E8B63D]/30 flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-extrabold text-[#2B2B2B]">
                  £{product.salePrice || product.price}
                </span>
                {product.salePrice && (
                  <span className="text-sm text-gray-400 line-through ml-2">
                    £{product.price}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold text-[#8A5A2B]">
                Free Delivery & Cash on Delivery
              </span>
            </div>

            {/* Short Description */}
            <p className="text-xs text-[#555555] leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Color Finish Picker */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#2B2B2B] block">
                  Select Finish / Colour: <span className="text-[#8A5A2B]">{selectedColor.name}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(c)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl text-xs border transition-all ${
                        selectedColor.name === c.name
                          ? 'border-[#E8B63D] bg-[#F5F1E8] font-bold text-[#2B2B2B] shadow-xs'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full border border-gray-300 shrink-0" style={{ backgroundColor: c.hex }} />
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Assembly Option Checkbox */}
            {product.assemblyAvailable && (
              <label className="flex items-center justify-between p-3.5 rounded-2xl border border-[#E8B63D]/40 bg-[#FAF8F3] cursor-pointer hover:bg-[#F5F1E8] transition-colors">
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-5 h-5 text-[#8A5A2B]" />
                  <div>
                    <span className="text-xs font-bold text-[#2B2B2B] block">
                      Add Professional Room Assembly
                    </span>
                    <span className="text-[11px] text-gray-500">
                      Trained technicians build in room of choice
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#8A5A2B]">+£{product.assemblyFee}</span>
                  <input
                    type="checkbox"
                    checked={includeAssembly}
                    onChange={(e) => setIncludeAssembly(e.target.checked)}
                    className="w-4 h-4 accent-[#E8B63D]"
                  />
                </div>
              </label>
            )}

            {/* Order Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onOrderNow(product, selectedColor, includeAssembly)}
                className="flex-1 py-4 px-6 bg-[#E8B63D] hover:bg-[#F39A1F] text-[#2B2B2B] font-extrabold text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Order Now (Cash on Delivery)</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-4 rounded-2xl border transition-colors ${
                  isWishlisted
                    ? 'bg-[#E53935] text-white border-[#E53935]'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
                title="Wishlist"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>

            {/* Dimensions Overview Box */}
            <div className="p-4 bg-[#FAF8F3] rounded-2xl border border-gray-200 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-[#2B2B2B]">
                <Ruler className="w-4 h-4 text-[#8A5A2B]" />
                <span>Dimensions & Size</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-gray-600">
                <div className="bg-white p-2 rounded-lg border">Height: <strong>{product.dimensions.height}</strong></div>
                <div className="bg-white p-2 rounded-lg border">Width: <strong>{product.dimensions.width}</strong></div>
                <div className="bg-white p-2 rounded-lg border">Depth: <strong>{product.dimensions.depth}</strong></div>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs: Description, Specs, Delivery */}
        <div className="mt-16 bg-[#FFFDF9] rounded-3xl border border-[#8A5A2B]/10 overflow-hidden shadow-sm">
          <div className="flex border-b border-gray-200 text-xs sm:text-sm font-bold bg-[#FAF8F3]">
            <button
              onClick={() => setActiveTabSection('desc')}
              className={`py-4 px-6 border-b-2 transition-colors ${
                activeTab === 'desc' ? 'border-[#E8B63D] text-[#8A5A2B] bg-[#FFFDF9]' : 'border-transparent text-gray-500'
              }`}
            >
              Description & Key Features
            </button>
            <button
              onClick={() => setActiveTabSection('specs')}
              className={`py-4 px-6 border-b-2 transition-colors ${
                activeTab === 'specs' ? 'border-[#E8B63D] text-[#8A5A2B] bg-[#FFFDF9]' : 'border-transparent text-gray-500'
              }`}
            >
              Materials & Specifications
            </button>
            <button
              onClick={() => setActiveTabSection('delivery')}
              className={`py-4 px-6 border-b-2 transition-colors ${
                activeTab === 'delivery' ? 'border-[#E8B63D] text-[#8A5A2B] bg-[#FFFDF9]' : 'border-transparent text-gray-500'
              }`}
            >
              UK Delivery & Cash on Delivery
            </button>
          </div>

          <div className="p-6 sm:p-8 text-xs sm:text-sm text-[#555555] leading-relaxed">
            {activeTab === 'desc' && (
              <div className="space-y-4">
                <p>{product.description}</p>
                <h4 className="font-bold text-[#2B2B2B] text-sm pt-2">Key Highlights:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#4CAF50] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-3 max-w-lg">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-bold text-[#2B2B2B]">Materials Used:</span>
                  <span>{product.materials.join(', ')}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-bold text-[#2B2B2B]">Structural Warranty:</span>
                  <span>{product.warranty}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-bold text-[#2B2B2B]">Assembly Service:</span>
                  <span>{product.assemblyAvailable ? `Available (+£${product.assemblyFee})` : 'Self Assembly'}</span>
                </div>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="space-y-3 max-w-xl">
                <p className="font-bold text-[#2B2B2B]">How Cash on Delivery Works:</p>
                <p>We deliver directly to England, Wales, and the Glasgow area with 100% Free Delivery. You pay no money online. Pay cash or handheld card machine directly to the driver upon home delivery and inspection.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B]">
              You May Also Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onSelectProduct={onSelectProduct}
                  onQuickView={onQuickView}
                  onOrderNow={() => onOrderNow(p)}
                  isWishlisted={isWishlisted}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
