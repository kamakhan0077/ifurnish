export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'wardrobes' | 'beds' | 'sofas';
  categoryLabel: string;
  price: number;
  salePrice?: number;
  discountPercent?: number;
  isSale?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  shortDescription: string;
  description: string;
  features: string[];
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  materials: string[];
  colors: ProductColor[];
  images: string[];
  rating: number;
  reviewsCount: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Made to Order';
  deliveryTime: string;
  assemblyAvailable: boolean;
  assemblyFee: number;
  warranty: string;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  quantity: number;
  includeAssembly: boolean;
  customNotes?: string;
}

export interface OrderEnquiry {
  orderId: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postcode: string;
  region: 'England' | 'Wales' | 'Glasgow Area';
  deliveryDate: string;
  specialInstructions?: string;
  items: CartItem[];
  subtotal: number;
  assemblyTotal: number;
  deliveryFee: 0;
  totalAmount: number;
  paymentMethod: 'Cash on Delivery (COD)';
  status: 'Pending Confirmation' | 'Confirmed' | 'Out for Delivery';
  createdAt: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  verified: boolean;
  productName: string;
  comment: string;
  avatar?: string;
}

export interface FilterState {
  category?: 'all' | 'wardrobes' | 'beds' | 'sofas';
  searchQuery?: string;
  colorFilter?: string;
  priceRange?: [number, number];
  sortBy?: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
  saleOnly?: boolean;
  inStockOnly?: boolean;
}
