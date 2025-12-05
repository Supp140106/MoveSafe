import "./globals.css";

export const metadata = {
  // Basic Meta Tags
  title: {
    default: "MoveSafe Packers & Movers | Trusted Relocation Services in India",
    template: "%s | MoveSafe Packers & Movers",
  },
  description:
    "MoveSafe Packers & Movers - India's trusted packers and movers offering house shifting, office relocation, car & bike transportation services. Safe, reliable, and affordable moving solutions with full insurance coverage. Get free quotes now!",
  keywords: [
    "packers and movers",
    "packers and movers near me",
    "house shifting services",
    "home relocation",
    "office relocation services",
    "car transportation",
    "bike transportation",
    "domestic relocation",
    "moving services India",
    "best packers and movers",
    "affordable movers",
    "safe packers",
    "professional movers",
    "interstate moving",
    "local shifting",
    "warehouse storage",
    "packing services",
  ],
  authors: [{ name: "MoveSafe Packers & Movers" }],
  creator: "MoveSafe Packers & Movers",
  publisher: "MoveSafe Packers & Movers",

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph Tags
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://movesafepackers.com/",
    siteName: "MoveSafe Packers & Movers",
    title: "MoveSafe Packers & Movers | Trusted Relocation Services in India",
    description:
      "India's most trusted packers and movers. Safe, reliable & affordable house shifting, office relocation, and vehicle transportation with insurance coverage.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MoveSafe Packers & Movers - Professional Relocation Services",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MoveSafe Packers & Movers | Trusted Relocation Services",
    description:
      "Professional packers and movers offering safe & affordable house shifting, office relocation, and vehicle transportation across India.",
    images: ["/og-image.png"],
    creator: "@movesafepackers",
  },

  // Verification (add your IDs when available)
  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Canonical & Alternates
  metadataBase: new URL("https://movesafepackers.com"),
  alternates: {
    canonical: "/",
  },

  // Category
  category: "Packers and Movers",

  // Other SEO Tags
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "format-detection": "telephone=yes",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "MoveSafe Packers & Movers",
  description:
    "Professional packers and movers offering house shifting, office relocation, car & bike transportation services across India with insurance coverage.",
  url: "https://movesafepackers.com",
  logo: "https://movesafepackers.com/logo.png",
  image: "https://movesafepackers.com/og-image.png",
  telephone: "+91-9876543210",
  email: "info@movesafepackers.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Business Address",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "000000",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "20.5937",
    longitude: "78.9629",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/movesafepackers",
    "https://www.instagram.com/movesafepackers",
    "https://twitter.com/movesafepackers",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "House Shifting",
          description: "Complete household relocation with packing, loading, and unpacking services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Office Relocation",
          description: "Professional office and commercial moving services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Transportation",
          description: "Safe and secure car transportation across India",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bike Transportation",
          description: "Two-wheeler transportation with full safety measures",
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

