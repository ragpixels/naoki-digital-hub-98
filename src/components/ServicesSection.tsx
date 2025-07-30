
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, TrendingUp } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.criacaoSites.title'),
      description: t('services.criacaoSites.description'),
      features: [
        "Design responsivo e moderno",
        "Otimização para SEO",
        "Velocidade de carregamento",
        "Integração com sistemas"
      ],
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: t('services.maquinaDigital.title'),
      description: t('services.maquinaDigital.description'),
      features: [
        "Funis de alta conversão",
        "Automação de marketing",
        "Landing pages otimizadas",
        "Integração com CRM"
      ],
      color: "text-yellow-400"
    },
    {
      icon: TrendingUp,
      title: t('services.trafegoPago.title'),
      description: t('services.trafegoPago.description'),
      features: [
        "Campanhas Google Ads",
        "Facebook e Instagram Ads",
        "Otimização de ROI",
        "Relatórios detalhados"
      ],
      color: "text-green-400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('services.title')} <span className="bg-naoki-gradient bg-clip-text text-transparent">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-naoki-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-naoki-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
