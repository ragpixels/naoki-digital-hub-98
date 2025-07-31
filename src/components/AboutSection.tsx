
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Clock, 
  TrendingUp,
  Lightbulb,
  Target,
  Zap,
  Heart
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: "50+", label: t('about.stats.clientesSatisfeitos') },
    { icon: Award, value: "100+", label: t('about.stats.projetosConcluidos') },
    { icon: Clock, value: "3+", label: t('about.stats.anosExperiencia') },
    { icon: TrendingUp, value: "500%", label: t('about.stats.roiMedio') }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t('about.valores.inovacao.title'),
      description: t('about.valores.inovacao.description')
    },
    {
      icon: Target,
      title: t('about.valores.focoResultados.title'),
      description: t('about.valores.focoResultados.description')
    },
    {
      icon: Zap,
      title: t('about.valores.agilidade.title'),
      description: t('about.valores.agilidade.description')
    },
    {
      icon: Heart,
      title: t('about.valores.relacionamento.title'),
      description: t('about.valores.relacionamento.description')
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", 
    "Google Cloud", "WordPress", "Shopify", "Google Ads", "Facebook Ads", 
    "Google Analytics", "SEO", "UX/UI Design", "Figma", "Adobe Creative Suite"
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-naoki-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - About Text */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t('about.historia.title')}</h3>
            <div className="space-y-4 text-gray-300">
              <p>{t('about.historia.p1')}</p>
              <p>{t('about.historia.p2')}</p>
              <p>{t('about.historia.p3')}</p>
            </div>

            <h3 className="text-2xl font-bold mb-6 mt-8 text-white">{t('about.missao.title')}</h3>
            <p className="text-gray-300">
              {t('about.missao.description')}
            </p>
          </div>

          {/* Right Column - Values */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t('about.valores.title')}</h3>
            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-naoki-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-white">{value.title}</h4>
                          <p className="text-gray-300">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technologies Carousel */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">{t('about.tecnologias.title')}</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_30s_linear_infinite] space-x-8">
              {/* First set of technologies */}
              {technologies.map((tech, index) => (
                <Badge 
                  key={`first-${index}`} 
                  variant="secondary" 
                  className="px-6 py-3 text-sm bg-gray-900/50 border-gray-800 text-gray-300 hover:bg-naoki-blue hover:text-white transition-colors whitespace-nowrap flex-shrink-0"
                >
                  {tech}
                </Badge>
              ))}
              {/* Duplicate set for seamless loop */}
              {technologies.map((tech, index) => (
                <Badge 
                  key={`second-${index}`} 
                  variant="secondary" 
                  className="px-6 py-3 text-sm bg-gray-900/50 border-gray-800 text-gray-300 hover:bg-naoki-blue hover:text-white transition-colors whitespace-nowrap flex-shrink-0"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
