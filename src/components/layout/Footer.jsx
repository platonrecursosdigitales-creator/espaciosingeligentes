const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 border-t border-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Columna 1: Marca y Redes */}
          <div className="lg:col-span-4 text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <img src="/images/logo.png" alt="Espacios Inteligentes Logo" className="h-16 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm mb-8 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Soluciones integrales para espacios que importan. Diagnóstico, visualización y mantenimiento experto.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://www.facebook.com/profile.php?id=61586394059551&rdid=W010G6VnC730lRLx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LuQ5GPo9V%2F#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group"
                aria-label="Síguenos en Facebook"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                  <FacebookIcon className="w-5 h-5" />
                </div>
              </a>

              <a 
                href="https://www.instagram.com/espaciosinteligentes.mx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group"
                aria-label="Síguenos en Instagram"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                  <InstagramIcon className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Columna 2: Navegación */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="font-bold text-white mb-6">Navegación</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Contacto */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="font-bold text-white mb-6">Contacto</h4>
            <span className="block text-sm text-gray-400 mb-2">Escríbenos por WhatsApp</span>
            <a href="https://wa.me/524491807377" className="font-display font-bold text-accent hover:text-white transition-colors text-xl block mb-6">
              449 180 7377
            </a>
          </div>

          {/* Columna 4: Facebook Widget */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 p-2 rounded-xl border border-white/10 w-fit mx-auto md:mx-0 overflow-hidden">
              <div 
                className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=61586394059551"
                data-width="280"
                data-hide-cover="false"
                data-show-facepile="false"
                data-adapt-container-width="true"
              ></div>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-secondary/50 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Espacios Inteligentes. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Diseño corporativo
          </p>
        </div>
      </div>
    </footer>
  );
}
