export default function AboutSection() {
  return (
    <section id="nosotros" className="section-padding bg-warmWhite">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-sm font-bold text-accent uppercase tracking-widest mb-4 block">Nuestro Enfoque</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              Certeza y profesionalismo en cada metro cuadrado.
            </h2>
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                En Espacios Inteligentes ayudamos a las personas a tomar mejores decisiones sobre sus espacios antes de invertir. Integramos diagnóstico, planeación arquitectónica y soluciones técnicas integrales.
              </p>
              <p>
                Entendemos que iniciar una remodelación o coordinar el mantenimiento puede ser complejo y desgastante. Por eso, funcionamos como tu respaldo profesional: te brindamos la claridad visual y la tranquilidad operativa que requieres.
              </p>
            </div>
            
            <div className="mt-10 border-l-4 border-accent pl-6 py-2">
               <span className="font-serif italic text-primary text-2xl md:text-3xl block leading-snug">
                 "Planeamos contigo antes de ejecutar, para reducir errores, cuidar tu inversión y lograr espacios más funcionales."
               </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" 
                 alt="Interiorismo y arquitectura" 
                 className="w-full h-full object-cover" 
               />
             </div>
             <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-12">
               <img 
                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                 alt="Detalles de remodelación" 
                 className="w-full h-full object-cover" 
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
