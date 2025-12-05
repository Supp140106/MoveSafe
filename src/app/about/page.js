import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';

export const metadata = {
    title: "About Us - Our Story & Mission",
    description: "Learn about MoveSafe Packers & Movers - India's trusted relocation company with 15+ years of experience. Discover our mission, values, and commitment to safe, reliable moving services.",
    keywords: ["about movesafe packers", "packers and movers company", "relocation company India", "trusted movers", "moving company history"],
    openGraph: {
        title: "About MoveSafe Packers & Movers - Our Story",
        description: "Discover why MoveSafe is India's most trusted moving company. 15+ years of experience, 500+ happy customers daily.",
        url: "https://movesafepackers.com/about",
    },
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-28 pb-2 bg-secondary-50 text-center">
                <h1 className="text-4xl font-bold text-black">About Us</h1>
                <p className="text-[#082f49] mt-2">Learn more about our journey and values</p>
            </div>
            <About />
            <WhyChooseUs />
            <Footer />
        </main>
    );
}

