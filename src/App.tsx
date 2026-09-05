import React, { useState, useEffect } from 'react';
import { Product, CartItem, ProductColor } from './types';
import { PRODUCTS } from './data/products';
import { updateMetaTags, generateOrganizationSchema, generateProductSchema } from './lib/seo';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { OrderEnquiryModal } from './components/OrderEnquiryModal';

// Pages
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SearchPage } from './pages/SearchPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart / Order Enquiry State (Persisted)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ifurnish_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State (Persisted)
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ifurnish_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals Open State
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState<boolean>(false);

  // Sync state to local storage
  useEffect(() => {
    try {
      localStorage.setItem('ifurnish_cart', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('ifurnish_wishlist', JSON.stringify(wishlistIds));
    } catch {}
  }, [wishlistIds]);

  // Handle SEO Meta Tags & Schema Injection
  useEffect(() => {
    if (activeTab === 'home') {
      updateMetaTags(
        'iFurnish UK | Wardrobe Sets, Beds & Sofas',
        'Shop luxury Wardrobe Sets, Beds, and Sofas at iFurnish with 100% Free Delivery and Cash on Delivery across England, Wales & Glasgow.'
      );
    } else if (activeTab === 'wardrobes') {
      updateMetaTags(
        'Wardrobe Sets UK | Sliding Mirrors & Gloss Wardrobes',
        'Browse 10+ modern Wardrobe Sets in England, Wales and Glasgow. Free Delivery & Cash on Delivery guarantee.'
      );
    } else if (activeTab === 'beds') {
      updateMetaTags(
        'Luxury Beds UK | Ottoman Storage & Chesterfield Frames',
        'Explore 10+ luxury Ottoman gas-lift beds and upholstered frames with Free Delivery and Cash on Delivery.'
      );
    } else if (activeTab === 'sofas') {
      updateMetaTags(
        'Modern Sofas UK | Corner Loungers & Velvet Suites',
        'Shop 10+ modern corner sofas, power recliners and velvet love seats. Free UK Delivery & Cash on Delivery.'
      );
    } else if (activeTab === 'product-detail' && selectedProduct) {
      updateMetaTags(
        `${selectedProduct.name} | iFurnish UK`,
        `${selectedProduct.shortDescription} Available with Free Delivery and Cash on Delivery.`
      );
    } else if (activeTab === 'about') {
      updateMetaTags('About Us | iFurnish UK Furniture Store', 'Learn about iFurnish, your trusted online UK furniture retailer.');
    } else if (activeTab === 'contact') {
      updateMetaTags('Contact Customer Support | iFurnish UK', 'Contact iFurnish for enquiries on wardrobes, beds, and sofas.');
    } else if (activeTab === 'delivery') {
      updateMetaTags('Free UK Delivery & Cash on Delivery | iFurnish', 'Learn about our room-of-choice delivery across England, Wales & Glasgow.');
    } else if (activeTab === 'faq') {
      updateMetaTags('Frequently Asked Questions | iFurnish UK', 'Answers about Cash on Delivery, room assembly, and warranties.');
    }

    // Scroll to top on page switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedProduct]);

  // Cart Actions
  const handleAddToCart = (product: Product, color?: ProductColor, includeAssembly: boolean = false) => {
    const chosenColor = color || (product.colors && product.colors[0]) || { name: 'Standard', hex: '#8A5A2B' };
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedColor.name === chosenColor.name && item.includeAssembly === includeAssembly
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, selectedColor: chosenColor, quantity: 1, includeAssembly }];
      }
    });

    setIsOrderDrawerOpen(true);
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCartItems(prev => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  // Wishlist Actions
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds(prev =>
      prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]
    );
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('product-detail');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveTab('search');
  };

  const wishlistProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F3] text-[#2B2B2B]">
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      {selectedProduct && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema(selectedProduct)) }}
        />
      )}

      {/* Main Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'product-detail') setSelectedProduct(null);
        }}
        wishlistCount={wishlistIds.length}
        cartItems={cartItems}
        openCartDrawer={() => setIsOrderDrawerOpen(true)}
        openWishlistModal={() => setIsWishlistModalOpen(true)}
        onSearch={handleSearch}
        onSelectProduct={handleSelectProduct}
        products={PRODUCTS}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            products={PRODUCTS}
            setActiveTab={setActiveTab}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOrderNow={(p) => handleAddToCart(p)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeTab === 'wardrobes' && (
          <CategoryPage
            categoryKey="wardrobes"
            title="Wardrobe Sets & Sliding Mirrors"
            description="Explore our range of sliding mirror wardrobes, high gloss 4-door wardrobes, and space-saving walk-in corner sets with 100% Free UK Delivery and Cash on Delivery."
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOrderNow={(p) => handleAddToCart(p)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeTab === 'beds' && (
          <CategoryPage
            categoryKey="beds"
            title="Luxury Beds & Gas-Lift Ottomans"
            description="Discover plush velvet Chesterfield beds, hydraulic gas-lift ottomans, and orthopaedic pocket sprung mattress packages with Free Delivery and Cash on Delivery."
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOrderNow={(p) => handleAddToCart(p)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeTab === 'sofas' && (
          <CategoryPage
            categoryKey="sofas"
            title="Sofas, Corner Loungers & Recliners"
            description="Sink into cloud-like comfort with our U-shape corner sofas, power recliners, and bouclé curved sofas with Free Room Placement and Cash on Delivery."
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOrderNow={(p) => handleAddToCart(p)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeTab === 'product-detail' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            allProducts={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOrderNow={(p, color, assembly) => handleAddToCart(p, color, assembly)}
            isWishlisted={wishlistIds.includes(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'search' && (
          <SearchPage
            searchQuery={searchQuery}
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onOrderNow={(p) => handleAddToCart(p)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'contact' && <ContactPage setActiveTab={setActiveTab} />}
        {activeTab === 'delivery' && <DeliveryPage />}
        {activeTab === 'faq' && <FaqPage />}
        {activeTab === 'privacy' && <PrivacyPolicyPage />}
        {activeTab === 'terms' && <TermsPage />}

        {!['home', 'wardrobes', 'beds', 'sofas', 'product-detail', 'search', 'about', 'contact', 'delivery', 'faq', 'privacy', 'terms'].includes(activeTab) && (
          <NotFoundPage setActiveTab={setActiveTab} />
        )}
      </main>

      {/* Global Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onViewFullPage={handleSelectProduct}
      />

      {/* Global Order Enquiry / Checkout Modal */}
      <OrderEnquiryModal
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
      />

      {/* Global Wishlist Modal */}
      {isWishlistModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#FFFDF9] rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto space-y-4 border border-[#E8B63D]/30 shadow-2xl">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-extrabold text-[#2B2B2B] text-base">Your Saved Wishlist ({wishlistProducts.length})</h3>
              <button onClick={() => setIsWishlistModalOpen(false)} className="p-1 hover:bg-gray-100 rounded">✕</button>
            </div>

            {wishlistProducts.length === 0 ? (
              <p className="text-xs text-gray-500 py-6 text-center">Your wishlist is currently empty.</p>
            ) : (
              <div className="space-y-3">
                {wishlistProducts.map((p) => (
                  <div key={p.id} className="flex items-center justify-between gap-3 p-2 border rounded-xl bg-[#FAF8F3]">
                    <img src={p.images[0]} alt={p.name} className="w-12 h-12 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0 text-xs">
                      <p className="font-bold text-[#2B2B2B] truncate">{p.name}</p>
                      <p className="font-extrabold text-[#8A5A2B]">£{p.salePrice || p.price}</p>
                    </div>
                    <button
                      onClick={() => {
                        handleSelectProduct(p);
                        setIsWishlistModalOpen(false);
                      }}
                      className="py-1.5 px-3 bg-[#E8B63D] font-bold text-xs rounded-lg text-[#2B2B2B]"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
