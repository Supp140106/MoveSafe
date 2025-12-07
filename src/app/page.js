import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Contact from '@/components/Contact';
import TrustBar from '@/components/TrustBar';
import ImageSection from '@/components/ImageSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBar />
      <section id="services-section">
        <Services />
      </section>

      {/* New Image Section - Visual Break */}
      <ImageSection
        imageSrc="/images/delivery-promise.webp"
        subtitle="Why Choose Us"
        title="We Deliver Promises, Not Just Packages."
        description="With over 15 years of experience and a network covering 19,000+ pin codes, MoveSafe is India's most trusted logistics partner. We combine technology with human expertise to ensure your goods reach safely and on time."
      />

      <WhyChooseUs />

      {/* Another Visual Section - Reversed */}
      <ImageSection
        imageSrc="/images/indian-fleet.webp"
        subtitle="Our Fleet"
        title="Modern Fleet for Safe Transportation"
        description="Our dedicated fleet of 500+ GPS-enabled trucks ensures real-time tracking and secure transportation of your valuable belongings. From small tempos to large containers, we have the right vehicle for every move."
        reversed={true}
      />

      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
