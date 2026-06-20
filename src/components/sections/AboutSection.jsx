import { Camera, LayoutDashboard, Clock, Eye, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const processSteps = [
    {
      icon: <Camera className="w-6 h-6 text-accent" />,
      title: "1. Envías fotos y medidas",
      description: "Te guiamos para compartir la información necesaria de tu espacio."
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-accent" />,
      title: "2. Analizamos tu distribución",
      description: "Revisamos medidas, uso del espacio, necesidades y posibles mejoras."
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "3. Recibes diagnóstico en 48h",
      description: "Te entregamos plano técnico PDF, lista de materiales y presupuesto base de obra."
    },
    {
      icon: <Eye className="w-6 h-6 text-accent" />,
      title: "4. Decides si avanzas a Diseño 3D",
      description: "Si quieres visualizar el resultado final, puedes cotizar el render fotorealista como segunda etapa."
    }
  ];

  const benefits = [
    "Planea antes de gastar.",
    "Reduce errores de distribución.",
    "Evita compras innecesarias.",
    "Obtén claridad técnica antes de iniciar obra.",
    "Recibe una base para cotizar con maestros locales.",
    "Decide con mayor seguridad.",
    "No necesitas visita física.",
    "Entrega en 48 horas por WhatsApp."
  ];

  return (
    <section id="proceso" className="py-20 bg-ivory">
      <div className="container-custom">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
            ¿Cómo funciona el diagnóstico online?
          </h2>
          <p className="text-lg text-secondary">
            Un proceso ágil, 100% online y sin complicaciones para darte claridad antes de tu obra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Timeline / Process Steps */}
          <div className="flex flex-col gap-8 relative">
            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gray-200 z-0"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-white shadow-md border-2 border-accent flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div className="pt-3">
                  <h3 className="font-display font-bold text-xl text-primary mb-2">{step.title}</h3>
                  <p className="text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Process Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/process_workspace.png" 
              alt="Mesa de trabajo profesional con planos" 
              className="w-full h-[500px] object-cover"
            />
          </div>

        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-14 border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-primary mb-4">Beneficios del Diagnóstico Online</h3>
            <p className="text-secondary">Conoce exactamente lo que necesitas antes de comprar un solo material.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary font-medium text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
