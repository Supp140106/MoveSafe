import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export const metadata = {
    title: "Our Services - House Shifting, Office Relocation & More",
    description: "Explore MoveSafe's comprehensive moving services: House Shifting, Office Relocation, Car & Bike Transportation, Warehousing, and more. Affordable rates with insurance coverage.",
    keywords: [
        "house shifting services",
        "office relocation services",
        "car transportation India",
        "bike transportation",
        "domestic relocation",
        "inter-city moving",
        "warehouse storage",
        "packing services",
        "loading unloading services",
    ],
    openGraph: {
        title: "MoveSafe Services - Complete Moving Solutions",
        description: "House shifting, office relocation, vehicle transportation & storage services. Get free quotes for your move!",
        url: "https://movesafepackers.com/services",
    },
    alternates: {
        canonical: "/services",
    },
};

// JSON-LD for Services Page
const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MoveSafe Moving Services",
    description: "Complete list of professional moving and relocation services",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            item: {
                "@type": "Service",
                name: "House Shifting (Local)",
                description: "Complete local household relocation with professional packing and moving",
                provider: { "@type": "Organization", name: "MoveSafe Packers & Movers" },
            },
        },
        {
            "@type": "ListItem",
            position: 2,
            item: {
                "@type": "Service",
                name: "Office Relocation",
                description: "Professional office and commercial moving with minimal downtime",
                provider: { "@type": "Organization", name: "MoveSafe Packers & Movers" },
            },
        },
        {
            "@type": "ListItem",
            position: 3,
            item: {
                "@type": "Service",
                name: "Inter-City Moving",
                description: "Safe long-distance relocation across cities in India",
                provider: { "@type": "Organization", name: "MoveSafe Packers & Movers" },
            },
        },
        {
            "@type": "ListItem",
            position: 4,
            item: {
                "@type": "Service",
                name: "Vehicle Transportation",
                description: "Car and bike transportation with full safety measures",
                provider: { "@type": "Organization", name: "MoveSafe Packers & Movers" },
            },
        },
    ],
};

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
            />
            <main className="min-h-screen bg-white">
                <Header />

                <Services />
                <Testimonials />
                <Footer />
            </main>
        </>
    );
}

