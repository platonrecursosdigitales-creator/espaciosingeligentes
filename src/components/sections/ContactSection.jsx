export default function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-primary text-white text-center">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">¿Listo para transformar tu espacio con inteligencia?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Hagamos realidad el espacio que imaginas. Cuéntanos qué quieres mejorar en tu casa o negocio y te ayudamos a definir el primer paso.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/524491807377?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Espacios%20Inteligentes.%20Quiero%20mejorar%20un%20espacio%20de%20mi%20casa%20o%20negocio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-4 w-full sm:w-auto text-center"
            >
              Contactarnos por WhatsApp
            </a>
            <a 
              href="https://wa.me/524491807377?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20membres%C3%ADa%20de%20mantenimiento%20y%20tranquilidad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 w-full sm:w-auto bg-primary-light border border-secondary text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Quiero información sobre mantenimiento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
