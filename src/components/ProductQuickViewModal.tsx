import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { X, Star, Truck, Banknote, ShieldCheck, Check, ShoppingBag, Heart } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: ProductColor, includeAssembly: boolean) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onViewFullPage: (product: Product) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onViewFullPage
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colors && product.colors.length > 0 ? product.colors[0] : { name: 'Standard', hex: '#8A5A2B' }
  );
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [includeAssembly, setIncludeAssembly] = useState<boolean>(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-2xl shadow-2xl overflow-hidden border border-[#E8B63D]/30 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="w-full md:w-1/2 p-4 bg-[#FAF8F3] flex flex-col justify-between">
          <div className="relative aspect-square rounded-xl overflow-hidden mb-3 border border-gray-200">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
            {product.isSale && product.discountPercent && (
              <span className="absolute top-3 left-3 bg-[#E53935] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                -{product.discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 ${
                    selectedImage === img ? 'border-[#E8B63D]' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto max-h-[80vh] md:max-h-none">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-[#8A5A2B] uppercase tracking-wider">
                {product.categoryLabel}
              </span>
              <h2 className="text-xl font-extrabold text-[#2B2B2B] mt-1">{product.name}</h2>
              
              <div className="flex items-center gap-2 mt-2 text-xs">
                <div className="flex items-center text-[#E8B63D]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold ml-1">{product.rating}</span>
                </div>
                <span className="text-gray-400">({product.reviewsCount} customer reviews)</span>
                <span className="text-[#4CAF50] font-semibold ml-auto">{product.stockStatus}</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-extrabold text-[#2B2B2B]">
                £{product.salePrice || product.price}
              </span>
              {product.salePrice && (
                <span className="text-sm text-gray-400 line-through">
                  £{product.price}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-xs text-[#555555] leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="text-xs font-bold text-[#2B2B2B] block mb-1.5">
                  Finish / Colour: <span className="text-[#8A5A2B]">{selectedColor.name}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(c)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border transition-all ${
                        selectedColor.name === c.name
                          ? 'border-[#E8B63D] bg-[#F5F1E8] font-bold text-[#2B2B2B]'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-300" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dimensions */}
            <div className="bg-[#FAF8F3] p-3 rounded-xl border border-gray-100 text-xs text-gray-600 space-y-1">
              <span className="font-bold text-[#2B2B2B]">Dimensions:</span> Height {product.dimensions.height} × Width {product.dimensions.width} × Depth {product.dimensions.depth}
            </div>

            {/* Assembly Option */}
            {product.assemblyAvailable && (
              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#E8B63D]/30 bg-[#FFFDF9] cursor-pointer hover:bg-[#FAF8F3] transition-colors">
                <input
                  type="checkbox"
                  checked={includeAssembly}
                  onChange={(e) => setIncludeAssembly(e.target.checked)}
                  className="w-4 h-4 accent-[#E8B63D]"
                />
                <span className="text-xs text-[#2B2B2B] font-medium">
                  Add Professional Room Assembly (+£{product.assemblyFee})
                </span>
              </label>
            )}

            {/* Delivery Features */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#8A5A2B]">
              <div className="flex items-center gap-1.5 bg-[#F5F1E8] p-2 rounded-lg">
                <Truck className="w-3.5 h-3.5 text-[#4CAF50]" />
                <span>Free UK Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#F5F1E8] p-2 rounded-lg">
                <Banknote className="w-3.5 h-3.5 text-[#F39A1F]" />
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-2">
            <button
              onClick={() => {
                onAddToCart(product, selectedColor, includeAssembly);
                onClose();
              }}
              className="flex-1 py-3 px-4 bg-[#E8B63D] hover:bg-[#F39A1F] text-[#2B2B2B] font-extrabold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Order Enquiry</span>
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              className={`p-3 rounded-xl border transition-colors ${
                isWishlisted ? 'bg-[#E53935] text-white border-[#E53935]' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title="Wishlist"
            >
              <Heart className="w-4 h-4 fill-current" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
