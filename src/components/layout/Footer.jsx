import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-secondary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-2xl tracking-tight text-white block mb-2">
              Espacios<span className="text-accent">Inteligentes</span>
            </span>
            <p className="text-gray-400 text-sm">
              Soluciones inteligentes para espacios que importan.
            </p>
          </div>
          
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              <li><a href="#" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </nav>
          
          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-4">
            <div>
              <span className="block text-sm text-gray-400 mb-1">Escríbenos por WhatsApp</span>
              <a href="https://wa.me/524491807377" className="font-display font-bold text-accent hover:text-white transition-colors text-lg">
                449 180 7377
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61586394059551&rdid=W010G6VnC730lRLx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LuQ5GPo9V%2F#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group"
                aria-label="Síguenos en Facebook"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                  <Facebook className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Facebook</span>
              </a>

              <a 
                href="https://www.instagram.com/espaciosinteligentes.mx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group"
                aria-label="Síguenos en Instagram"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary text-center">
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Espacios Inteligentes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
