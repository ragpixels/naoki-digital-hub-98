
import { MessageCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const FloatingWhatsAppButton = () => {
  const { language } = useTranslation();

  const handleWhatsApp = () => {
    const message = language === 'pt' 
      ? 'Olá! Gostaria de falar com um especialista.' 
      : 'Hello! I would like to talk to a specialist.';
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse-slow"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {language === 'pt' ? 'Fale conosco' : 'Contact us'}
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-0 h-0 border-l-4 border-l-gray-900 border-y-4 border-y-transparent"></div>
      </div>
    </button>
  );
};

export default FloatingWhatsAppButton;
