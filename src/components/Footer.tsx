
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  MessageCircle
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = 'Olá! Gostaria de falar com um especialista.';
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  // TikTok icon component (since it's not in lucide-react)
  const TikTokIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-3xl font-bold bg-naoki-gradient bg-clip-text text-transparent mb-4">
                NAOKI
              </div>
              <p className="text-gray-400 mb-6">
                {t('footer.description')}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-naoki-blue" />
                  <span className="text-gray-400">contato@naoki.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-naoki-blue" />
                  <span className="text-gray-400">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-naoki-blue" />
                  <span className="text-gray-400">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.linksRapidos')}</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('#home')}
                    className="text-gray-400 hover:text-naoki-blue transition-colors"
                  >
                    {t('header.inicio')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#services')}
                    className="text-gray-400 hover:text-naoki-blue transition-colors"
                  >
                    {t('header.servicos')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#about')}
                    className="text-gray-400 hover:text-naoki-blue transition-colors"
                  >
                    {t('header.sobre')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#contact')}
                    className="text-gray-400 hover:text-naoki-blue transition-colors"
                  >
                    {t('header.contato')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.redesSociais')}</h4>
              <div className="flex space-x-4 mb-6">
                <button 
                  onClick={handleWhatsApp}
                  className="w-10 h-10 bg-naoki-blue hover:bg-naoki-blue-dark rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
                <a href="#" className="w-10 h-10 bg-naoki-blue hover:bg-naoki-blue-dark rounded-full flex items-center justify-center text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-naoki-blue hover:bg-naoki-blue-dark rounded-full flex items-center justify-center text-white transition-colors">
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} NAOKI. {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-naoki-blue transition-colors">{t('footer.politicaPrivacidade')}</a>
              <a href="#" className="hover:text-naoki-blue transition-colors">{t('footer.termosUso')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
