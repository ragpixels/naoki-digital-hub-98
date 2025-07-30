
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Shield, Zap, Settings, Save, Download, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SiteSettingsManager = () => {
  const { toast } = useToast();
  
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'NAOKI',
    siteTagline: 'Agência Digital',
    defaultLanguage: 'pt',
    timezone: 'America/Sao_Paulo',
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: false,
    enableComments: true,
    enableAnalytics: true,
    analyticsCode: ''
  });

  const [performanceSettings, setPerformanceSettings] = useState({
    enableCache: true,
    cacheTimeout: 3600,
    enableCompression: true,
    optimizeImages: true,
    lazyLoading: true,
    minifyCSS: true,
    minifyJS: true,
    enableCDN: false,
    cdnUrl: ''
  });

  const [securitySettings, setSecuritySettings] = useState({
    enableHTTPS: true,
    enableCSP: true,
    enableXSS: true,
    enableRateLimit: true,
    maxLoginAttempts: 5,
    sessionTimeout: 1800,
    requireStrongPasswords: true,
    enableTwoFactor: false,
    enableBackups: true,
    backupFrequency: 'daily'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    enableEmailNotifications: true,
    adminEmail: 'admin@naoki.com.br',
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUsername: '',
    smtpPassword: '',
    enableSMSNotifications: false,
    smsProvider: 'twilio',
    twilioAccountSID: '',
    twilioAuthToken: '',
    twilioPhoneNumber: ''
  });

  const handleSave = (section) => {
    toast({
      title: "Configurações salvas!",
      description: `As configurações de ${section} foram salvas com sucesso.`,
    });
  };

  const exportSettings = () => {
    const allSettings = {
      general: generalSettings,
      performance: performanceSettings,
      security: securitySettings,
      notifications: notificationSettings
    };
    
    const dataStr = JSON.stringify(allSettings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'site-settings.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Configurações exportadas!",
      description: "As configurações foram exportadas com sucesso.",
    });
  };

  const handleImportSettings = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result;
          if (typeof result === 'string') {
            const settings = JSON.parse(result);
            if (settings.general) setGeneralSettings(settings.general);
            if (settings.performance) setPerformanceSettings(settings.performance);
            if (settings.security) setSecuritySettings(settings.security);
            if (settings.notifications) setNotificationSettings(settings.notifications);
            
            toast({
              title: "Configurações importadas!",
              description: "As configurações foram importadas com sucesso.",
            });
          } else {
            toast({
              title: "Erro ao importar!",
              description: "Não foi possível ler o arquivo de configuração.",
              variant: "destructive"
            });
          }
        } catch (error) {
          toast({
            title: "Erro ao importar!",
            description: "Arquivo de configuração inválido.",
            variant: "destructive"
          });
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
              <Globe size={20} />
              Configurações Gerais do Site
            </CardTitle>
            <div className="flex gap-2">
              <Button onClick={exportSettings} variant="outline" size="sm">
                <Download size={16} className="mr-2" />
                Exportar
              </Button>
              <Button 
                onClick={() => document.getElementById('import-settings').click()}
                variant="outline" 
                size="sm"
              >
                <Upload size={16} className="mr-2" />
                Importar
              </Button>
              <input
                id="import-settings"
                type="file"
                accept=".json"
                onChange={handleImportSettings}
                className="hidden"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-slate-100 dark:bg-slate-700">
              <TabsTrigger value="general">Geral</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="site-name">Nome do Site</Label>
                  <Input
                    id="site-name"
                    value={generalSettings.siteName}
                    onChange={(e) => setGeneralSettings({...generalSettings, siteName: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="site-tagline">Slogan</Label>
                  <Input
                    id="site-tagline"
                    value={generalSettings.siteTagline}
                    onChange={(e) => setGeneralSettings({...generalSettings, siteTagline: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="default-language">Idioma Padrão</Label>
                  <select
                    id="default-language"
                    value={generalSettings.defaultLanguage}
                    onChange={(e) => setGeneralSettings({...generalSettings, defaultLanguage: e.target.value})}
                    className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  >
                    <option value="pt">Português</option>
                    <option value="en">Inglês</option>
                    <option value="es">Espanhol</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <select
                    id="timezone"
                    value={generalSettings.timezone}
                    onChange={(e) => setGeneralSettings({...generalSettings, timezone: e.target.value})}
                    className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  >
                    <option value="America/Sao_Paulo">São Paulo (UTC-3)</option>
                    <option value="America/New_York">Nova York (UTC-5)</option>
                    <option value="Europe/London">Londres (UTC+0)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="analytics-code">Código Google Analytics</Label>
                <Textarea
                  id="analytics-code"
                  value={generalSettings.analyticsCode}
                  onChange={(e) => setGeneralSettings({...generalSettings, analyticsCode: e.target.value})}
                  className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  rows={3}
                  placeholder="Cole aqui o código do Google Analytics"
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Configurações de Funcionalidade</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="maintenance-mode"
                      checked={generalSettings.maintenanceMode}
                      onChange={(e) => setGeneralSettings({...generalSettings, maintenanceMode: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="maintenance-mode">Modo Manutenção</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="allow-registration"
                      checked={generalSettings.allowRegistration}
                      onChange={(e) => setGeneralSettings({...generalSettings, allowRegistration: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="allow-registration">Permitir Registro</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="enable-comments"
                      checked={generalSettings.enableComments}
                      onChange={(e) => setGeneralSettings({...generalSettings, enableComments: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="enable-comments">Habilitar Comentários</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="enable-analytics"
                      checked={generalSettings.enableAnalytics}
                      onChange={(e) => setGeneralSettings({...generalSettings, enableAnalytics: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="enable-analytics">Habilitar Analytics</Label>
                  </div>
                </div>
              </div>

              <Button onClick={() => handleSave('Geral')} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save size={16} className="mr-2" />
                Salvar Configurações Gerais
              </Button>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cache-timeout">Tempo de Cache (segundos)</Label>
                    <Input
                      id="cache-timeout"
                      type="number"
                      value={performanceSettings.cacheTimeout}
                      onChange={(e) => setPerformanceSettings({...performanceSettings, cacheTimeout: parseInt(e.target.value)})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cdn-url">URL do CDN</Label>
                    <Input
                      id="cdn-url"
                      value={performanceSettings.cdnUrl}
                      onChange={(e) => setPerformanceSettings({...performanceSettings, cdnUrl: e.target.value})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      placeholder="https://cdn.example.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Otimizações</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-cache"
                        checked={performanceSettings.enableCache}
                        onChange={(e) => setPerformanceSettings({...performanceSettings, enableCache: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-cache">Habilitar Cache</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-compression"
                        checked={performanceSettings.enableCompression}
                        onChange={(e) => setPerformanceSettings({...performanceSettings, enableCompression: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-compression">Habilitar Compressão</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="optimize-images"
                        checked={performanceSettings.optimizeImages}
                        onChange={(e) => setPerformanceSettings({...performanceSettings, optimizeImages: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="optimize-images">Otimizar Imagens</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="lazy-loading"
                        checked={performanceSettings.lazyLoading}
                        onChange={(e) => setPerformanceSettings({...performanceSettings, lazyLoading: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="lazy-loading">Lazy Loading</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="minify-css"
                        checked={performanceSettings.minifyCSS}
                        onChange={(e) => setPerformanceSettings({...performanceSettings, minifyCSS: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="minify-css">Minificar CSS</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-cdn"
                        checked={performanceSettings.enableCDN}
                        onChange={(e) => setPerformanceSettings({...performanceSettings, enableCDN: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-cdn">Habilitar CDN</Label>
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={() => handleSave('Performance')} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save size={16} className="mr-2" />
                Salvar Configurações de Performance
              </Button>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="max-login-attempts">Máximo de Tentativas de Login</Label>
                    <Input
                      id="max-login-attempts"
                      type="number"
                      value={securitySettings.maxLoginAttempts}
                      onChange={(e) => setSecuritySettings({...securitySettings, maxLoginAttempts: parseInt(e.target.value)})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="session-timeout">Timeout de Sessão (segundos)</Label>
                    <Input
                      id="session-timeout"
                      type="number"
                      value={securitySettings.sessionTimeout}
                      onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: parseInt(e.target.value)})}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="backup-frequency">Frequência de Backup</Label>
                    <select
                      id="backup-frequency"
                      value={securitySettings.backupFrequency}
                      onChange={(e) => setSecuritySettings({...securitySettings, backupFrequency: e.target.value})}
                      className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                    >
                      <option value="hourly">A cada hora</option>
                      <option value="daily">Diário</option>
                      <option value="weekly">Semanal</option>
                      <option value="monthly">Mensal</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Configurações de Segurança</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-https"
                        checked={securitySettings.enableHTTPS}
                        onChange={(e) => setSecuritySettings({...securitySettings, enableHTTPS: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-https">Forçar HTTPS</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-csp"
                        checked={securitySettings.enableCSP}
                        onChange={(e) => setSecuritySettings({...securitySettings, enableCSP: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-csp">Content Security Policy</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-rate-limit"
                        checked={securitySettings.enableRateLimit}
                        onChange={(e) => setSecuritySettings({...securitySettings, enableRateLimit: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-rate-limit">Rate Limiting</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="require-strong-passwords"
                        checked={securitySettings.requireStrongPasswords}
                        onChange={(e) => setSecuritySettings({...securitySettings, requireStrongPasswords: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="require-strong-passwords">Senhas Fortes</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-two-factor"
                        checked={securitySettings.enableTwoFactor}
                        onChange={(e) => setSecuritySettings({...securitySettings, enableTwoFactor: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-two-factor">Autenticação 2FA</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-backups"
                        checked={securitySettings.enableBackups}
                        onChange={(e) => setSecuritySettings({...securitySettings, enableBackups: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-backups">Backups Automáticos</Label>
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={() => handleSave('Segurança')} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save size={16} className="mr-2" />
                Salvar Configurações de Segurança
              </Button>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Configurações de Email</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="admin-email">Email do Administrador</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        value={notificationSettings.adminEmail}
                        onChange={(e) => setNotificationSettings({...notificationSettings, adminEmail: e.target.value})}
                        className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="smtp-host">Servidor SMTP</Label>
                      <Input
                        id="smtp-host"
                        value={notificationSettings.smtpHost}
                        onChange={(e) => setNotificationSettings({...notificationSettings, smtpHost: e.target.value})}
                        className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="smtp-port">Porta SMTP</Label>
                      <Input
                        id="smtp-port"
                        type="number"
                        value={notificationSettings.smtpPort}
                        onChange={(e) => setNotificationSettings({...notificationSettings, smtpPort: parseInt(e.target.value)})}
                        className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="smtp-username">Usuário SMTP</Label>
                      <Input
                        id="smtp-username"
                        value={notificationSettings.smtpUsername}
                        onChange={(e) => setNotificationSettings({...notificationSettings, smtpUsername: e.target.value})}
                        className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Configurações de SMS (Twilio)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="twilio-sid">Account SID</Label>
                      <Input
                        id="twilio-sid"
                        value={notificationSettings.twilioAccountSID}
                        onChange={(e) => setNotificationSettings({...notificationSettings, twilioAccountSID: e.target.value})}
                        className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="twilio-token">Auth Token</Label>
                      <Input
                        id="twilio-token"
                        type="password"
                        value={notificationSettings.twilioAuthToken}
                        onChange={(e) => setNotificationSettings({...notificationSettings, twilioAuthToken: e.target.value})}
                        className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="twilio-phone">Número Twilio</Label>
                      <Input
                        id="twilio-phone"
                        value={notificationSettings.twilioPhoneNumber}
                        onChange={(e) => setNotificationSettings({...notificationSettings, twilioPhoneNumber: e.target.value})}
                        className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Configurações de Notificação</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-email-notifications"
                        checked={notificationSettings.enableEmailNotifications}
                        onChange={(e) => setNotificationSettings({...notificationSettings, enableEmailNotifications: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-email-notifications">Notificações por Email</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enable-sms-notifications"
                        checked={notificationSettings.enableSMSNotifications}
                        onChange={(e) => setNotificationSettings({...notificationSettings, enableSMSNotifications: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="enable-sms-notifications">Notificações por SMS</Label>
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={() => handleSave('Notificações')} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save size={16} className="mr-2" />
                Salvar Configurações de Notificações
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteSettingsManager;
