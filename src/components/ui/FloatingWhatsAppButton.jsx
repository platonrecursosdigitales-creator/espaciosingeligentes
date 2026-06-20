import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton = () => {
  const whatsappNumber = "524491807377";
  const whatsappMessage = "Hola Espacios Inteligentes. Quiero mi Diagnóstico Profesional de $990. Mi ciudad es:";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors duration-300 flex items-center justify-center group"
      aria-label="Contáctanos por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100 pl-0 group-hover:pl-3 font-medium">
        Diagnóstico $990
      </span>
    </a>
  );
};

export default FloatingWhatsAppButton;
