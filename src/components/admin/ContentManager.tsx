
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, RefreshCw, Type, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContentManager = () => {
  const { toast } = useToast();
  
  const [heroContent, setHeroContent] = useState({
    title: 'Sites, funis e tráfego pago que',
    titleHighlight: 'vendem todos os dias no digital.',
    subtitle: 'Criação de sites, automações e anúncios para escalar seu negócio com estratégia.',
    ctaPrimary: 'Solicite seu orçamento no WhatsApp',
    ctaSecondary: 'Nossos Serviços'
  });

  const [servicesContent, setServicesContent] = useState({
    title: 'Nossos',
    titleHighlight: 'Serviços',
    subtitle: 'Soluções completas para transformar sua presença digital em resultados reais',
    service1: {
      title: 'Criação de Sites',
      description: 'Sites modernos, responsivos e otimizados para performance e conversão.'
    },
    service2: {
      title: 'Máquina Digital',
      description: 'Funis de vendas, páginas otimizadas e automações para escalar o faturamento no piloto automático.'
    },
    service3: {
      title: 'Tráfego Pago',
      description: 'Campanhas estratégicas no Google, Facebook e Instagram para atrair e converter clientes.'
    }
  });

  const [aboutContent, setAboutContent] = useState({
    title: 'Sobre a',
    titleHighlight: 'NAOKI',
    subtitle: 'Somos uma agência digital especializada em transformar ideias em soluções tecnológicas que geram resultados reais',
    mission: 'Transformar a presença digital de empresas de todos os tamanhos, criando soluções inovadoras que geram resultados mensuráveis e impulsionam o crescimento sustentável dos nossos clientes.',
    historia: {
      p1: 'A NAOKI nasceu da paixão por tecnologia e pela vontade de ajudar empresas a alcançarem seu máximo potencial no mundo digital.',
      p2: 'Nosso time é formado por especialistas em desenvolvimento web, marketing digital, design UX/UI e tráfego pago.',
      p3: 'Acreditamos que cada projeto é único e merece uma abordagem personalizada.'
    }
  });

  const [contactContent, setContactContent] = useState({
    title: 'Entre em',
    titleHighlight: 'Contato',
    subtitle: 'Pronto para transformar sua presença digital? Vamos conversar!',
    formTitle: 'Envie sua mensagem',
    formSubtitle: 'Preencha o formulário abaixo e entraremos em contato em breve',
    whatsappTitle: 'Prefere falar direto no WhatsApp?',
    whatsappSubtitle: 'Clique no botão abaixo e converse conosco agora mesmo!'
  });

  const handleSave = (section: string) => {
    // Aqui você salvaria no backend ou localStorage
    toast({
      title: "Conteúdo salvo!",
      description: `As alterações da seção ${section} foram salvas com sucesso.`,
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
            <Type size={20} />
            Gerenciar Conteúdo do Site
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="hero" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-slate-100 dark:bg-slate-700">
              <TabsTrigger value="hero">Hero</TabsTrigger>
              <TabsTrigger value="services">Serviços</TabsTrigger>
              <TabsTrigger value="about">Sobre</TabsTrigger>
              <TabsTrigger value="contact">Contato</TabsTrigger>
            </TabsList>

            <TabsContent value="hero" className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="hero-title">Título Principal</Label>
                  <Input
                    id="hero-title"
                    value={heroContent.title}
                    onChange={(e) => setHeroContent({...heroContent, title: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-highlight">Título Destacado</Label>
                  <Input
                    id="hero-highlight"
                    value={heroContent.titleHighlight}
                    onChange={(e) => setHeroContent({...heroContent, titleHighlight: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-subtitle">Subtítulo</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={heroContent.subtitle}
                    onChange={(e) => setHeroContent({...heroContent, subtitle: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hero-cta1">Botão Principal</Label>
                    <Input
                      id="hero-cta1"
                      value={heroContent.ctaPrimary}
                      onChange={(e) => setHeroContent({...heroContent, ctaPrimary: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-cta2">Botão Secundário</Label>
                    <Input
                      id="hero-cta2"
                      value={heroContent.ctaSecondary}
                      onChange={(e) => setHeroContent({...heroContent, ctaSecondary: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                </div>
                <Button onClick={() => handleSave('Hero')} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Save size={16} className="mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="services-title">Título</Label>
                    <Input
                      id="services-title"
                      value={servicesContent.title}
                      onChange={(e) => setServicesContent({...servicesContent, title: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="services-highlight">Título Destacado</Label>
                    <Input
                      id="services-highlight"
                      value={servicesContent.titleHighlight}
                      onChange={(e) => setServicesContent({...servicesContent, titleHighlight: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="services-subtitle">Subtítulo</Label>
                  <Textarea
                    id="services-subtitle"
                    value={servicesContent.subtitle}
                    onChange={(e) => setServicesContent({...servicesContent, subtitle: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Serviços</h4>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Serviço 1 - Título</Label>
                        <Input
                          value={servicesContent.service1.title}
                          onChange={(e) => setServicesContent({
                            ...servicesContent,
                            service1: {...servicesContent.service1, title: e.target.value}
                          })}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                      <div>
                        <Label>Serviço 1 - Descrição</Label>
                        <Textarea
                          value={servicesContent.service1.description}
                          onChange={(e) => setServicesContent({
                            ...servicesContent,
                            service1: {...servicesContent.service1, description: e.target.value}
                          })}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Serviço 2 - Título</Label>
                        <Input
                          value={servicesContent.service2.title}
                          onChange={(e) => setServicesContent({
                            ...servicesContent,
                            service2: {...servicesContent.service2, title: e.target.value}
                          })}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                      <div>
                        <Label>Serviço 2 - Descrição</Label>
                        <Textarea
                          value={servicesContent.service2.description}
                          onChange={(e) => setServicesContent({
                            ...servicesContent,
                            service2: {...servicesContent.service2, description: e.target.value}
                          })}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Serviço 3 - Título</Label>
                        <Input
                          value={servicesContent.service3.title}
                          onChange={(e) => setServicesContent({
                            ...servicesContent,
                            service3: {...servicesContent.service3, title: e.target.value}
                          })}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                      <div>
                        <Label>Serviço 3 - Descrição</Label>
                        <Textarea
                          value={servicesContent.service3.description}
                          onChange={(e) => setServicesContent({
                            ...servicesContent,
                            service3: {...servicesContent.service3, description: e.target.value}
                          })}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button onClick={() => handleSave('Serviços')} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Save size={16} className="mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="about-title">Título</Label>
                    <Input
                      id="about-title"
                      value={aboutContent.title}
                      onChange={(e) => setAboutContent({...aboutContent, title: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="about-highlight">Título Destacado</Label>
                    <Input
                      id="about-highlight"
                      value={aboutContent.titleHighlight}
                      onChange={(e) => setAboutContent({...aboutContent, titleHighlight: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="about-subtitle">Subtítulo</Label>
                  <Textarea
                    id="about-subtitle"
                    value={aboutContent.subtitle}
                    onChange={(e) => setAboutContent({...aboutContent, subtitle: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <Label htmlFor="about-mission">Missão</Label>
                  <Textarea
                    id="about-mission"
                    value={aboutContent.mission}
                    onChange={(e) => setAboutContent({...aboutContent, mission: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    rows={3}
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">História</h4>
                  <div>
                    <Label>Parágrafo 1</Label>
                    <Textarea
                      value={aboutContent.historia.p1}
                      onChange={(e) => setAboutContent({
                        ...aboutContent,
                        historia: {...aboutContent.historia, p1: e.target.value}
                      })}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Parágrafo 2</Label>
                    <Textarea
                      value={aboutContent.historia.p2}
                      onChange={(e) => setAboutContent({
                        ...aboutContent,
                        historia: {...aboutContent.historia, p2: e.target.value}
                      })}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Parágrafo 3</Label>
                    <Textarea
                      value={aboutContent.historia.p3}
                      onChange={(e) => setAboutContent({
                        ...aboutContent,
                        historia: {...aboutContent.historia, p3: e.target.value}
                      })}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      rows={3}
                    />
                  </div>
                </div>
                <Button onClick={() => handleSave('Sobre')} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Save size={16} className="mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-title">Título</Label>
                    <Input
                      id="contact-title"
                      value={contactContent.title}
                      onChange={(e) => setContactContent({...contactContent, title: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-highlight">Título Destacado</Label>
                    <Input
                      id="contact-highlight"
                      value={contactContent.titleHighlight}
                      onChange={(e) => setContactContent({...contactContent, titleHighlight: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-subtitle">Subtítulo</Label>
                  <Textarea
                    id="contact-subtitle"
                    value={contactContent.subtitle}
                    onChange={(e) => setContactContent({...contactContent, subtitle: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="form-title">Título do Formulário</Label>
                    <Input
                      id="form-title"
                      value={contactContent.formTitle}
                      onChange={(e) => setContactContent({...contactContent, formTitle: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="form-subtitle">Subtítulo do Formulário</Label>
                    <Input
                      id="form-subtitle"
                      value={contactContent.formSubtitle}
                      onChange={(e) => setContactContent({...contactContent, formSubtitle: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="whatsapp-title">Título WhatsApp</Label>
                    <Input
                      id="whatsapp-title"
                      value={contactContent.whatsappTitle}
                      onChange={(e) => setContactContent({...contactContent, whatsappTitle: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp-subtitle">Subtítulo WhatsApp</Label>
                    <Input
                      id="whatsapp-subtitle"
                      value={contactContent.whatsappSubtitle}
                      onChange={(e) => setContactContent({...contactContent, whatsappSubtitle: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                </div>
                <Button onClick={() => handleSave('Contato')} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Save size={16} className="mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentManager;
