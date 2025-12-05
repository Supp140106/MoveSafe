import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';

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
