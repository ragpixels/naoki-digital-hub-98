import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MessageCircle, Send, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "@/hooks/useTranslation";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { language, t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t('contact.form.validation.nomeMin')),
    email: z.string().email(t('contact.form.validation.emailInvalido')),
    telefone: z.string().min(10, t('contact.form.validation.telefoneMin')),
    message: z.string().min(10, t('contact.form.validation.mensagemMin')),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      telefone: "",
      message: "",
    },
  });

  const handleWhatsApp = () => {
    const message = language === 'pt' 
      ? 'Olá! Gostaria de falar no WhatsApp.' 
      : 'Hello! I would like to talk on WhatsApp.';
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const webhookUrl = "https://discord.com/api/webhooks/1397680909355974787/s5_OL1fr-94dzMr6KURmeRhfe02CaKtbjG4I4jnaBc66nMiayYdm_xs2Oc1GCh4iBhDQ";
      
      const discordMessage = {
        content: "🔔 **Nova mensagem do formulário de contato!**",
        embeds: [{
          title: "📝 Formulário de Contato",
          description: "Nova mensagem recebida do site",
          color: 0x3B82F6,
          fields: [
            {
              name: "👤 Nome",
              value: `**${values.name}**`,
              inline: false
            },
            {
              name: "📧 Email",
              value: `**${values.email}**`,
              inline: false
            },
            {
              name: "📱 Telefone",
              value: `**${values.telefone}**`,
              inline: false
            },
            {
              name: "💬 Mensagem",
              value: `\`\`\`${values.message}\`\`\``,
              inline: false
            }
          ],
          footer: {
            text: "Naoki Website"
          },
          timestamp: new Date().toISOString()
        }]
      };

      console.log('Enviando dados para Discord:', discordMessage);

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });

      if (response.ok) {
        console.log('Mensagem enviada com sucesso para Discord');
        toast({
          title: language === 'pt' ? "Mensagem enviada!" : "Message sent!",
          description: language === 'pt' ? "Sua mensagem foi enviada com sucesso." : "Your message was sent successfully.",
        });
        form.reset();
      } else {
        const errorText = await response.text();
        console.error('Erro na resposta do Discord:', errorText);
        throw new Error(`Failed to send message: ${response.status}`);
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem para Discord:", error);
      toast({
        title: language === 'pt' ? "Erro ao enviar" : "Error sending",
        description: language === 'pt' ? "Houve um erro ao enviar sua mensagem. Tente novamente." : "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // TikTok icon component (since it's not in lucide-react)
  const TikTokIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
    </svg>
  );

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('contact.title')} <span className="bg-naoki-gradient bg-clip-text text-transparent">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">{t('contact.form.title')}</CardTitle>
              <CardDescription>
                {t('contact.form.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nome Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="flex items-center gap-3 text-base font-medium text-card-foreground">
                          <span className="text-xl">👤</span>
                          {t('contact.form.nome')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('contact.form.nomePlaceholder')} 
                            className="h-12 w-full"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="flex items-center gap-3 text-base font-medium text-card-foreground">
                          <span className="text-xl">📧</span>
                          {t('contact.form.email')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('contact.form.emailPlaceholder')} 
                            type="email" 
                            className="h-12 w-full"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Telefone Field */}
                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="flex items-center gap-3 text-base font-medium text-card-foreground">
                          <span className="text-xl">📱</span>
                          {t('contact.form.telefone')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('contact.form.telefonePlaceholder')} 
                            type="tel" 
                            className="h-12 w-full"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Mensagem Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="flex items-center gap-3 text-base font-medium text-card-foreground">
                          <span className="text-xl">💬</span>
                          {t('contact.form.mensagem')}
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('contact.form.mensagemPlaceholder')}
                            className="min-h-[120px] resize-none w-full"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-naoki-gradient hover:bg-naoki-gradient-dark text-white h-12 text-base font-medium"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? (language === 'pt' ? 'Enviando...' : 'Sending...') : t('contact.form.enviar')}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* WhatsApp Direct Contact */}
          <div className="space-y-8">
            <Card className="bg-naoki-gradient text-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{t('contact.whatsapp.title')}</h3>
                  <p className="text-lg mb-8 opacity-90">
                    {t('contact.whatsapp.subtitle')}
                  </p>
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="bg-white text-naoki-blue hover:bg-gray-100"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t('contact.whatsapp.button')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-card-foreground">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-card-foreground">{t('contact.form.email')}</h4>
                    <p className="text-muted-foreground">contato@naoki.com.br</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Telefone</h4>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                {/* Social Media Icons */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-card-foreground mb-4">
                    {language === 'pt' ? 'Redes Sociais' : 'Social Media'}
                  </h4>
                  <div className="flex space-x-4">
                    <button 
                      onClick={handleWhatsApp}
                      className="w-12 h-12 bg-naoki-blue hover:bg-naoki-blue-dark text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </button>
                    <a 
                      href="https://instagram.com/naoki.exemplo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-naoki-blue hover:bg-naoki-blue-dark text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://tiktok.com/@naoki.exemplo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-naoki-blue hover:bg-naoki-blue-dark text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="TikTok"
                    >
                      <TikTokIcon />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
