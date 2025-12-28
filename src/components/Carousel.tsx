import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carousel1 from '@/assets/carousel-1.jpg';
import carousel2 from '@/assets/carousel-2.jpg';
import heroImage from '@/assets/hero-fashion.jpg';

const slides = [
  {
    image: carousel1,
    title: 'Nova Coleção Primavera',
    subtitle: 'Cores vibrantes e tecidos leves para a nova estação',
    cta: 'Explorar',
  },
  {
    image: carousel2,
    title: 'Promoção Especial',
    subtitle: 'Até 40% de desconto em peças selecionadas',
    cta: 'Aproveitar',
  },
  {
    image: heroImage,
    title: 'Peças Mais Vendidas',
    subtitle: 'Descubra os favoritos de nossas clientes',
    cta: 'Ver Agora',
  },
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-section mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title mb-4">Destaques</h2>
          <p className="section-subtitle mx-auto">
            Confira nossas coleções em destaque e promoções especiais
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-[500px] md:h-[600px] mx-4">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
                    <h3 className="text-3xl md:text-4xl font-serif font-medium text-background mb-3">
                      {slide.title}
                    </h3>
                    <p className="text-background/80 text-lg mb-6 max-w-xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <button className="bg-background text-foreground px-8 py-3 font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'w-8 bg-primary'
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Carousel;
