import { CheckCircle2, Lock } from 'lucide-react';

export default function ServicesSection() {
  const whatsappNumber = "524491807377";
  const whatsappMessage = "Hola Espacios Inteligentes. Quiero mi Diagnóstico Profesional de $990. Mi ciudad es:";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="diagnostico" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
            Comienza tu proyecto con el pie derecho
          </h2>
          <p className="text-lg text-secondary">
            El flujo comercial correcto en dos etapas. Primero planificamos técnicamente, luego visualizamos el resultado final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20">
          
          {/* Card 1: Diagnóstico Profesional */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-accent p-8 md:p-10 relative flex flex-col h-full transform transition-transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Paso 1 - Obligatorio
            </div>
            
            <h3 className="font-display font-bold text-2xl text-primary mb-2 text-center">Diagnóstico Profesional Online</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-primary">$990</span>
              <span className="text-secondary ml-1">MXN</span>
            </div>
            
            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary font-medium">Análisis de distribución con tus medidas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary font-medium">Lista de materiales con costos reales.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary font-medium">Presupuesto base de obra.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary font-medium">Plano técnico PDF.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary font-medium">Entrega en 48 horas por WhatsApp.</span>
              </li>
              <li className="flex items-start gap-3 opacity-70">
                <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 line-through">No incluye visitas físicas.</span>
              </li>
            </ul>
            
            <div className="bg-ivory p-4 rounded-lg mb-8 text-sm text-secondary italic">
              "No incluye visitas, diseño 3D, render, selección de muebles ni compras. El diagnóstico es el análisis técnico para planear correctamente la obra."
            </div>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center text-lg py-4">
              Comprar Diagnóstico $990
            </a>
          </div>
          
          {/* Card 2: Diseño 3D + Render */}
          <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 relative flex flex-col h-full opacity-90">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Paso 2 - Opcional
            </div>
            
            <h3 className="font-display font-bold text-2xl text-gray-600 mb-2 text-center">Diseño 3D + Render Fotorealista</h3>
            <div className="text-center mb-6">
              <span className="text-sm font-bold text-gray-500 uppercase">Desde</span><br/>
              <span className="text-3xl font-bold text-gray-600">$3,500</span>
              <span className="text-gray-500 ml-1">MXN / según m²</span>
            </div>
            
            <div className="rounded-xl overflow-hidden mb-6 border border-gray-200">
                <img src="/images/render_interior.png" alt="Render Fotorealista" className="w-full h-40 object-cover grayscale opacity-80" />
            </div>

            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium">Render fotorealista.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium">2 vistas por área.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium">Paleta de colores y acabados.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium font-bold">Se cotiza después del diagnóstico.</span>
              </li>
            </ul>
            
            <button disabled className="bg-gray-300 text-gray-500 font-bold w-full text-center text-lg py-4 rounded-lg cursor-not-allowed flex justify-center items-center gap-2">
              <Lock className="w-5 h-5" />
              Disponible al completar Diagnóstico
            </button>
          </div>

        </div>

        {/* Cintillo de Confianza */}
        <div className="max-w-4xl mx-auto bg-primary text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 text-accent">¿Cómo funciona si estoy en otra ciudad?</h3>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            "Tú nos mandas fotos y medidas con nuestra guía fácil. Nosotros diseñamos. Tú construyes con cualquier maestro local."
          </p>
        </div>

      </div>
    </section>
  );
}
