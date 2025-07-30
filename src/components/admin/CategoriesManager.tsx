
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Tag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CategoriesManager = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState([
    { id: 1, name: 'E-commerce', color: '#3B82F6', count: 5 },
    { id: 2, name: 'Mobile', color: '#10B981', count: 3 },
    { id: 3, name: 'Web App', color: '#8B5CF6', count: 4 },
    { id: 4, name: 'Landing Page', color: '#F59E0B', count: 2 },
    { id: 5, name: 'Sistema', color: '#EF4444', count: 1 }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    color: '#3B82F6'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingCategory) {
      setCategories(categories.map(c => 
        c.id === editingCategory.id 
          ? { ...c, ...formData }
          : c
      ));
      toast({
        title: "Categoria atualizada!",
        description: "A categoria foi atualizada com sucesso.",
      });
    } else {
      const newCategory = {
        id: Date.now(),
        ...formData,
        count: 0
      };
      setCategories([...categories, newCategory]);
      toast({
        title: "Categoria criada!",
        description: "A nova categoria foi adicionada com sucesso.",
      });
    }
    
    setIsDialogOpen(false);
    setEditingCategory(null);
    setFormData({ name: '', color: '#3B82F6' });
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      color: category.color
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(c => c.id !== id));
    toast({
      title: "Categoria removida!",
      description: "A categoria foi removida com sucesso.",
    });
  };

  const openDialog = () => {
    setEditingCategory(null);
    setFormData({ name: '', color: '#3B82F6' });
    setIsDialogOpen(true);
  };

  return (
    <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Gerenciar Categorias
          </CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openDialog} className="bg-green-600 hover:bg-green-700 text-white">
                <Plus size={16} className="mr-2" />
                Nova Categoria
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-slate-900 dark:text-slate-100">
                  {editingCategory ? 'Editar Categoria' : 'Nova Categoria'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">Nome da Categoria</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    {editingCategory ? 'Atualizar' : 'Criar'}
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
                <TableHead className="text-slate-600 dark:text-slate-400">Nome</TableHead>
                <TableHead className="text-slate-600 dark:text-slate-400">Cor</TableHead>
                <TableHead className="text-slate-600 dark:text-slate-400">Projetos</TableHead>
                <TableHead className="text-slate-600 dark:text-slate-400">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id} className="border-slate-200 dark:border-slate-700">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Tag size={16} style={{ color: category.color }} />
                      <span className="font-medium text-slate-900 dark:text-slate-100">{category.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm text-slate-500 dark:text-slate-400">{category.color}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:text-slate-200">
                      {category.count} projetos
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleEdit(category)}
                        className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <Edit size={14} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleDelete(category.id)}
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
  );
};

export default CategoriesManager;
