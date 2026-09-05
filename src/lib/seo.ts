import { Product } from '../types';

export const generateProductSchema = (product: Product) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.description,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'iFurnish',
    },
    offers: {
      '@type': 'Offer',
      url: `https://ifurnish.co.uk/product/${product.slug}`,
      priceCurrency: 'GBP',
      price: product.salePrice || product.price,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'iFurnish UK',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'GBP',
        },
        shippingDestination: [
          {
            '@type': 'DefinedRegion',
            addressCountry: 'GB',
            addressRegion: ['England', 'Wales', 'Glasgow'],
          },
        ],
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 2,
            maxValue: 5,
            unitCode: 'DAY',
          },
        },
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
      bestRating: '5',
      worstRating: '1',
    },
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: 'iFurnish UK',
    url: 'https://ifurnish.co.uk',
    logo: 'https://ifurnish.co.uk/logo.png',
    description: 'Premium UK online furniture retailer specializing in Wardrobe Sets, Beds, and Sofas with Free Delivery and Cash on Delivery across England, Wales & Glasgow area.',
    telephone: '0800-123-4567',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 Furniture Way, Express Park',
      addressLocality: 'Manchester',
      postalCode: 'M1 2WD',
      addressCountry: 'GB',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    areaServed: ['England', 'Wales', 'Glasgow'],
    paymentAccepted: 'Cash on Delivery',
  };
};

export const updateMetaTags = (title: string, description: string, url = 'https://ifurnish.co.uk') => {
  document.title = `${title} | iFurnish UK`;
  
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  }
};
