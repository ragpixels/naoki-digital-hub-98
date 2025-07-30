
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link, Save, ExternalLink, Edit, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LinksManager = () => {
  const { toast } = useToast();
  
  const [links, setLinks] = useState([
    { id: 1, name: 'WhatsApp Principal', url: 'https://wa.me/5511999999999', category: 'Contato', active: true },
    { id: 2, name: 'Email Principal', url: 'mailto:contato@naoki.com.br', category: 'Contato', active: true },
    { id: 3, name: 'Instagram', url: 'https://instagram.com/naoki', category: 'Social', active: true },
    { id: 4, name: 'Facebook', url: 'https://facebook.com/naoki', category: 'Social', active: false },
    { id: 5, name: 'LinkedIn', url: 'https://linkedin.com/company/naoki', category: 'Social', active: true },
    { id: 6, name: 'Portfolio GitHub', url: 'https://github.com/naoki', category: 'Técnico', active: true },
  ]);

  const [globalSettings, setGlobalSettings] = useState({
    whatsappNumber: '5511999999999',
    whatsappMessage: 'Olá! Gostaria de falar com um especialista.',
    email: 'contato@naoki.com.br',
    phone: '(11) 99999-9999',
    address: 'São Paulo, SP - Brasil',
    defaultWhatsappCTA: 'Falar no WhatsApp'
  });

  const [editingLink, setEditingLink] = useState(null);
  const [newLink, setNewLink] = useState({ name: '', url: '', category: 'Contato' });

  const handleSaveLink = () => {
    if (editingLink) {
      setLinks(links.map(link => 
        link.id === editingLink.id 
          ? { ...link, ...newLink }
          : link
      ));
      setEditingLink(null);
      toast({
        title: "Link atualizado!",
        description: "O link foi atualizado com sucesso.",
      });
    } else {
      const id = Date.now();
      setLinks([...links, { id, ...newLink, active: true }]);
      toast({
        title: "Link criado!",
        description: "O novo link foi adicionado com sucesso.",
      });
    }
    setNewLink({ name: '', url: '', category: 'Contato' });
  };

  const handleEditLink = (link) => {
    setEditingLink(link);
    setNewLink({ name: link.name, url: link.url, category: link.category });
  };

  const handleDeleteLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
    toast({
      title: "Link removido!",
      description: "O link foi removido com sucesso.",
    });
  };

  const toggleLinkActive = (id) => {
    setLinks(links.map(link => 
      link.id === id ? { ...link, active: !link.active } : link
    ));
  };

  const handleSaveGlobalSettings = () => {
    toast({
      title: "Configurações salvas!",
      description: "As configurações globais foram salvas com sucesso.",
    });
  };

  const testLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* Global Settings */}
      <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
            <Link size={20} />
            Configurações Globais de Contato
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="whatsapp-number">Número do WhatsApp</Label>
              <Input
                id="whatsapp-number"
                value={globalSettings.whatsappNumber}
                onChange={(e) => setGlobalSettings({...globalSettings, whatsappNumber: e.target.value})}
                placeholder="5511999999999"
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
              />
            </div>
            <div>
              <Label htmlFor="whatsapp-message">Mensagem Padrão WhatsApp</Label>
              <Input
                id="whatsapp-message"
                value={globalSettings.whatsappMessage}
                onChange={(e) => setGlobalSettings({...globalSettings, whatsappMessage: e.target.value})}
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Principal</Label>
              <Input
                id="email"
                type="email"
                value={globalSettings.email}
                onChange={(e) => setGlobalSettings({...globalSettings, email: e.target.value})}
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                value={globalSettings.phone}
                onChange={(e) => setGlobalSettings({...globalSettings, phone: e.target.value})}
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
              />
            </div>
            <div>
              <Label htmlFor="address">Endereço</Label>
              <Input
                id="address"
                value={globalSettings.address}
                onChange={(e) => setGlobalSettings({...globalSettings, address: e.target.value})}
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
              />
            </div>
            <div>
              <Label htmlFor="whatsapp-cta">Texto Padrão do Botão WhatsApp</Label>
              <Input
                id="whatsapp-cta"
                value={globalSettings.defaultWhatsappCTA}
                onChange={(e) => setGlobalSettings({...globalSettings, defaultWhatsappCTA: e.target.value})}
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
              />
            </div>
          </div>
          <Button onClick={handleSaveGlobalSettings} className="mt-4 bg-blue-600 hover:bg-blue-700">
            <Save size={16} className="mr-2" />
            Salvar Configurações Globais
          </Button>
        </CardContent>
      </Card>

      {/* Links Management */}
      <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Gerenciar Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add/Edit Link Form */}
          <div className="mb-6 p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900">
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
              {editingLink ? 'Editar Link' : 'Adicionar Novo Link'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="link-name">Nome do Link</Label>
                <Input
                  id="link-name"
                  value={newLink.name}
                  onChange={(e) => setNewLink({...newLink, name: e.target.value})}
                  placeholder="Ex: WhatsApp Suporte"
                  className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                />
              </div>
              <div>
                <Label htmlFor="link-url">URL</Label>
                <Input
                  id="link-url"
                  value={newLink.url}
                  onChange={(e) => setNewLink({...newLink, url: e.target.value})}
                  placeholder="https://..."
                  className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                />
              </div>
              <div>
                <Label htmlFor="link-category">Categoria</Label>
                <select
                  id="link-category"
                  value={newLink.category}
                  onChange={(e) => setNewLink({...newLink, category: e.target.value})}
                  className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                >
                  <option value="Contato">Contato</option>
                  <option value="Social">Social</option>
                  <option value="Técnico">Técnico</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={handleSaveLink} className="bg-blue-600 hover:bg-blue-700">
                <Save size={16} className="mr-2" />
                {editingLink ? 'Atualizar' : 'Adicionar'} Link
              </Button>
              {editingLink && (
                <Button 
                  onClick={() => {
                    setEditingLink(null);
                    setNewLink({ name: '', url: '', category: 'Contato' });
                  }}
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600"
                >
                  Cancelar
                </Button>
              )}
            </div>
          </div>

          {/* Links Table */}
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-200 dark:border-slate-700">
                  <TableHead className="text-slate-600 dark:text-slate-400">Nome</TableHead>
                  <TableHead className="text-slate-600 dark:text-slate-400">URL</TableHead>
                  <TableHead className="text-slate-600 dark:text-slate-400">Categoria</TableHead>
                  <TableHead className="text-slate-600 dark:text-slate-400">Status</TableHead>
                  <TableHead className="text-slate-600 dark:text-slate-400">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {links.map((link) => (
                  <TableRow key={link.id} className="border-slate-200 dark:border-slate-700">
                    <TableCell className="font-medium text-slate-900 dark:text-slate-100">
                      {link.name}
                    </TableCell>
                    <TableCell className="text-slate-600 dark:text-slate-400">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        {link.url.substring(0, 50)}...
                        <ExternalLink size={12} />
                      </a>
                    </TableCell>
                    <TableCell className="text-slate-900 dark:text-slate-100">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs">
                        {link.category}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleLinkActive(link.id)}
                        className={`${link.active ? 'text-green-600 border-green-300' : 'text-red-600 border-red-300'} hover:bg-slate-100 dark:hover:bg-slate-800`}
                      >
                        {link.active ? 'Ativo' : 'Inativo'}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => testLink(link.url)}
                          className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <ExternalLink size={14} />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleEditLink(link)}
                          className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <Edit size={14} />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDeleteLink(link.id)}
                          className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinksManager;
