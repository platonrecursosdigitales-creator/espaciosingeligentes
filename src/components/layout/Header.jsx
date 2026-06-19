import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center z-50 relative">
          <img src="/images/logo.png" alt="Espacios Inteligentes" className="h-16 md:h-20 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <a href="#" className={`text-[15px] font-medium tracking-wide transition-colors ${isScrolled ? 'text-secondary hover:text-accent' : 'text-primary hover:text-accent'}`}>
                Inicio
              </a>
            </li>
            
            {/* Services Dropdown */}
            <li className="relative group">
              <button 
                className={`flex items-center gap-1 text-[15px] font-medium tracking-wide transition-colors ${isScrolled ? 'text-secondary hover:text-accent' : 'text-primary hover:text-accent'}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Servicios <ChevronDown size={16} className="mt-0.5" />
              </button>
              
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 w-72 transition-all duration-300 origin-top ${isServicesOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="p-2">
                    <a href="#servicios" className="block p-4 hover:bg-ivory rounded-lg transition-colors group/link">
                      <span className="font-display font-bold text-primary block mb-1 group-hover/link:text-accent transition-colors">Remodelación con visión</span>
                      <span className="text-sm text-secondary block leading-snug">Diagnóstico, visualización y render antes de invertir.</span>
                    </a>
                    <a href="#mantenimiento" className="block p-4 hover:bg-ivory rounded-lg transition-colors group/link mt-1">
                      <span className="font-display font-bold text-primary block mb-1 group-hover/link:text-accent transition-colors">Mantenimiento</span>
                      <span className="text-sm text-secondary block leading-snug">Plomería, electricidad y tranquilidad para tu hogar.</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#nosotros" className={`text-[15px] font-medium tracking-wide transition-colors ${isScrolled ? 'text-secondary hover:text-accent' : 'text-primary hover:text-accent'}`}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className={`text-[15px] font-medium tracking-wide transition-colors ${isScrolled ? 'text-secondary hover:text-accent' : 'text-primary hover:text-accent'}`}>
                Contacto
              </a>
            </li>
          </ul>
          <a href="#contacto" className="btn-primary py-2.5 px-6 text-sm">
            Agendar diagnóstico
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 relative p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="text-primary w-6 h-6" />
          ) : (
            <Menu className="text-primary w-6 h-6" />
          )}
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="px-6 py-20 overflow-y-auto h-full flex flex-col">
            <ul className="flex flex-col gap-6 mb-8">
              <li>
                <a href="#" className="text-2xl font-display font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
              </li>
              
              <li className="border-y border-gray-100 py-4">
                <button 
                  className="flex items-center justify-between w-full text-2xl font-display font-bold text-primary mb-4"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Servicios 
                  <ChevronDown size={24} className={`transition-transform ${isServicesOpen ? 'rotate-180 text-accent' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-accent/20">
                    <a href="#servicios" className="text-lg font-medium text-secondary hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>Remodelación con visión</a>
                    <a href="#mantenimiento" className="text-lg font-medium text-secondary hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>Mantenimiento y tranquilidad</a>
                  </div>
                </div>
              </li>
              
              <li>
                <a href="#nosotros" className="text-2xl font-display font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
              </li>
              <li>
                <a href="#contacto" className="text-2xl font-display font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
              </li>
            </ul>
            
            <div className="mt-auto pb-8">
              <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full text-center text-lg py-4">
                Agendar diagnóstico
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
