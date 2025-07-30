import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ImageUpload from './ImageUpload';

const BrandManager = () => {
  const { toast } = useToast();
  
  const [logoSettings, setLogoSettings] = useState({
    logoUrl: '/lovable-uploads/logo.png',
    logoText: 'NAOKI',
    logoPosition: 'left',
    logoSize: 'medium',
    showText: true,
    showIcon: true
  });

  const [colorSettings, setColorSettings] = useState({
    primaryColor: '#3B82F6',
    secondaryColor: '#10B981',
    accentColor: '#F59E0B',
    textColor: '#1F2937',
    backgroundColor: '#FFFFFF',
    darkPrimaryColor: '#60A5FA',
    darkSecondaryColor: '#34D399',
    darkAccentColor: '#FBBF24',
    darkTextColor: '#F9FAFB',
    darkBackgroundColor: '#111827'
  });

  const [fontSettings, setFontSettings] = useState({
    headingFont: 'Inter',
    bodyFont: 'Inter',
    fontSize: 'medium',
    fontWeight: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal'
  });

  const [seoSettings, setSeoSettings] = useState({
    siteTitle: 'NAOKI - Agência Digital',
    siteDescription: 'Especialistas em transformar ideias em vendas reais com tecnologia, design e marketing digital.',
    keywords: 'agência digital, sites, tráfego pago, marketing digital, desenvolvimento web',
    favicon: '/favicon.ico',
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image'
  });

  const handleSave = (section: string) => {
    toast({
      title: "Alterações salvas!",
      description: `As configurações de ${section} foram salvas com sucesso.`,
    });
  };

  const previewColors = () => {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-lg mx-auto mb-2 border"
              style={{ backgroundColor: colorSettings.primaryColor }}
            ></div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Primária</p>
          </div>
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-lg mx-auto mb-2 border"
              style={{ backgroundColor: colorSettings.secondaryColor }}
            ></div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Secundária</p>
          </div>
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-lg mx-auto mb-2 border"
              style={{ backgroundColor: colorSettings.accentColor }}
            ></div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Destaque</p>
          </div>
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-lg mx-auto mb-2 border"
              style={{ backgroundColor: colorSettings.textColor }}
            ></div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Texto</p>
          </div>
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-lg mx-auto mb-2 border"
              style={{ backgroundColor: colorSettings.backgroundColor }}
            ></div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Fundo</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
            <Palette size={20} />
            Gerenciar Identidade Visual
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="logo" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-slate-100 dark:bg-slate-700">
              <TabsTrigger value="logo">Logo</TabsTrigger>
              <TabsTrigger value="colors">Cores</TabsTrigger>
              <TabsTrigger value="fonts">Fontes</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            <TabsContent value="logo" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <ImageUpload
                    value={logoSettings.logoUrl}
                    onChange={(url) => setLogoSettings({...logoSettings, logoUrl: url})}
                    label="Logo da Empresa"
                    placeholder="URL da logo ou clique para fazer upload"
                  />
                  
                  <div>
                    <Label htmlFor="logo-text">Texto da Logo</Label>
                    <Input
                      id="logo-text"
                      value={logoSettings.logoText}
                      onChange={(e) => setLogoSettings({...logoSettings, logoText: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="logo-position">Posição</Label>
                    <select
                      id="logo-position"
                      value={logoSettings.logoPosition}
                      onChange={(e) => setLogoSettings({...logoSettings, logoPosition: e.target.value})}
                      className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                    >
                      <option value="left">Esquerda</option>
                      <option value="center">Centro</option>
                      <option value="right">Direita</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="logo-size">Tamanho</Label>
                    <select
                      id="logo-size"
                      value={logoSettings.logoSize}
                      onChange={(e) => setLogoSettings({...logoSettings, logoSize: e.target.value})}
                      className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                    >
                      <option value="small">Pequeno</option>
                      <option value="medium">Médio</option>
                      <option value="large">Grande</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="show-text"
                        checked={logoSettings.showText}
                        onChange={(e) => setLogoSettings({...logoSettings, showText: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="show-text">Mostrar texto</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="show-icon"
                        checked={logoSettings.showIcon}
                        onChange={(e) => setLogoSettings({...logoSettings, showIcon: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="show-icon">Mostrar ícone</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Preview da Logo</h4>
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-slate-50 dark:bg-slate-900">
                    <div className={`flex items-center ${logoSettings.logoPosition === 'center' ? 'justify-center' : logoSettings.logoPosition === 'right' ? 'justify-end' : 'justify-start'}`}>
                      {logoSettings.showIcon && logoSettings.logoUrl && (
                        <img 
                          src={logoSettings.logoUrl} 
                          alt="Logo" 
                          className={`${logoSettings.logoSize === 'small' ? 'h-8' : logoSettings.logoSize === 'large' ? 'h-16' : 'h-12'} mr-2`}
                        />
                      )}
                      {logoSettings.showText && (
                        <span className={`font-bold bg-naoki-gradient bg-clip-text text-transparent ${logoSettings.logoSize === 'small' ? 'text-xl' : logoSettings.logoSize === 'large' ? 'text-4xl' : 'text-2xl'}`}>
                          {logoSettings.logoText}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={() => handleSave('Logo')} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save size={16} className="mr-2" />
                Salvar Configurações da Logo
              </Button>
            </TabsContent>

            <TabsContent value="colors" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Modo Claro</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="primary-color">Cor Primária</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primary-color"
                          type="color"
                          value={colorSettings.primaryColor}
                          onChange={(e) => setColorSettings({...colorSettings, primaryColor: e.target.value})}
                          className="w-20"
                        />
                        <Input
                          value={colorSettings.primaryColor}
                          onChange={(e) => setColorSettings({...colorSettings, primaryColor: e.target.value})}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="secondary-color">Cor Secundária</Label>
                      <div className="flex gap-2">
                        <Input
                          id="secondary-color"
                          type="color"
                          value={colorSettings.secondaryColor}
                          onChange={(e) => setColorSettings({...colorSettings, secondaryColor: e.target.value})}
                          className="w-20"
                        />
                        <Input
                          value={colorSettings.secondaryColor}
                          onChange={(e) => setColorSettings({...colorSettings, secondaryColor: e.target.value})}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="accent-color">Cor de Destaque</Label>
                      <div className="flex gap-2">
                        <Input
                          id="accent-color"
                          type="color"
                          value={colorSettings.accentColor}
                          onChange={(e) => setColorSettings({...colorSettings, accentColor: e.target.value})}
                          className="w-20"
                        />
                        <Input
                          value={colorSettings.accentColor}
                          onChange={(e) => setColorSettings({...colorSettings, accentColor: e.target.value})}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="text-color">Cor do Texto</Label>
                      <div className="flex gap-2">
                        <Input
                          id="text-color"
                          type="color"
                          value={colorSettings.textColor}
                          onChange={(e) => setColorSettings({...colorSettings, textColor: e.target.value})}
                          className="w-20"
                        />
                        <Input
                          value={colorSettings.textColor}
                          onChange={(e) => setColorSettings({...colorSettings, textColor: e.target.value})}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Modo Escuro</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dark-primary-color">Cor Primária</Label>
                      <div className="flex gap-2">
                        <Input
                          id="dark-primary-color"
                          type="color"
                          value={colorSettings.darkPrimaryColor}
                          onChange={(e) => setColorSettings({...colorSettings, darkPrimaryColor: e.target.value})}
                          className="w-20"
                        />
                        <Input
                          value={colorSettings.darkPrimaryColor}
                          onChange={(e) => setColorSettings({...colorSettings, darkPrimaryColor: e.target.value})}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="dark-secondary-color">Cor Secundária</Label>
                      <div className="flex gap-2">
                        <Input
                          id="dark-secondary-color"
                          type="color"
                          value={colorSettings.darkSecondaryColor}
                          onChange={(e) => setColorSettings({...colorSettings, darkSecondaryColor: e.target.value})}
                          className="w-20"
                        />
                        <Input
                          value={colorSettings.darkSecondaryColor}
                          onChange={(e) => setColorSettings({...colorSettings, darkSecondaryColor: e.target.value})}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="dark-accent-color">Cor de Destaque</Label>
                      <div className="flex gap-2">
                        <Input
                          id="dark-accent-color"
                          type="color"
                          value={colorSettings.darkAccentColor}
                          onChange={(e) => setColorSettings({...colorSettings, darkAccentColor: e.target.value})}
                          className="w-20"
                        />
                        <Input
                          value={colorSettings.darkAccentColor}
                          onChange={(e) => setColorSettings({...colorSettings, darkAccentColor: e.target.value})}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="dark-text-color">Cor do Texto</Label>
                      <div className="flex gap-2">
                        <Input
                          id="dark-text-color"
                          type="color"
                          value={colorSettings.darkTextColor}
                          onChange={(e) => setColorSettings({...colorSettings, darkTextColor: e.target.value})}
                          className="w-20"
                        />
                        <Input
                          value={colorSettings.darkTextColor}
                          onChange={(e) => setColorSettings({...colorSettings, darkTextColor: e.target.value})}
                          className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Preview das Cores</h4>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-slate-50 dark:bg-slate-900">
                  {previewColors()}
                </div>
              </div>

              <Button onClick={() => handleSave('Cores')} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save size={16} className="mr-2" />
                Salvar Configurações de Cores
              </Button>
            </TabsContent>

            <TabsContent value="fonts" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="heading-font">Fonte dos Títulos</Label>
                    <select
                      id="heading-font"
                      value={fontSettings.headingFont}
                      onChange={(e) => setFontSettings({...fontSettings, headingFont: e.target.value})}
                      className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                    >
                      <option value="Inter">Inter</option>
                      <option value="Poppins">Poppins</option>
                      <option value="Roboto">Roboto</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Open Sans">Open Sans</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="body-font">Fonte do Corpo</Label>
                    <select
                      id="body-font"
                      value={fontSettings.bodyFont}
                      onChange={(e) => setFontSettings({...fontSettings, bodyFont: e.target.value})}
                      className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                    >
                      <option value="Inter">Inter</option>
                      <option value="Poppins">Poppins</option>
                      <option value="Roboto">Roboto</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Open Sans">Open Sans</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="font-size">Tamanho da Fonte</Label>
                    <select
                      id="font-size"
                      value={fontSettings.fontSize}
                      onChange={(e) => setFontSettings({...fontSettings, fontSize: e.target.value})}
                      className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                    >
                      <option value="small">Pequeno</option>
                      <option value="medium">Médio</option>
                      <option value="large">Grande</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Preview das Fontes</h4>
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-slate-50 dark:bg-slate-900 space-y-4">
                    <div style={{ fontFamily: fontSettings.headingFont }}>
                      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        Título Principal
                      </h1>
                      <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                        Subtítulo
                      </h2>
                    </div>
                    <div style={{ fontFamily: fontSettings.bodyFont }}>
                      <p className="text-slate-600 dark:text-slate-400">
                        Este é um exemplo de texto do corpo usando a fonte selecionada. 
                        Você pode ver como ficará o texto normal no seu site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={() => handleSave('Fontes')} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save size={16} className="mr-2" />
                Salvar Configurações de Fontes
              </Button>
            </TabsContent>

            <TabsContent value="seo" className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="site-title">Título do Site</Label>
                  <Input
                    id="site-title"
                    value={seoSettings.siteTitle}
                    onChange={(e) => setSeoSettings({...seoSettings, siteTitle: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="site-description">Descrição do Site</Label>
                  <Textarea
                    id="site-description"
                    value={seoSettings.siteDescription}
                    onChange={(e) => setSeoSettings({...seoSettings, siteDescription: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="keywords">Palavras-chave (separadas por vírgula)</Label>
                  <Textarea
                    id="keywords"
                    value={seoSettings.keywords}
                    onChange={(e) => setSeoSettings({...seoSettings, keywords: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    rows={2}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ImageUpload
                    value={seoSettings.favicon}
                    onChange={(url) => setSeoSettings({...seoSettings, favicon: url})}
                    label="Favicon"
                    accept="image/x-icon,image/png"
                    placeholder="URL do favicon ou clique para fazer upload"
                  />
                  
                  <ImageUpload
                    value={seoSettings.ogImage}
                    onChange={(url) => setSeoSettings({...seoSettings, ogImage: url})}
                    label="Imagem Open Graph"
                    placeholder="URL da imagem OG ou clique para fazer upload"
                  />
                </div>
              </div>

              <Button onClick={() => handleSave('SEO')} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save size={16} className="mr-2" />
                Salvar Configurações de SEO
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrandManager;
