import "./globals.css";

export const metadata = {
  title: "MoveSafePackers - Professional Packers and Movers Services in India",
  description: "Trusted packers and movers offering house shifting, office relocation, car & bike transportation across India. Safe, reliable, and affordable moving solutions with insurance coverage.",
  keywords: "packers and movers, house shifting, office relocation, car transportation, bike transportation, domestic relocation, moving services, movers in India",
  authors: [{ name: "MoveSafePackers" }],
  openGraph: {
    title: "MoveSafePackers - Professional Packers and Movers Services",
    description: "Your trusted partner for safe and secure relocation services across India",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
