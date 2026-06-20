import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "524491807377";
  const whatsappMessage = "Hola Espacios Inteligentes. Quiero mi Diagnóstico Profesional de $990. Mi ciudad es:";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-ivory">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-10 hidden md:block"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Válido para los primeros 20 proyectos o hasta agotar agenda
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-6 tracking-tight">
              Remodela sin sorpresas: <br/>
              <span className="text-accent italic font-medium">Diagnóstico + Diseño 3D Online</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed font-medium">
              Tú nos mandas fotos y medidas. Te entregamos plano, presupuesto y diagnóstico profesional en 48 horas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center md:justify-start">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group text-lg px-8 py-4">
                Comprar Diagnóstico $990
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-400 line-through">Precio regular: $1,800 MXN</span>
                <span className="text-primary font-bold">Precio lanzamiento: $990 MXN</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 text-secondary text-sm md:text-base border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span><strong className="text-primary">Diseño 3D y render fotorealista</strong> disponible al terminar. Inversión desde $3,500 MXN según m².</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 w-full max-w-lg md:max-w-none relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10"></div>
              <img 
                src="/images/hero_remodel.png" 
                alt="Diagnóstico Profesional para Remodelación" 
                className="w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 md:p-6 rounded-xl shadow-xl z-20 border border-gray-100 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">48h</span>
                </div>
                <div>
                  <p className="font-display font-bold text-primary">Entrega Rápida</p>
                  <p className="text-sm text-secondary">Vía WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
