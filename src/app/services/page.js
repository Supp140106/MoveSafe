import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            
            <Services />
            <Testimonials />
            <Footer />
        </main>
    );
}
