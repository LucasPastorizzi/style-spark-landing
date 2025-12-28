import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import StorePhotos from '@/components/StorePhotos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Carousel />
      <Gallery />
      <About />
      <StorePhotos />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
