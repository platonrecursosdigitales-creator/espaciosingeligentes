import { ArrowRight, Phone } from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = "524491807377";
  const whatsappMessage = "Hola Espacios Inteligentes. Quiero mi Diagnóstico Profesional de $990. Mi ciudad es:";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contacto" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Comienza tu diagnóstico profesional online.
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Mándanos fotos y medidas de tu espacio. Te entregamos plano, presupuesto base y diagnóstico profesional en 48 horas por WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4 w-full sm:w-auto hover:bg-white hover:text-primary transition-colors"
            >
              Comprar Diagnóstico $990
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-6 py-4 rounded-full border border-white/10">
              <Phone className="w-5 h-5 text-accent" />
              <span className="font-medium text-lg">WhatsApp: 449 180 7377</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
