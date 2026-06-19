import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-ivory">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-beige/40 rounded-bl-[120px] -z-10 mix-blend-multiply"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-accent"></span>
              <span className="font-serif text-accent italic tracking-wide text-lg">Remodela con visión, no a ciegas.</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-primary leading-[1.05] mb-8">
              Transformamos espacios. <br />
              <span className="text-accent">Cuidamos lo que más valoras.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-xl">
              Visualizamos tu espacio antes de que inviertas tiempo y dinero, para ayudarte a tomar mejores decisiones en distribución, materiales, colores, acabados e iluminación.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/524491807377?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Espacios%20Inteligentes.%20Quiero%20mejorar%20un%20espacio%20de%20mi%20casa%20o%20negocio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-[15px]"
              >
                Agendar diagnóstico por WhatsApp
              </a>
              <a href="#servicios" className="btn-outline bg-white px-8 py-4 text-[15px] group">
                Ver servicios
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="relative z-10 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" 
                alt="Interior moderno y planificado" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-primary p-6 rounded-2xl shadow-xl max-w-xs border border-primary-light hidden sm:block">
              <p className="font-serif text-white italic text-lg leading-snug">
                "Certeza antes de invertir en tu próximo proyecto."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
