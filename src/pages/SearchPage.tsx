import React from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Search } from 'lucide-react';

interface SearchPageProps {
  searchQuery: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onOrderNow: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({
  searchQuery,
  products,
  onSelectProduct,
  onQuickView,
  onOrderNow,
  wishlistIds,
  onToggleWishlist,
}) => {
  const queryLower = searchQuery.toLowerCase().trim();

  const matching = queryLower
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(queryLower) ||
          p.categoryLabel.toLowerCase().includes(queryLower) ||
          p.shortDescription.toLowerCase().includes(queryLower) ||
          p.features.some((f) => f.toLowerCase().includes(queryLower))
      )
    : [];

  return (
    <div className="pb-16 space-y-8">
      <div className="bg-[#FAF8F3] py-12 px-4 border-b border-[#8A5A2B]/10 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="bg-[#E8B63D] text-[#2B2B2B] text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
            Search iFurnish Store
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2B2B2B]">
            Search Results for "{searchQuery}"
          </h1>
          <p className="text-xs text-gray-500">
            Found <span className="font-bold text-[#8A5A2B]">{matching.length}</span> matching furniture items
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {matching.length === 0 ? (
          <div className="py-16 text-center bg-[#FFFDF9] rounded-2xl border border-gray-200 space-y-3 max-w-md mx-auto">
            <Search className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="font-bold text-sm text-[#2B2B2B]">No matching items found</h3>
            <p className="text-xs text-gray-500">Try searching for keywords like "wardrobe", "sliding mirror", "ottoman bed", or "corner sofa".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {matching.map((p) => (
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
        )}
      </div>
    </div>
  );
};
