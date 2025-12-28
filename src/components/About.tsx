import { motion } from 'framer-motion';
import aboutImage from '@/assets/about-founder.jpg';

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-secondary/30">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Nossa História
            </span>
            <h2 className="section-title mb-6">
              Onde a elegância{' '}
              <span className="italic">encontra</span> a autenticidade
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Fundada em 2015, a ÉLAN nasceu do sonho de criar moda que transcende 
                tendências passageiras. Acreditamos que cada mulher merece peças que 
                contem sua história com elegância e sofisticação.
              </p>
              <p>
                Nossa curadoria é feita com carinho, selecionando tecidos nobres e 
                designs atemporais que valorizam a feminilidade em todas as suas formas. 
                Cada peça é pensada para ser versátil, durável e absolutamente especial.
              </p>
              <p>
                Mais do que uma loja, somos um espaço onde mulheres encontram não apenas 
                roupas, mas confiança, autoexpressão e a certeza de estarem vestindo o 
                melhor de si mesmas.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-serif font-semibold text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Anos de História</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-semibold text-primary">5k+</div>
                <div className="text-sm text-muted-foreground mt-1">Clientes Felizes</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-semibold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Qualidade Premium</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="Fundadora da ÉLAN"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 md:p-8 rounded-lg max-w-xs">
                <p className="font-serif text-lg italic">
                  "Moda é sobre se sentir bem consigo mesma."
                </p>
                <p className="text-sm mt-2 opacity-90">— Maria Clara, Fundadora</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
