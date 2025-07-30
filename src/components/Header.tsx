
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    const message = language === 'pt' 
      ? 'Olá! Gostaria de falar com um especialista.' 
      : 'Hello! I would like to talk to a specialist.';
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleLanguageChange = (newLanguage: 'pt' | 'en') => {
    changeLanguage(newLanguage);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-naoki-gradient bg-clip-text text-transparent">
              NAOKI
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-naoki-blue transition-colors"
            >
              {t('header.inicio')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-naoki-blue transition-colors"
            >
              {t('header.servicos')}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-naoki-blue transition-colors"
            >
              {t('header.portfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-naoki-blue transition-colors"
            >
              {t('header.sobre')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-naoki-blue transition-colors"
            >
              {t('header.contato')}
            </button>
            
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex items-center space-x-1 text-gray-300 hover:text-naoki-blue transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language === 'pt' ? 'PT' : 'EN'}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('pt')}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white"
                >
                  <span className="flex items-center space-x-2">
                    <span>🇧🇷</span>
                    <span>Português</span>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('en')}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white"
                >
                  <span className="flex items-center space-x-2">
                    <span>🇺🇸</span>
                    <span>English</span>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              onClick={handleWhatsApp}
              className="bg-naoki-gradient hover:bg-naoki-gradient-dark text-white"
            >
              {t('header.faleEspecialista')}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-naoki-blue transition-colors text-left"
              >
                {t('header.inicio')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-naoki-blue transition-colors text-left"
              >
                {t('header.servicos')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-naoki-blue transition-colors text-left"
              >
                {t('header.portfolio')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-naoki-blue transition-colors text-left"
              >
                {t('header.sobre')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-naoki-blue transition-colors text-left"
              >
                {t('header.contato')}
              </button>
              
              {/* Language Dropdown Mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="flex items-center space-x-1 text-gray-300 hover:text-naoki-blue transition-colors justify-start"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{language === 'pt' ? 'Português' : 'English'}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-gray-900 border-gray-700">
                  <DropdownMenuItem 
                    onClick={() => handleLanguageChange('pt')}
                    className="text-gray-300 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white"
                  >
                    <span className="flex items-center space-x-2">
                      <span>🇧🇷</span>
                      <span>Português</span>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleLanguageChange('en')}
                    className="text-gray-300 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white"
                  >
                    <span className="flex items-center space-x-2">
                      <span>🇺🇸</span>
                      <span>English</span>
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                onClick={handleWhatsApp}
                className="bg-naoki-gradient hover:bg-naoki-gradient-dark text-white w-fit"
              >
                {t('header.faleEspecialista')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
