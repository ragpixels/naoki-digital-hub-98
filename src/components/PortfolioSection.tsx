
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

const PortfolioSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "E-commerce Fashion",
      category: "Criação de Site", 
      description: "Loja online completa com sistema de pagamento integrado e painel administrativo",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      tags: ["React", "E-commerce", "SEO"],
      metrics: {
        conversion: "+150% conversões",
        traffic: "+300% tráfego",
        revenue: "+250% receita"
      }
    },
    {
      title: "Clínica Médica",
      category: "Marketing Digital",
      description: "Estratégia completa de marketing digital resultando em 400% mais agendamentos",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
      tags: ["Google Ads", "Facebook Ads", "Landing Page"],
      metrics: {
        leads: "+400% leads",
        cpa: "-60% CPA",
        roas: "500% ROAS"
      }
    },
    {
      title: "SaaS Platform",
      category: "Tráfego Pago",
      description: "Campanhas de tráfego pago que geraram 10x mais usuários em 3 meses",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      tags: ["Google Ads", "LinkedIn Ads", "Analytics"],
      metrics: {
        users: "+1000% usuários",
        cac: "-45% CAC",
        ltv: "+300% LTV"
      }
    },
    {
      title: "Restaurante Gourmet",
      category: "Site + Marketing",
      description: "Site moderno com sistema de reservas e estratégia de marketing local",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      tags: ["WordPress", "SEO Local", "Social Media"],
      metrics: {
        reservations: "+200% reservas",
        visibility: "+180% visibilidade",
        engagement: "+320% engajamento"
      }
    },
    {
      title: "Tech Startup",
      category: "Consultoria Digital",
      description: "Consultoria completa que resultou em captação de investimento de R$ 2M",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop",
      tags: ["Strategy", "Branding", "Growth Hacking"],
      metrics: {
        investment: "R$ 2M captados",
        growth: "+500% crescimento",
        valuation: "+800% valuation"
      }
    },
    {
      title: "Academia Fitness",
      category: "Criação de Site",
      description: "Site responsivo com sistema de agendamento de aulas e área do aluno",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=300&fit=crop",
      tags: ["React", "Booking System", "Mobile App"],
      metrics: {
        members: "+180% membros",
        retention: "+90% retenção",
        app_downloads: "5k+ downloads"
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('portfolio.title')} <span className="bg-naoki-gradient bg-clip-text text-transparent">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-900 border-gray-800">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-naoki-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-naoki-gradient opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="space-y-2">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400 capitalize">{key.replace('_', ' ')}</span>
                      <span className="font-semibold text-naoki-blue">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
