import { ArrowRight, Wrench, Zap, Droplets, Package } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Servicios inteligentes para transformar y cuidar tu espacio.
          </h2>
          <p className="text-lg md:text-xl text-secondary">
            Desde la planeación de una remodelación hasta el mantenimiento de tu hogar o negocio, te ayudamos a tomar decisiones con mayor claridad y respaldo profesional.
          </p>
        </div>

        {/* Remodelación con visión */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80" 
                  alt="Proyecto de remodelación de interiores" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-ivory p-6 md:p-8 rounded-xl shadow-xl hidden md:block max-w-xs border border-beige">
                <p className="font-serif italic text-accent text-xl leading-snug">
                  "Planeamos contigo antes de ejecutar, para cuidar tu inversión."
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold text-accent uppercase tracking-widest mb-4 block">Servicio Principal</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Remodelación con visión.</h3>
              
              <div className="prose prose-lg text-secondary mb-10">
                <p>
                  Antes de remodelar, analizamos tu espacio, tus necesidades y las posibilidades reales del proyecto. Te ayudamos a visualizar distribución, materiales, acabados e iluminación para que puedas decidir con mayor claridad antes de invertir.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {['Diagnóstico del espacio', 'Propuesta funcional', 'Distribución', 'Materiales y acabados', 'Colores e iluminación', 'Render personalizado'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <span className="text-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://wa.me/524491807377?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Espacios%20Inteligentes.%20Quiero%20mejorar%20un%20espacio%20de%20mi%20casa%20o%20negocio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display font-bold text-primary hover:text-accent transition-colors pb-1 border-b-2 border-primary hover:border-accent"
              >
                Quiero visualizar mi espacio <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Mantenimiento y tranquilidad */}
        <div id="mantenimiento" className="pt-24 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-accent uppercase tracking-widest mb-4 block">Servicio Complementario</span>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">Mantenimiento profesional para tu hogar o negocio.</h3>
            <p className="text-lg text-secondary">
              Soluciones técnicas organizadas para atender imprevistos, reparaciones y mantenimiento preventivo con personal capacitado y seguimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            
            {/* Imágenes Editoriales */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src="/images/maintenance-professional.png" 
                  alt="Técnico profesional realizando mantenimiento" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-6 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
                <img 
                  src="/images/technical-detail.png" 
                  alt="Herramientas profesionales de mantenimiento" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Texto y Servicios */}
            <div className="lg:col-span-7 md:pl-8 lg:pl-12">
              <div className="prose prose-lg text-secondary mb-12">
                <p>
                  Cuando algo falla, necesitas una respuesta clara y confiable. En Espacios Inteligentes atendemos necesidades comunes de plomería, electricidad, acabados, reparaciones generales y diagnóstico de electrodomésticos con un enfoque profesional.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                {[
                  { icon: <Droplets className="w-5 h-5" />, title: "Plomería y fontanería", items: ["Fugas menores", "Grifería y WC", "Destascos básicos"] },
                  { icon: <Zap className="w-5 h-5" />, title: "Electricidad y clima", items: ["Fallas eléctricas menores", "Cambios de apagadores", "Revisión preventiva A/C"] },
                  { icon: <Wrench className="w-5 h-5" />, title: "Mantenimiento general", items: ["Reparaciones menores", "Pintura y acabados", "Tablaroca"] },
                  { icon: <Package className="w-5 h-5" />, title: "Diagnóstico", items: ["Lavadoras", "Refrigeradores", "Estufas y hornos"] }
                ].map((service, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center text-primary border border-beige">
                        {service.icon}
                      </div>
                      <h4 className="font-bold text-primary font-display text-lg">{service.title}</h4>
                    </div>
                    <ul className="space-y-2 pl-[52px]">
                      {service.items.map((item, i) => (
                        <li key={i} className="text-sm text-secondary flex items-center gap-2">
                           <span className="w-1 h-1 rounded-full bg-accent"></span>
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-ivory p-6 rounded-xl border border-beige flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-primary font-medium text-sm md:text-base mb-0 italic font-serif flex-1">
                  "Un solo contacto para cuidar tu espacio con mayor orden, rapidez y tranquilidad."
                </p>
                <a 
                  href="https://wa.me/524491807377?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20membres%C3%ADa%20de%20mantenimiento%20y%20tranquilidad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-6 py-3 whitespace-nowrap shadow-sm hover:shadow-md transition-all"
                >
                  Solicitar información
                </a>
              </div>
            </div>
            
          </div>
          
          {/* Franja de beneficios sobria */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-100 mt-16 md:mt-24">
             {[
               "Personal capacitado y verificado",
               "Seguimiento a cada solicitud",
               "Soluciones para casa o negocio",
               "Cuidado de tu patrimonio"
             ].map((beneficio, idx) => (
               <div key={idx} className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                 <span className="text-sm text-secondary font-medium">{beneficio}</span>
               </div>
             ))}
          </div>

        </div>

      </div>
    </section>
  );
}
