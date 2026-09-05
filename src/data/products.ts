import { Product, CustomerReview } from '../types';

export const COLOR_OPTIONS = [
  { name: 'Pure White', hex: '#FFFFFF' },
  { name: 'Slate Grey', hex: '#4A5568' },
  { name: 'Matt Black', hex: '#1A202C' },
  { name: 'Natural Oak', hex: '#C69C6D' },
  { name: 'Rich Walnut', hex: '#5C4033' },
  { name: 'Cream Beige', hex: '#F3E5AB' },
  { name: 'Midnight Blue', hex: '#1E293B' },
  { name: 'Emerald Green', hex: '#064E3B' },
];

export const PRODUCTS: Product[] = [
  // --- WARDROBE SETS (10+ Items) ---
  {
    id: 'wardrobe-01',
    slug: 'oslo-luxury-sliding-wardrobe-set',
    name: 'Oslo Luxury Mirror Sliding Wardrobe Set',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 899,
    salePrice: 699,
    discountPercent: 22,
    isSale: true,
    isPopular: true,
    isNew: false,
    shortDescription: 'Modern 3-door sliding wardrobe with full-length LED mirror panels, soft-close doors and custom interior shelves.',
    description: 'The Oslo Luxury Mirror Sliding Wardrobe Set brings sleek Scandinavian design and effortless organization to your bedroom. Featuring full-length mirrored sliding doors that brighten your room and give an illusion of spaciousness, heavy-duty smooth sliding tracks, adjustable hanging rails, and deep storage drawers. Crafted from premium high-density MDF with scratch-resistant melamine finish.',
    features: [
      'Full-length mirrored sliding doors with whisper-quiet soft close',
      'Dual heavy-duty hanging rails & 6 adjustable shelving bays',
      'Integrated soft-touch warm LED canopy lighting',
      'Scratch-resistant & easy-clean matte finish',
      'Free Home Delivery across England, Wales & Glasgow',
      'Cash on Delivery payment on arrival'
    ],
    dimensions: { height: '215 cm', width: '250 cm', depth: '65 cm' },
    materials: ['High-Density Engineered Wood', 'Tempered Safety Glass Mirror', 'Anodized Aluminium Rails'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Matt Black', hex: '#1A202C' },
      { name: 'Natural Oak', hex: '#C69C6D' }
    ],
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 128,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 49,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'wardrobe-02',
    slug: 'london-gloss-4-door-wardrobe',
    name: 'London High Gloss 4-Door Fitted Wardrobe Set',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 1099,
    salePrice: 849,
    discountPercent: 23,
    isSale: true,
    isPopular: true,
    isNew: true,
    shortDescription: 'Contemporary 4-door wardrobe featuring high-gloss reflective doors, chrome handles, and dual chest of drawers.',
    description: 'Designed to maximize bedroom space, the London Wardrobe offers a magnificent 4-door storage solution. Two central mirrored doors are flanked by high-gloss side doors, opening up to reveal double hanging rails, overhead blanket shelves, and integrated base drawers.',
    features: [
      'Reflective ultra-high gloss front styling',
      'Central dual mirrors with polished beveled edge',
      'Includes 2 wide base storage drawers',
      'Brushed stainless steel vertical handles',
      'Free delivery with room-of-choice placement'
    ],
    dimensions: { height: '210 cm', width: '200 cm', depth: '60 cm' },
    materials: ['Gloss Lacquered MDF', 'Metal Drawer Glides', 'Safety Glass'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Matt Black', hex: '#1A202C' },
      { name: 'Slate Grey', hex: '#4A5568' }
    ],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 94,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 59,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'wardrobe-03',
    slug: 'oxford-artisan-oak-wardrobe-set',
    name: 'Oxford Artisan Natural Oak Wardrobe Set',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 950,
    salePrice: 749,
    discountPercent: 21,
    isSale: true,
    isPopular: false,
    isNew: false,
    shortDescription: 'Warm rustic oak finish wardrobe set with traditional wood grain texture, black metal hardware, and shoe rack.',
    description: 'Embrace warm organic textures in your home with the Oxford Artisan Oak Wardrobe Set. Blending timeless rustic charm with modern functionality, this unit offers multi-tier shelving, full-length coat hanging, and an integrated lower shoe compartmentalization system.',
    features: [
      'Authentic tactile oak wood grain finish',
      'Matte black industrial style handles',
      'Removable shelves for long dress storage',
      'Heavy-duty solid construction',
      'Cash on delivery guaranteed'
    ],
    dimensions: { height: '205 cm', width: '180 cm', depth: '58 cm' },
    materials: ['Laminated Oak Particle Board', 'Powder Coated Steel Hardware'],
    colors: [
      { name: 'Natural Oak', hex: '#C69C6D' },
      { name: 'Rich Walnut', hex: '#5C4033' }
    ],
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.7,
    reviewsCount: 81,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 49,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'wardrobe-04',
    slug: 'chelsea-minimalist-white-wardrobe',
    name: 'Chelsea Minimalist Matte White Wardrobe',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 649,
    salePrice: 499,
    discountPercent: 23,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Pure white minimalist 3-door wardrobe with handleless push-to-open doors and adjustable interior partitioning.',
    description: 'The Chelsea Wardrobe is designed for modern city apartments and sleek contemporary spaces. Clean handleless doors create an uncluttered silhouette while push-to-open latch mechanisms ensure seamless usage.',
    features: [
      'Handleless push-to-open magnetic latches',
      'Satin matte smudge-resistant white coating',
      '3-door spacious interior layout',
      'Compact depth ideal for snug bedrooms'
    ],
    dimensions: { height: '200 cm', width: '160 cm', depth: '55 cm' },
    materials: ['Engineered Eco-MDF', 'Soft Touch Satin Finish'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Cream Beige', hex: '#F3E5AB' }
    ],
    images: [
      'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 62,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 39,
    warranty: '5 Year Structural Guarantee'
  },
  {
    id: 'wardrobe-05',
    slug: 'verona-walnut-mirror-wardrobe',
    name: 'Verona Dark Walnut & Bronze Mirror Wardrobe',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 1199,
    salePrice: 949,
    discountPercent: 21,
    isSale: true,
    isPopular: true,
    isNew: false,
    shortDescription: 'Italian-inspired rich walnut wardrobe with bronze tinted mirror panels and luxury soft-close sliders.',
    description: 'Elevate master bedroom suites with the Verona Dark Walnut collection. Combining dark roasted espresso wood tones with subtle bronze mirror tints, this wardrobe exudes opulent Italian hotel luxury.',
    features: [
      'Bronze tinted anti-glare mirror panels',
      'Rich dark walnut wood veneer texture',
      'Reinforced steel hanging bar supports',
      'Integrated interior LED strip sensors'
    ],
    dimensions: { height: '220 cm', width: '240 cm', depth: '65 cm' },
    materials: ['Walnut Wood Veneer', 'Tinted Tempered Safety Mirror', 'Solid Brass Trim'],
    colors: [
      { name: 'Rich Walnut', hex: '#5C4033' },
      { name: 'Matt Black', hex: '#1A202C' }
    ],
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 5.0,
    reviewsCount: 45,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 7 Working Days',
    assemblyAvailable: true,
    assemblyFee: 69,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'wardrobe-06',
    slug: 'kingston-triple-sliding-wardrobe',
    name: 'Kingston 3-Door Triple Sliding Wardrobe Set',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 999,
    salePrice: 799,
    discountPercent: 20,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Extra large 2.5m wide triple door sliding wardrobe with center mirror and charcoal grey panels.',
    description: 'Need maximum storage capacity? The Kingston Triple Sliding Wardrobe spans 250cm wide, providing complete storage for couples or extensive wardrobes.',
    features: [
      'Massive 250cm storage width',
      'Center mirror door flanked by charcoal textured panels',
      'Includes 3 rail compartments and 9 storage cubes',
      'Aluminium track system for heavy daily use'
    ],
    dimensions: { height: '215 cm', width: '250 cm', depth: '62 cm' },
    materials: ['MDF', 'Aluminium Glides', 'Glass'],
    colors: [
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 38,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 59,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'wardrobe-07',
    slug: 'cambridge-quad-classic-wardrobe',
    name: 'Cambridge Classic 4-Door Framed Wardrobe',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 849,
    salePrice: 679,
    discountPercent: 20,
    isSale: true,
    isPopular: false,
    isNew: false,
    shortDescription: 'Traditional shaker-style 4-door wardrobe with decorative cornicing and warm cream painted finish.',
    description: 'Breathe timeless elegance into period or country style homes with the Cambridge Quad Wardrobe. Featuring classic shaker paneling and delicate metal drop knobs.',
    features: [
      'Shaker style panel doors with decorative top cornice',
      'Satin cream painted finish',
      'Includes 2 lower storage drawers with antique brass handles',
      'Includes deep shoe racks and tie hangers'
    ],
    dimensions: { height: '210 cm', width: '190 cm', depth: '60 cm' },
    materials: ['Solid Pine Framework', 'MDF Panels', 'Brass Hardware'],
    colors: [
      { name: 'Cream Beige', hex: '#F3E5AB' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 52,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 49,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'wardrobe-08',
    slug: 'windsor-corner-wardrobe-combination',
    name: 'Windsor Modular Corner Wardrobe Set',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 1399,
    salePrice: 1099,
    discountPercent: 21,
    isSale: true,
    isPopular: true,
    isNew: true,
    shortDescription: 'L-shaped modular corner wardrobe set that transforms unused corner spaces into walk-in closet storage.',
    description: 'Transform awkward bedroom corners into an organized walk-in wardrobe experience. The Windsor Modular set seamlessly connects left and right wing wardrobes around an extra-deep corner unit.',
    features: [
      'Walk-in corner depth with internal lighting',
      'Modular configuration can be reversed left or right',
      'Includes double hanging rails and 12 adjustable shelf slots',
      'Soft-close hinges on all hinged doors'
    ],
    dimensions: { height: '215 cm', width: '220 cm', depth: '220 cm' },
    materials: ['High Density Fiberboard', 'Soft Close Steel Hinges'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Natural Oak', hex: '#C69C6D' }
    ],
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 5.0,
    reviewsCount: 76,
    stockStatus: 'In Stock',
    deliveryTime: '4 - 7 Working Days',
    assemblyAvailable: true,
    assemblyFee: 79,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'wardrobe-09',
    slug: 'monaco-black-mirror-wardrobe',
    name: 'Monaco Stealth Black & Smoked Glass Wardrobe',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 949,
    salePrice: 750,
    discountPercent: 21,
    isSale: true,
    isPopular: false,
    isNew: false,
    shortDescription: 'Dramatic matte black 2-door sliding wardrobe with tinted smoked glass panels and ambient backlighting.',
    description: 'Make a bold luxury statement with the Monaco Black Wardrobe. Smoked glass panels create a sophisticated dark mirror effect, complemented by rich matte black surrounds.',
    features: [
      'Smoked dark glass panels with anti-fingerprint coating',
      'Matte black anodized aluminium trim frame',
      'Heavy-duty sliding mechanism rated for 50,000 cycles',
      'Cash on delivery available across UK'
    ],
    dimensions: { height: '210 cm', width: '200 cm', depth: '62 cm' },
    materials: ['MDF', 'Smoked Safety Glass', 'Anodized Steel Frame'],
    colors: [
      { name: 'Matt Black', hex: '#1A202C' },
      { name: 'Slate Grey', hex: '#4A5568' }
    ],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 41,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 49,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'wardrobe-10',
    slug: 'bristol-compact-2-door-wardrobe',
    name: 'Bristol Compact Mirror Wardrobe Set',
    category: 'wardrobes',
    categoryLabel: 'Wardrobe Sets',
    price: 549,
    salePrice: 429,
    discountPercent: 22,
    isSale: true,
    isPopular: false,
    isNew: false,
    shortDescription: 'Compact 150cm sliding wardrobe ideal for guest rooms, youth bedrooms, and cozy UK home spaces.',
    description: 'Designed specifically for smaller UK bedrooms without sacrificing storage efficiency. The Bristol Wardrobe features one mirrored door and one solid panel door with smooth top glides.',
    features: [
      'Space-saving 150cm width',
      'Full vertical mirror door',
      'Includes top shelf rail and 4 side shelving nooks',
      'Fast 3-day UK delivery'
    ],
    dimensions: { height: '200 cm', width: '150 cm', depth: '58 cm' },
    materials: ['Laminated Particle Board', 'Mirror Glass'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Natural Oak', hex: '#C69C6D' },
      { name: 'Slate Grey', hex: '#4A5568' }
    ],
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.7,
    reviewsCount: 89,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 39,
    warranty: '5 Year Structural Guarantee'
  },

  // --- BEDS (10+ Items) ---
  {
    id: 'bed-01',
    slug: 'buckingham-ottoman-gas-lift-bed',
    name: 'Buckingham Chesterfield Ottoman Storage Bed',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 799,
    salePrice: 599,
    discountPercent: 25,
    isSale: true,
    isPopular: true,
    isNew: true,
    shortDescription: 'Plush deep buttoned velvet ottoman bed with hydraulic gas-lift under-bed storage base and thick wooden slats.',
    description: 'Unwind in five-star hotel comfort every night. The Buckingham Ottoman Bed features a hand-tufted Chesterfield headboard upholstered in water-repellent plush velvet. Below the frame lies a massive storage compartment powered by effortless hydraulic gas-lift pistons.',
    features: [
      'Deep buttoned 135cm tall Chesterfield headboard',
      'Heavy-duty hydraulic gas pistons for easy lifting',
      'Solid steel storage box base with protective floor fabric',
      'Includes posture-sprung wooden slat base',
      'Free home delivery & COD available'
    ],
    dimensions: { height: '135 cm', width: '160 cm', depth: '215 cm' },
    materials: ['Plush Crushed Velvet Fabric', 'Solid Hardwood Internal Frame', 'Steel Lift Mechanism'],
    colors: [
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Midnight Blue', hex: '#1E293B' },
      { name: 'Emerald Green', hex: '#064E3B' },
      { name: 'Cream Beige', hex: '#F3E5AB' }
    ],
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 156,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 39,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'bed-02',
    slug: 'regency-winged-velvet-bed-frame',
    name: 'Regency Winged Upholstered Velvet Bed Frame',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 699,
    salePrice: 529,
    discountPercent: 24,
    isSale: true,
    isPopular: true,
    isNew: false,
    shortDescription: 'Grand winged headboard bed frame with polished gold metal trim feet and soft linen velvet touch.',
    description: 'The Regency Bed Frame is the ultimate anchor for master bedrooms. Framed by elegant side wings with subtle silver stud detailing, this bed elevates contemporary and traditional interior styles alike.',
    features: [
      'Dramatic 140cm high winged headboard',
      'Padded side rails and footboard',
      'Sleek brushed brass metallic feet',
      'Reinforced center support rail for no-sag mattress support'
    ],
    dimensions: { height: '140 cm', width: '168 cm', depth: '220 cm' },
    materials: ['Luxury Woven Velvet', 'Solid Pine Slats', 'Polished Brass Legs'],
    colors: [
      { name: 'Cream Beige', hex: '#F3E5AB' },
      { name: 'Midnight Blue', hex: '#1E293B' },
      { name: 'Slate Grey', hex: '#4A5568' }
    ],
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 112,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 39,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'bed-03',
    slug: 'soho-boucle-low-profile-bed',
    name: 'Soho Bouclé Textured Low Profile Bed',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 749,
    salePrice: 589,
    discountPercent: 21,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'On-trend cozy bouclé fabric low profile bed with rounded organic headboard curves.',
    description: 'Bring soft tactile texture to your bedroom with the Soho Bouclé Bed. Inspired by modern minimalist organic architecture, this bed features plush cloud-like upholstery.',
    features: [
      'Ultra-soft tactile white bouclé fabric',
      'Curved organic minimalist headboard silhouette',
      'Low floor-profile design for airy spacious feel',
      'Heavy hardwood slat foundation'
    ],
    dimensions: { height: '115 cm', width: '162 cm', depth: '210 cm' },
    materials: ['Premium Bouclé Fabric', 'Kiln-Dried Hardwood Frame'],
    colors: [
      { name: 'Cream Beige', hex: '#F3E5AB' },
      { name: 'Slate Grey', hex: '#4A5568' }
    ],
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 78,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 29,
    warranty: '5 Year Structural Guarantee'
  },
  {
    id: 'bed-04',
    slug: 'mayfair-divan-storage-bed-set',
    name: 'Mayfair Executive Divan Bed with 4 Storage Drawers',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 649,
    salePrice: 499,
    discountPercent: 23,
    isSale: true,
    isPopular: true,
    isNew: false,
    shortDescription: 'Classic UK divan bed with 4 smooth-gliding storage drawers and matching padded vertical line headboard.',
    description: 'The Mayfair Divan Bed is a UK bedroom classic, combining durable reinforced timber base construction with four easy-access continental drawers.',
    features: [
      '4 built-in smooth sliding storage drawers',
      'Includes 120cm padded headboard',
      'Sturdy chrome glide feet',
      'Upholstered in stain-resistant crushed velvet or textured weave'
    ],
    dimensions: { height: '120 cm', width: '155 cm', depth: '200 cm' },
    materials: ['Timber Base', 'High Density Foam Upholstery', 'Chrome Hardware'],
    colors: [
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Matt Black', hex: '#1A202C' }
    ],
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.7,
    reviewsCount: 142,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 25,
    warranty: '5 Year Structural Guarantee'
  },
  {
    id: 'bed-05',
    slug: 'kensington-sleigh-bed-ottoman',
    name: 'Kensington Chesterfield Sleigh Ottoman Bed',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 899,
    salePrice: 699,
    discountPercent: 22,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Majestic scrolled sleigh bed headboard and footboard with gas-lift storage base.',
    description: 'Command immediate attention with the Kensington Sleigh Bed. Handcrafted with traditional scrolled top rails and deep hand button tufting.',
    features: [
      'Scrolled sleigh design on both headboard and footboard',
      'Front-opening hydraulic gas-lift mechanism',
      'Hand-tufted glass crystal buttons or self-fabric buttons',
      'Free delivery across England, Wales & Glasgow'
    ],
    dimensions: { height: '130 cm', width: '165 cm', depth: '235 cm' },
    materials: ['Plush Velvet Upholstery', 'Steel Frame', 'Solid Timber Rails'],
    colors: [
      { name: 'Midnight Blue', hex: '#1E293B' },
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Emerald Green', hex: '#064E3B' }
    ],
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 91,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 39,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'bed-06',
    slug: 'york-solid-oak-bed-frame',
    name: 'York Solid Natural Oak Bed Frame',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 679,
    salePrice: 529,
    discountPercent: 22,
    isSale: true,
    isPopular: false,
    isNew: false,
    shortDescription: 'Solid natural oak bed frame with timeless slatted headboard and protective matte clear lacquer.',
    description: 'Crafted from 100% solid natural American oak, the York Bed Frame features clean linear slats and heavy corner post construction built to last generations.',
    features: [
      '100% solid oak wood frame',
      'Zero veneer or wood chipboard used',
      'Double bolted corner brackets',
      'Includes solid pine slat kit'
    ],
    dimensions: { height: '110 cm', width: '158 cm', depth: '212 cm' },
    materials: ['Solid American White Oak'],
    colors: [
      { name: 'Natural Oak', hex: '#C69C6D' },
      { name: 'Rich Walnut', hex: '#5C4033' }
    ],
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 63,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 29,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'bed-07',
    slug: 'oxford-fluted-velvet-bed',
    name: 'Oxford Fluted Vertical Channel Velvet Bed',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 599,
    salePrice: 449,
    discountPercent: 25,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Modern vertical channel fluted headboard bed in rich jewel tone velvet finishes.',
    description: 'The Oxford Fluted Bed brings sleek architectural lines to your sanctuary. Deep vertical padded channels extend up the headboard, creating height and visual interest.',
    features: [
      'Vertical channel tufted design',
      'Low profile plush footboard',
      'Solid wood frame with central beam',
      'Cash on Delivery guaranteed'
    ],
    dimensions: { height: '130 cm', width: '158 cm', depth: '210 cm' },
    materials: ['Satin Touch Fabric', 'Hardwood Frame'],
    colors: [
      { name: 'Emerald Green', hex: '#064E3B' },
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Cream Beige', hex: '#F3E5AB' }
    ],
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 54,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 29,
    warranty: '5 Year Structural Guarantee'
  },
  {
    id: 'bed-08',
    slug: 'chelsea-four-poster-canopy-bed',
    name: 'Chelsea Contemporary Metal Four Poster Bed',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 849,
    salePrice: 679,
    discountPercent: 20,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Sleek architectural black steel four-poster canopy bed with minimalist clean silhouette.',
    description: 'Create an airy, romantic focal point with the Chelsea Four Poster Bed. Made from heavy-gauge powder-coated steel tubes, this bed supports drapery or stands alone as an artistic architectural sculpture.',
    features: [
      'Sturdy powder-coated matte black frame',
      'Includes canopy curtain rails',
      'Noise-free slatted mattress base',
      'Supports up to 350kg weight capacity'
    ],
    dimensions: { height: '210 cm', width: '160 cm', depth: '210 cm' },
    materials: ['Powder Coated Tubular Steel'],
    colors: [
      { name: 'Matt Black', hex: '#1A202C' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 36,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 39,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'bed-09',
    slug: 'bristol-orthopaedic-pocket-sprung-bed-set',
    name: 'Bristol Orthopaedic Bed Set with Pocket Sprung Mattress',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 899,
    salePrice: 699,
    discountPercent: 22,
    isSale: true,
    isPopular: true,
    isNew: false,
    shortDescription: 'Complete bed frame + 2000 pocket sprung memory foam orthopaedic mattress package.',
    description: 'Get the complete sleep solution in one bundle. Includes our luxurious padded bed frame alongside a 2000 pocket sprung orthopaedic mattress engineered for proper spinal alignment.',
    features: [
      'Includes 2000 individual pocket sprung mattress',
      'Cooling gel-infused memory foam top layer',
      'Hypoallergenic airflow fabric quilted cover',
      'Complete package saving over £300'
    ],
    dimensions: { height: '125 cm', width: '155 cm', depth: '205 cm' },
    materials: ['Upholstered Timber', 'Pocket Springs', 'Cooling Memory Foam'],
    colors: [
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 5.0,
    reviewsCount: 184,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 35,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'bed-10',
    slug: 'cambridge-linen-platform-bed',
    name: 'Cambridge Natural Woven Linen Platform Bed',
    category: 'beds',
    categoryLabel: 'Beds',
    price: 549,
    salePrice: 429,
    discountPercent: 22,
    isSale: true,
    isPopular: false,
    isNew: false,
    shortDescription: 'Relaxed organic Scandinavian style bed with natural linen blend fabric and light wood tapered legs.',
    description: 'Embrace cozy Nordic living with the Cambridge Linen Platform Bed. Softly padded with breathable natural woven linen, this bed creates a peaceful atmosphere.',
    features: [
      'Breathable organic linen blend upholstery',
      'Natural solid oak tapered wooden legs',
      'Low profile frame for easy access',
      'Free UK room delivery'
    ],
    dimensions: { height: '105 cm', width: '155 cm', depth: '208 cm' },
    materials: ['Natural Linen Blend', 'Pine & Oak Timber'],
    colors: [
      { name: 'Cream Beige', hex: '#F3E5AB' },
      { name: 'Slate Grey', hex: '#4A5568' }
    ],
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.7,
    reviewsCount: 67,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 29,
    warranty: '5 Year Structural Guarantee'
  },

  // --- SOFAS (10+ Items) ---
  {
    id: 'sofa-01',
    slug: 'belgravia-luxury-corner-sofa-set',
    name: 'Belgravia Luxury U-Shape Corner Sofa Set',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 1599,
    salePrice: 1249,
    discountPercent: 22,
    isSale: true,
    isPopular: true,
    isNew: true,
    shortDescription: 'Spacious 6-seater U-shape corner sofa in stain-resistant velvet with footstool chaise and high-density foam cushions.',
    description: 'Transform your living room into an entertaining haven with the Belgravia Corner Sofa. Featuring deep seats, plush back cushions, dual chaise lounges, and brushed gold accent legs, this sofa seats up to 6 adults in total comfort.',
    features: [
      'Expansive U-shape configuration with dual chaise ends',
      'Aquaclean stain-resistant luxury velvet fabric',
      'High-resilience foam core with pocket spring seat supports',
      'Includes 6 matching accent throw cushions',
      'Free home delivery & Cash on Delivery payment'
    ],
    dimensions: { height: '88 cm', width: '330 cm', depth: '200 cm' },
    materials: ['Stain-Resistant Plush Velvet', 'Kiln-Dried Birch Hardwood', 'High Density Foam'],
    colors: [
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Midnight Blue', hex: '#1E293B' },
      { name: 'Cream Beige', hex: '#F3E5AB' },
      { name: 'Emerald Green', hex: '#064E3B' }
    ],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 5.0,
    reviewsCount: 172,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 49,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'sofa-02',
    slug: 'oxford-chesterfield-3-seater-sofa',
    name: 'Oxford Traditional Chesterfield 3-Seater Leather Sofa',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 1299,
    salePrice: 999,
    discountPercent: 23,
    isSale: true,
    isPopular: true,
    isNew: false,
    shortDescription: 'Classic deep buttoned top-grain leather Chesterfield sofa with brass studding and hand-carved wooden bun feet.',
    description: 'The Oxford Chesterfield Sofa is an enduring symbol of British furniture craftsmanship. Antiqued top-grain leather is painstakingly button-tufted by hand around deep foam arms and backrest.',
    features: [
      '100% genuine antiqued top-grain leather',
      'Hand-tufted deep buttoned arms and backrest',
      'Individual brass studding applied by hand',
      'Solid beechwood internal frame structure'
    ],
    dimensions: { height: '78 cm', width: '220 cm', depth: '95 cm' },
    materials: ['Top-Grain Antiqued Leather', 'Solid Beech Wood', 'Brass Studs'],
    colors: [
      { name: 'Rich Walnut', hex: '#5C4033' },
      { name: 'Matt Black', hex: '#1A202C' }
    ],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 118,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 29,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'sofa-03',
    slug: 'kensington-velvet-2-seater-sofa',
    name: 'Kensington Modern Velvet 2-Seater Love Seat',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 699,
    salePrice: 529,
    discountPercent: 24,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Compact luxury 2-seater velvet sofa with ribbed seat stitching and slender gold metallic hairpin legs.',
    description: 'Perfect for chic apartments, reading nooks, or boutique waiting spaces. The Kensington 2-Seater couples ultra-soft jewel-toned velvet with sleek gold metal accent legs.',
    features: [
      'Tailored horizontal backrest ribbing',
      'Durable non-pilling velvet fabric',
      'Gold electroplated steel legs',
      'Includes 2 round bolster cushions'
    ],
    dimensions: { height: '82 cm', width: '160 cm', depth: '85 cm' },
    materials: ['Satin Velvet', 'Plywood & Steel Frame', 'Gold Electroplated Legs'],
    colors: [
      { name: 'Midnight Blue', hex: '#1E293B' },
      { name: 'Emerald Green', hex: '#064E3B' },
      { name: 'Cream Beige', hex: '#F3E5AB' }
    ],
    images: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 89,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 19,
    warranty: '5 Year Structural Guarantee'
  },
  {
    id: 'sofa-04',
    slug: 'lancaster-power-recliner-3-seater',
    name: 'Lancaster Electric Power Recliner 3-Seater Sofa',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 1299,
    salePrice: 999,
    discountPercent: 23,
    isSale: true,
    isPopular: true,
    isNew: false,
    shortDescription: 'Dual motor power reclining 3-seater sofa with USB charging ports, power headrests, and drop-down table.',
    description: 'Ultimate relaxation at the touch of a button. The Lancaster Power Recliner lets both end seats glide back into zero-gravity positions while maintaining built-in USB charging for your devices.',
    features: [
      'Dual quiet electric power reclining seats',
      'Built-in USB & USB-C device charging ports',
      'Center seat flips down into drinks tray table',
      'High back lumbar bolster support cushions'
    ],
    dimensions: { height: '102 cm', width: '215 cm', depth: '98 cm' },
    materials: ['Breathable Microfiber Fabric', 'Steel Recline Mechanism'],
    colors: [
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Matt Black', hex: '#1A202C' }
    ],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 134,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 39,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'sofa-05',
    slug: 'richmond-l-shape-fabric-sofa',
    name: 'Richmond Reversible L-Shape Corner Sofa',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 899,
    salePrice: 699,
    discountPercent: 22,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Versatile 4-seater L-shape corner sofa with movable chaise footstool that can be positioned left or right.',
    description: 'Adaptable to any UK living room configuration, the Richmond L-Shape Sofa features a floating footstool chaise that easily swaps from left corner to right corner.',
    features: [
      'Reversible chaise configuration (Left or Right facing)',
      'Heavy-duty textured linen weave fabric',
      'Removable & washable cushion covers',
      'Solid oak wooden feet'
    ],
    dimensions: { height: '85 cm', width: '240 cm', depth: '160 cm' },
    materials: ['Textured Linen Weave', 'High Resilient Foam', 'Oak Legs'],
    colors: [
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Cream Beige', hex: '#F3E5AB' },
      { name: 'Natural Oak', hex: '#C69C6D' }
    ],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 97,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 29,
    warranty: '5 Year Structural Guarantee'
  },
  {
    id: 'sofa-06',
    slug: 'windsor-boucle-curved-sofa',
    name: 'Windsor Organic Curved Bouclé 3-Seater Sofa',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 1199,
    salePrice: 929,
    discountPercent: 23,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Sculptural crescent-shaped bouclé sofa designed as a dramatic architectural centerpiece.',
    description: 'Break away from harsh straight lines with the Windsor Curved Bouclé Sofa. Featuring a smooth crescent swoop, this sofa fosters intimate conversation in modern living spaces.',
    features: [
      'Sculptural crescent curved silhouette',
      'Tactile cream bouclé fabric',
      'Multi-density foam core for enveloping comfort',
      'Concealed recessed legs'
    ],
    dimensions: { height: '78 cm', width: '230 cm', depth: '105 cm' },
    materials: ['Premium Bouclé Fabric', 'Hardwood Skeleton Frame'],
    colors: [
      { name: 'Cream Beige', hex: '#F3E5AB' },
      { name: 'Slate Grey', hex: '#4A5568' }
    ],
    images: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 42,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 29,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'sofa-07',
    slug: 'surrey-modular-corner-sofa-bed',
    name: 'Surrey Convertible Corner Sofa Bed with Storage',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 999,
    salePrice: 789,
    discountPercent: 21,
    isSale: true,
    isPopular: true,
    isNew: false,
    shortDescription: '3-in-1 corner sofa that easily pulls out into a double bed for guests, with lift-up ottoman blanket storage.',
    description: 'Maximize living room versatility with the Surrey Sofa Bed. During the day it offers generous seating for four; at night, the hidden pull-out mattress transforms it into a spacious guest bed.',
    features: [
      'Seamless pull-out mechanism converts sofa into double bed',
      'Lift-up chaise reveals large storage bay for bedding',
      'Includes 3 adjustable headrests',
      'Durable woven tweed fabric'
    ],
    dimensions: { height: '90 cm', width: '250 cm', depth: '170 cm' },
    materials: ['Heavy Woven Tweed', 'Steel Extension Glides', 'Pine Wood'],
    colors: [
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Midnight Blue', hex: '#1E293B' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 163,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: true,
    assemblyFee: 39,
    warranty: '5 Year Structural Guarantee'
  },
  {
    id: 'sofa-08',
    slug: 'mayfair-swivel-accent-armchair',
    name: 'Mayfair Upholstered 360° Swivel Accent Chair',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 449,
    salePrice: 349,
    discountPercent: 22,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Plush barrel-back swivel chair with 360-degree smooth rotation base and velvet fabric.',
    description: 'Add a touch of playful luxury with the Mayfair Swivel Accent Chair. Featuring a cocooning barrel back silhouette and a hidden smooth steel swivel plate.',
    features: [
      '360-degree silent smooth swivel motion',
      'Cocooning barrel curved backrest',
      'High-resilience foam seat cushion',
      'Compact footprint suits any room corner'
    ],
    dimensions: { height: '76 cm', width: '85 cm', depth: '82 cm' },
    materials: ['Soft Velvet Upholstery', 'Heavy Duty Steel Swivel Plate'],
    colors: [
      { name: 'Emerald Green', hex: '#064E3B' },
      { name: 'Midnight Blue', hex: '#1E293B' },
      { name: 'Cream Beige', hex: '#F3E5AB' }
    ],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 51,
    stockStatus: 'In Stock',
    deliveryTime: '2 - 4 Working Days',
    assemblyAvailable: false,
    assemblyFee: 0,
    warranty: '5 Year Structural Guarantee'
  },
  {
    id: 'sofa-09',
    slug: 'grosvenor-3-plus-2-sofa-set',
    name: 'Grosvenor Premium 3-Seater + 2-Seater Sofa Suite',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 1499,
    salePrice: 1149,
    discountPercent: 23,
    isSale: true,
    isPopular: true,
    isNew: false,
    shortDescription: 'Complete 3+2 living room sofa suite package in matching soft woven charcoal weave.',
    description: 'Furnish your entire living room in one step. The Grosvenor Suite includes both a full-sized 3-seater sofa and a matching 2-seater sofa.',
    features: [
      'Includes 1x 3-Seater Sofa & 1x 2-Seater Sofa',
      'Deep fiber-filled back cushions',
      'High density seat foam that retains shape',
      'Solid dark wood turned feet'
    ],
    dimensions: { height: '88 cm', width: '210 cm', depth: '92 cm' },
    materials: ['Charcoal Weave Fabric', 'Birch Wood Frame'],
    colors: [
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Cream Beige', hex: '#F3E5AB' }
    ],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 129,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 49,
    warranty: '10 Year Structural Guarantee'
  },
  {
    id: 'sofa-10',
    slug: 'hyde-park-corduroy-modular-sofa',
    name: 'Hyde Park Chunky Corduroy Modular Corner Sofa',
    category: 'sofas',
    categoryLabel: 'Sofas',
    price: 1199,
    salePrice: 949,
    discountPercent: 21,
    isSale: true,
    isPopular: false,
    isNew: true,
    shortDescription: 'Ultra plush chunky jumbo corduroy modular sofa with extra deep seating and relaxed aesthetic.',
    description: 'Experience deep sink-in cloud comfort with the Hyde Park Corduroy Sofa. Ribbed jumbo corduroy fabric gives a tactile retro-modern warmth.',
    features: [
      'Super-soft tactile jumbo corduroy upholstery',
      'Modular pieces clip together easily',
      'Feather and fiber blend cushion topper',
      'Cash on Delivery guaranteed across UK'
    ],
    dimensions: { height: '82 cm', width: '280 cm', depth: '180 cm' },
    materials: ['Jumbo Ribbed Corduroy', 'Feather/Foam Hybrid Fill'],
    colors: [
      { name: 'Cream Beige', hex: '#F3E5AB' },
      { name: 'Slate Grey', hex: '#4A5568' },
      { name: 'Rich Walnut', hex: '#5C4033' }
    ],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 73,
    stockStatus: 'In Stock',
    deliveryTime: '3 - 5 Working Days',
    assemblyAvailable: true,
    assemblyFee: 39,
    warranty: '10 Year Structural Guarantee'
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-01',
    name: 'Sarah Jenkins',
    location: 'Manchester, England',
    rating: 5,
    date: '14 July 2026',
    verified: true,
    productName: 'Oslo Luxury Mirror Sliding Wardrobe Set',
    comment: 'Absolutely blown away by the quality! The driver delivered it straight to our master bedroom on the 1st floor. I paid cash on delivery once I inspected the mirror panels. Unbeatable service!'
  },
  {
    id: 'rev-02',
    name: 'David & Hannah Miller',
    location: 'Cardiff, Wales',
    rating: 5,
    date: '02 July 2026',
    verified: true,
    productName: 'Buckingham Chesterfield Ottoman Storage Bed',
    comment: 'The gas lift mechanism on the Ottoman bed is so smooth. Stored all our winter bedding easily. Great communication from iFurnish customer support, delivery was 100% free!'
  },
  {
    id: 'rev-03',
    name: 'Callum MacLeod',
    location: 'Glasgow Area, Scotland',
    rating: 5,
    date: '28 June 2026',
    verified: true,
    productName: 'Belgravia Luxury U-Shape Corner Sofa Set',
    comment: 'Living in Glasgow, usually companies charge extortionate delivery fees. iFurnish delivered completely FREE and let us pay COD after unpacking the sofa modules. 10/10 recommendation!'
  },
  {
    id: 'rev-04',
    name: 'Emma Thompson',
    location: 'Birmingham, England',
    rating: 5,
    date: '19 June 2026',
    verified: true,
    productName: 'London High Gloss 4-Door Fitted Wardrobe Set',
    comment: 'Ordered with the home assembly option. Two lovely technicians arrived on time, built the wardrobe in under 90 minutes, and took all the cardboard packaging with them.'
  },
  {
    id: 'rev-05',
    name: 'Richard Davies',
    location: 'London, England',
    rating: 5,
    date: '05 June 2026',
    verified: true,
    productName: 'Oxford Traditional Chesterfield Leather Sofa',
    comment: 'The leather feels supple and luxurious. The walnut finish matches our living room flooring perfectly. Genuine British quality furniture.'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How does Cash on Delivery (COD) work with iFurnish?',
    a: 'It is simple and 100% risk-free! You place your enquiry or order online without entering any bank or card details. Our team contacts you to schedule a convenient delivery date. When our delivery team arrives at your home in England, Wales, or the Glasgow area, you inspect your furniture items first. Once satisfied, you hand cash directly to the delivery driver or pay via handheld driver machine.'
  },
  {
    q: 'Is delivery really 100% free across England, Wales & Glasgow?',
    a: 'Yes! We offer 100% Free Standard Room-of-Choice Delivery across all mainland addresses in England, Wales, and the Greater Glasgow area. There are no hidden surcharges or mileage fees.'
  },
  {
    q: 'Do you offer furniture assembly services?',
    a: 'Yes, we offer professional home assembly for wardrobes, beds, and sofas. You can add assembly during checkout/order enquiry for a small flat fee (from £25–£79 depending on the complexity). Our trained technicians assemble the furniture in your room of choice and clear away all packaging materials.'
  },
  {
    q: 'What areas do you deliver to?',
    a: 'We deliver throughout England, Wales, and the Glasgow area in Scotland. If you live slightly outside these primary delivery zones, contact our team on 0800 123 4567 or via enquiry form, and we will confirm delivery options.'
  },
  {
    q: 'How long does delivery take?',
    a: 'Most in-stock products are delivered within 3 to 5 working days. Once your order is processed, our dispatch dispatch coordinator will call or SMS you to agree on a specific delivery date and 2-hour morning or afternoon window.'
  },
  {
    q: 'What guarantees come with iFurnish products?',
    a: 'All our Wardrobe Sets, Beds, and Sofas come with a minimum 5 to 10 Year Structural Guarantee. We use high-density timber, heavy-duty metal sliders, and premium reinforced frames built to last.'
  }
];
