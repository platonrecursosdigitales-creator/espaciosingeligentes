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
          
          <div className="text-center md:text-right">
            <span className="block text-sm text-gray-400 mb-1">Escríbenos por WhatsApp</span>
            <a href="https://wa.me/524491807377" className="font-display font-bold text-accent hover:text-white transition-colors text-lg">
              449 180 7377
            </a>
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
