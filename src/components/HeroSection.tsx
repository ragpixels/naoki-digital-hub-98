
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, TrendingUp, Target } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { language, t } = useTranslation();

  const handleWhatsApp = () => {
    const message = language === 'pt' 
      ? 'Olá! Gostaria de solicitar um orçamento.' 
      : 'Hello! I would like to request a quote.';
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-naoki-blue/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-naoki-blue/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-naoki-blue/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              {t('hero.title')}
              <span className="bg-naoki-gradient bg-clip-text text-transparent block">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-naoki-gradient hover:bg-naoki-gradient-dark text-white group"
                onClick={handleWhatsApp}
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-naoki-blue text-naoki-blue hover:bg-naoki-blue hover:text-white"
                onClick={scrollToServices}
              >
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
                alt="Desenvolvimento Web Moderno" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card rounded-lg shadow-lg p-4 animate-float border border-border">
              <Code className="h-8 w-8 text-naoki-blue mb-2" />
              <div className="text-sm font-semibold text-card-foreground">{t('hero.sitesProfissionais')}</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-lg shadow-lg p-4 animate-float border border-border" style={{ animationDelay: '1s' }}>
              <TrendingUp className="h-8 w-8 text-naoki-blue mb-2" />
              <div className="text-sm font-semibold text-card-foreground">{t('hero.funisAutomatizados')}</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card rounded-lg shadow-lg p-4 animate-float border border-border" style={{ animationDelay: '2s' }}>
              <Target className="h-8 w-8 text-naoki-blue mb-2" />
              <div className="text-sm font-semibold text-card-foreground">{t('hero.trafegoPago')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
