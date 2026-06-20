import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappNumber = "524491807377";
  const whatsappMessage = "Hola Espacios Inteligentes. Quiero mi Diagnóstico Profesional de $990. Mi ciudad es:";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
            <li>
              <a href="#diagnostico" className={`text-[15px] font-medium tracking-wide transition-colors ${isScrolled ? 'text-secondary hover:text-accent' : 'text-primary hover:text-accent'}`}>
                Diagnóstico
              </a>
            </li>
            <li>
              <a href="#proceso" className={`text-[15px] font-medium tracking-wide transition-colors ${isScrolled ? 'text-secondary hover:text-accent' : 'text-primary hover:text-accent'}`}>
                Proceso
              </a>
            </li>
            <li>
              <a href="#contacto" className={`text-[15px] font-medium tracking-wide transition-colors ${isScrolled ? 'text-secondary hover:text-accent' : 'text-primary hover:text-accent'}`}>
                Contacto
              </a>
            </li>
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5 px-6 text-sm">
            Comprar Diagnóstico $990
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
              <li>
                <a href="#diagnostico" className="text-2xl font-display font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Diagnóstico</a>
              </li>
              <li>
                <a href="#proceso" className="text-2xl font-display font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Proceso</a>
              </li>
              <li>
                <a href="#contacto" className="text-2xl font-display font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
              </li>
            </ul>
            
            <div className="mt-auto pb-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full text-center text-lg py-4 block">
                Comprar Diagnóstico $990
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
