import React from 'react';
import { Product } from '../types';
import { Heart, Eye, ShoppingBag, Star, Truck, Banknote } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onOrderNow: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickView,
  onOrderNow,
  isWishlisted,
  onToggleWishlist,
}) => {
  return (
    <div className="luxury-card rounded-sm overflow-hidden group flex flex-col justify-between h-full bg-white">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF8F3] cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isSale && product.discountPercent && (
            <span className="bg-[#E53935] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-xs tracking-wider shadow-sm">
              Save {product.discountPercent}%
            </span>
          )}
          {product.isPopular && (
            <span className="bg-[#E8B63D] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-xs tracking-wider shadow-sm">
              ★ Popular
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#8A5A2B] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-xs tracking-wider shadow-sm">
              New
            </span>
          )}
        </div>

        {/* Floating Quick Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 shadow-sm ${
              isWishlisted
                ? 'bg-[#E53935] text-white'
                : 'bg-white/90 text-gray-700 hover:bg-white hover:text-[#E53935]'
            }`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            aria-label="Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2 rounded-full bg-white/90 backdrop-blur-md text-gray-700 hover:bg-white hover:text-[#E8B63D] transition-all duration-300 shadow-sm opacity-0 group-hover:opacity-100"
            title="Quick View"
            aria-label="Quick View"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Delivery Badge */}
        <div className="absolute bottom-2 left-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xs text-[10px] font-bold text-[#8A5A2B] flex items-center justify-between border border-[#F5F1E8]">
          <span className="flex items-center gap-1">
            <Truck className="w-3 h-3 text-[#4CAF50]" />
            <span>Free Delivery</span>
          </span>
          <span className="flex items-center gap-1">
            <Banknote className="w-3 h-3 text-[#E8B63D]" />
            <span>COD Available</span>
          </span>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="font-semibold text-[#8A5A2B] uppercase tracking-widest text-[9px]">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-[#E8B63D] font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-bold text-sm text-[#2B2B2B] hover:text-[#E8B63D] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#555555] line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Available Colors Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Colours:</span>
              <div className="flex items-center gap-1">
                {product.colors.map((c, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing & Action Buttons */}
        <div className="pt-2 border-t border-[#F5F1E8] space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-[#2B2B2B]">
              £{product.salePrice || product.price}
            </span>
            {product.salePrice && (
              <span className="text-xs text-gray-400 line-through">
                £{product.price}
              </span>
            )}
          </div>

          {/* Buttons: View Details & Order Now */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelectProduct(product)}
              className="w-full py-2 px-3 text-[11px] font-bold text-[#2B2B2B] bg-[#FAF8F3] hover:bg-[#F5F1E8] rounded-xs border border-[#F5F1E8] transition-all text-center uppercase tracking-wider"
            >
              Details
            </button>

            <button
              onClick={() => onOrderNow(product)}
              className="w-full py-2 px-3 text-[11px] font-bold text-white bg-[#2B2B2B] hover:bg-[#E8B63D] hover:text-[#2B2B2B] rounded-xs transition-all flex items-center justify-center gap-1 uppercase tracking-wider"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>Order</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
