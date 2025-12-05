import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata = {
    title: "Contact Us - Get Free Moving Quote",
    description: "Contact MoveSafe Packers & Movers for free moving quotes. Call us or fill our form for house shifting, office relocation, and vehicle transportation services across India.",
    keywords: [
        "contact packers and movers",
        "free moving quote",
        "packers movers phone number",
        "book relocation service",
        "moving estimate",
    ],
    openGraph: {
        title: "Contact MoveSafe - Get Your Free Moving Quote",
        description: "Reach out for affordable and reliable moving services. Free quotes available 24/7!",
        url: "https://movesafepackers.com/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

// JSON-LD for Contact Page
const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MoveSafe Packers & Movers",
    description: "Get in touch with MoveSafe for all your relocation needs",
    mainEntity: {
        "@type": "Organization",
        name: "MoveSafe Packers & Movers",
        telephone: "+91-9876543210",
        email: "info@movesafepackers.com",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9876543210",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"],
            areaServed: "IN",
        },
    },
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />
            <main className="min-h-screen bg-white">
                <Header />
                <div className="pt-28 pb-2 bg-secondary-50 text-center">
                    <h1 className="text-4xl font-bold text-black">Contact Us</h1>
                    <p className="text-[#082f49] mt-2">Get a free quote for your move today</p>
                </div>
                <Contact />
                <Footer />
            </main>
        </>
    );
}

