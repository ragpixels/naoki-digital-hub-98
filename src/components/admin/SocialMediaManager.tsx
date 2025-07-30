
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, MessageSquare, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SocialMediaManager = () => {
  const { toast } = useToast();
  const [socialMedia, setSocialMedia] = useState([
    { 
      id: 1, 
      name: 'WhatsApp', 
      icon: 'MessageSquare',
      url: 'https://wa.me/5511999999999',
      color: '#25D366',
      active: true
    },
    { 
      id: 2, 
      name: 'Instagram', 
      icon: 'Instagram',
      url: 'https://instagram.com/exemplo',
      color: '#E4405F',
      active: true
    },
    { 
      id: 3, 
      name: 'Facebook', 
      icon: 'Facebook',
      url: 'https://facebook.com/exemplo',
      color: '#1877F2',
      active: false
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSocial, setEditingSocial] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    icon: 'MessageSquare',
    url: '',
    color: '#3B82F6'
  });

  const iconOptions = [
    { value: 'MessageSquare', label: 'WhatsApp', icon: MessageSquare },
    { value: 'Instagram', label: 'Instagram', icon: Instagram },
    { value: 'Facebook', label: 'Facebook', icon: Facebook },
    { value: 'Linkedin', label: 'LinkedIn', icon: Linkedin },
    { value: 'Twitter', label: 'Twitter', icon: Twitter }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingSocial) {
      setSocialMedia(socialMedia.map(s => 
        s.id === editingSocial.id 
          ? { ...s, ...formData }
          : s
      ));
      toast({
        title: "Rede social atualizada!",
        description: "A rede social foi atualizada com sucesso.",
      });
    } else {
      const newSocial = {
        id: Date.now(),
        ...formData,
        active: true
      };
      setSocialMedia([...socialMedia, newSocial]);
      toast({
        title: "Rede social criada!",
        description: "A nova rede social foi adicionada com sucesso.",
      });
    }
    
    setIsDialogOpen(false);
    setEditingSocial(null);
    setFormData({ name: '', icon: 'MessageSquare', url: '', color: '#3B82F6' });
  };

  const handleEdit = (social) => {
    setEditingSocial(social);
    setFormData({
      name: social.name,
      icon: social.icon,
      url: social.url,
      color: social.color
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    setSocialMedia(socialMedia.filter(s => s.id !== id));
    toast({
      title: "Rede social removida!",
      description: "A rede social foi removida com sucesso.",
    });
  };

  const toggleActive = (id) => {
    setSocialMedia(socialMedia.map(s => 
      s.id === id ? { ...s, active: !s.active } : s
    ));
  };

  const openDialog = () => {
    setEditingSocial(null);
    setFormData({ name: '', icon: 'MessageSquare', url: '', color: '#3B82F6' });
    setIsDialogOpen(true);
  };

  const getIcon = (iconName) => {
    const iconOption = iconOptions.find(opt => opt.value === iconName);
    return iconOption ? iconOption.icon : MessageSquare;
  };

  return (
    <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Gerenciar Redes Sociais
          </CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openDialog} className="bg-purple-600 hover:bg-purple-700 text-white">
                <Plus size={16} className="mr-2" />
                Nova Rede Social
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-slate-900 dark:text-slate-100">
                  {editingSocial ? 'Editar Rede Social' : 'Nova Rede Social'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">Nome</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div>
                  <Label htmlFor="icon" className="text-slate-700 dark:text-slate-300">Ícone</Label>
                  <select 
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => setFormData({...formData, icon: e.target.value})}
                    className="w-full p-2 border rounded-md bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  >
                    {iconOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="url" className="text-slate-700 dark:text-slate-300">URL</Label>
                  <Input
                    id="url"
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData({...formData, url: e.target.value})}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div>
                  <Label htmlFor="color" className="text-slate-700 dark:text-slate-300">Cor</Label>
                  <div className="flex gap-2">
                    <Input
                      id="color"
                      type="color"
                      value={formData.color}
                      onChange={(e) => setFormData({...formData, color: e.target.value})}
                      className="w-20 bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                    <Input
                      value={formData.color}
                      onChange={(e) => setFormData({...formData, color: e.target.value})}
                      placeholder="#3B82F6"
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    {editingSocial ? 'Atualizar' : 'Criar'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                    className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-200 dark:border-slate-700">
                <TableHead className="text-slate-600 dark:text-slate-400">Rede Social</TableHead>
                <TableHead className="text-slate-600 dark:text-slate-400">URL</TableHead>
                <TableHead className="text-slate-600 dark:text-slate-400">Status</TableHead>
                <TableHead className="text-slate-600 dark:text-slate-400">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {socialMedia.map((social) => {
                const IconComponent = getIcon(social.icon);
                return (
                  <TableRow key={social.id} className="border-slate-200 dark:border-slate-700">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <IconComponent size={16} style={{ color: social.color }} />
                        <span className="font-medium text-slate-900 dark:text-slate-100">{social.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {social.url}
                      </a>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleActive(social.id)}
                        className={`${social.active ? 'text-green-600 border-green-300' : 'text-red-600 border-red-300'} hover:bg-slate-100 dark:hover:bg-slate-800`}
                      >
                        {social.active ? 'Ativo' : 'Inativo'}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleEdit(social)}
                          className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <Edit size={14} />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDelete(social.id)}
                          className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMediaManager;
