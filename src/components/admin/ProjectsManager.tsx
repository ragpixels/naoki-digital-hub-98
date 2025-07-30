
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Eye, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ImageUpload from '@/components/admin/ImageUpload';

const ProjectsManager = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Plataforma de vendas online com design responsivo',
      category: 'E-commerce',
      image: '/placeholder.svg',
      url: '#',
      status: 'Ativo'
    },
    {
      id: 2,
      title: 'App Mobile',
      description: 'Aplicativo móvel para gerenciamento de tarefas',
      category: 'Mobile',
      image: '/placeholder.svg',
      url: '#',
      status: 'Ativo'
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    url: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProject) {
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { ...p, ...formData }
          : p
      ));
      toast({
        title: "Projeto atualizado!",
        description: "O projeto foi atualizado com sucesso.",
      });
    } else {
      const newProject = {
        id: Date.now(),
        ...formData,
        status: 'Ativo'
      };
      setProjects([...projects, newProject]);
      toast({
        title: "Projeto criado!",
        description: "O novo projeto foi adicionado com sucesso.",
      });
    }
    
    setIsDialogOpen(false);
    setEditingProject(null);
    setFormData({ title: '', description: '', category: '', image: '', url: '' });
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      image: project.image,
      url: project.url
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Projeto removido!",
      description: "O projeto foi removido com sucesso.",
    });
  };

  const openDialog = () => {
    setEditingProject(null);
    setFormData({ title: '', description: '', category: '', image: '', url: '' });
    setIsDialogOpen(true);
  };

  return (
    <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Gerenciar Projetos
          </CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openDialog} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus size={16} className="mr-2" />
                Novo Projeto
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-slate-900 dark:text-slate-100">
                  {editingProject ? 'Editar Projeto' : 'Novo Projeto'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-slate-700 dark:text-slate-300">Título</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-slate-700 dark:text-slate-300">Descrição</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div>
                  <Label htmlFor="category" className="text-slate-700 dark:text-slate-300">Categoria</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    required
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <ImageUpload
                  label="Imagem do Projeto"
                  value={formData.image}
                  onChange={(url) => setFormData({...formData, image: url})}
                  placeholder="URL da imagem ou faça upload de um arquivo"
                  accept="image/*"
                />
                <div>
                  <Label htmlFor="url" className="text-slate-700 dark:text-slate-300">URL do Projeto</Label>
                  <Input
                    id="url"
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData({...formData, url: e.target.value})}
                    className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    {editingProject ? 'Atualizar' : 'Criar'}
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
                <TableHead className="text-slate-600 dark:text-slate-400">Título</TableHead>
                <TableHead className="text-slate-600 dark:text-slate-400">Categoria</TableHead>
                <TableHead className="text-slate-600 dark:text-slate-400">Status</TableHead>
                <TableHead className="text-slate-600 dark:text-slate-400">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} className="border-slate-200 dark:border-slate-700">
                  <TableCell>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100">{project.title}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{project.description}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-900 dark:text-slate-100">{project.category}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/20 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">
                      {project.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleEdit(project)}
                        className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <Edit size={14} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleDelete(project.id)}
                        className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <Trash2 size={14} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <ExternalLink size={14} />
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
  );
};

export default ProjectsManager;
