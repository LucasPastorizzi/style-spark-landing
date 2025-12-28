import { motion } from 'framer-motion';
import store1 from '@/assets/store-interior.jpg';
import store2 from '@/assets/store-2.jpg';
import store3 from '@/assets/store-3.jpg';
import store4 from '@/assets/store-4.jpg';

const photos = [
  { image: store1, span: 'col-span-2 row-span-2' },
  { image: store2, span: 'col-span-1 row-span-1' },
  { image: store3, span: 'col-span-1 row-span-1' },
  { image: store4, span: 'col-span-2 row-span-1' },
];

const StorePhotos = () => {
  return (
    <section id="loja" className="py-20 md:py-28">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Nossa Loja</h2>
          <p className="section-subtitle mx-auto">
            Um espaço pensado para proporcionar uma experiência de compra única e agradável
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg group ${photo.span}`}
            >
              <img
                src={photo.image}
                alt={`Interior da loja ÉLAN - Foto ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Store Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-card p-8 md:p-12 rounded-lg text-center"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">
            Visite Nossa Loja Física
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Venha conhecer nossa loja e experimentar nossas peças pessoalmente. 
            Nossa equipe está pronta para ajudar você a encontrar o look perfeito.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div>
              <div className="font-semibold text-foreground mb-1">Endereço</div>
              <div className="text-muted-foreground">Rua das Flores, 123 - Centro</div>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Horário</div>
              <div className="text-muted-foreground">Seg-Sáb: 10h - 20h</div>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Telefone</div>
              <div className="text-muted-foreground">(11) 99999-9999</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorePhotos;
