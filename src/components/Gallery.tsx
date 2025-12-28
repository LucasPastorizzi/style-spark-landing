import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

const products = [
  { id: 1, name: 'Blazer Linho Natural', price: 'R$ 459,00', image: product1, tag: 'Novo' },
  { id: 2, name: 'Vestido Algodão Branco', price: 'R$ 329,00', image: product2, tag: null },
  { id: 3, name: 'Casaco Lã Marinho', price: 'R$ 689,00', image: product3, tag: 'Best Seller' },
  { id: 4, name: 'Suéter Cashmere Creme', price: 'R$ 549,00', image: product4, tag: null },
  { id: 5, name: 'Calça Alfaiataria Preta', price: 'R$ 389,00', image: product5, tag: 'Novo' },
  { id: 6, name: 'Blusa Seda Champagne', price: 'R$ 419,00', image: product6, tag: null },
];

const Gallery = () => {
  return (
    <section id="colecao" className="py-20 md:py-28">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Nossa Coleção</h2>
          <p className="section-subtitle mx-auto">
            Peças cuidadosamente selecionadas para compor looks elegantes e versáteis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-product group"
            >
              <div className="relative overflow-hidden bg-secondary aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-4 left-4 right-4 bg-background text-foreground py-3 font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Comprar
                </motion.button>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2 text-foreground">{product.name}</h3>
                <p className="text-primary font-semibold text-lg">{product.price}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-outline inline-block">
            Ver Todos os Produtos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
