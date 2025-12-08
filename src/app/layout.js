import "./globals.css";

export const metadata = {
  // Basic Meta Tags
  title: {
    default: "MoveSafe Packers & Movers Mumbai | Send Packages & Parcels from Mumbai to India",
    template: "%s | MoveSafe Packers & Movers Mumbai",
  },
  description:
    "MoveSafe Packers & Movers Mumbai - The best courier and package delivery service in Mumbai. Send parcels, household goods, and vehicles from Mumbai to anywhere in India. Safe, fast, and affordable delivery.",
  keywords: [
    "package delivery Mumbai",
    "send packages from Mumbai",
    "parcel service Mumbai",
    "courier service Mumbai",
    "packers and movers Mumbai",
    "movers and packers near me",
    "Mumbai to India courier",
    "house shifting services Mumbai",
    "home relocation Mumbai",
    "send household items from Mumbai",
    "luggage delivery Mumbai",
    "bike transport Mumbai",
    "car transport Mumbai",
    "best packers and movers Mumbai",
    "cheap courier service Mumbai",
    "reliable parcel delivery",
    "fastest courier Mumbai",
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
    url: "https://Movesafepacker.com/",
    siteName: "MoveSafe Packers & Movers Mumbai",
    title: "Best Package Delivery & Movers in Mumbai | MoveSafe",
    description:
      "Looking to send packages or shift house from Mumbai? MoveSafe offers India's most trusted parcel delivery and relocation services. From Colaba to Borivali, we cover all of Mumbai.",
    images: [
      {
        url: "/images/packing.webp",
        width: 1200,
        height: 630,
        alt: "MoveSafe Mumbai - Package Delivery and Relocation Services",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Send Packages from Mumbai to Anywhere in India | MoveSafe",
    description:
      "Reliable package delivery and packers & movers service in Mumbai. We pick up from your doorstep in Mumbai and deliver across India.",
    images: ["/og-image.png"],
    creator: "@Movesafepacker",
  },

  // Verification (add your IDs when available)
  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Canonical & Alternates
  metadataBase: new URL("https://Movesafepacker.com"),
  alternates: {
    canonical: "/",
  },

  // Category
  category: "Logistics and Courier Services",

  // Other SEO Tags
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
    "format-detection": "telephone=yes",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "MoveSafe Packers & Movers Mumbai",
  description:
    "Leading packers and movers and package delivery service based in Mumbai. We specialize in sending parcels, household goods, and vehicles from Mumbai to all over India.",
  url: "https://Movesafepacker.com",
  logo: "https://Movesafepacker.com/logo.png",
  image: "https://Movesafepacker.com/og-image.png",
  telephone: "+91-8059677080",
  email: "info@Movesafepacker.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andheri East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400069",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.0760",
    longitude: "72.8777",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Mumbai",
    },
    {
      "@type": "City",
      name: "Navi Mumbai",
    },
    {
      "@type": "City",
      name: "Thane",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://www.facebook.com/Movesafepacker",
    "https://www.instagram.com/Movesafepacker",
    "https://twitter.com/Movesafepacker",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1250",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving & Delivery Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Package Delivery",
          description: "Door-to-door parcel and package delivery from Mumbai to anywhere in India",
        },
      },
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
          name: "Vehicle Transportation",
          description: "Safe car and bike transportation services",
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

