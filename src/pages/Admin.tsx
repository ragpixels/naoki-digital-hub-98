
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, FolderPlus, Tags, MessageSquare, Users, BarChart3, Type, Link, Palette, Globe } from 'lucide-react';
import ProjectsManager from '@/components/admin/ProjectsManager';
import CategoriesManager from '@/components/admin/CategoriesManager';
import SocialMediaManager from '@/components/admin/SocialMediaManager';
import ContentManager from '@/components/admin/ContentManager';
import LinksManager from '@/components/admin/LinksManager';
import BrandManager from '@/components/admin/BrandManager';
import SiteSettingsManager from '@/components/admin/SiteSettingsManager';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminStats from '@/components/admin/AdminStats';

const Admin = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100" data-admin-panel>
      <AdminHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Painel Administrativo
          </h1>
          <p className="text-slate-400">
            Gerencie todo o conteúdo do seu site de forma fácil e intuitiva
          </p>
        </div>

        <AdminStats />

        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 lg:w-auto bg-slate-800 shadow-lg border border-slate-700">
            <TabsTrigger 
              value="content" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-300 text-slate-300 hover:bg-slate-700"
            >
              <Type size={16} />
              <span className="hidden sm:inline">Conteúdo</span>
            </TabsTrigger>
            <TabsTrigger 
              value="links" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-300 text-slate-300 hover:bg-slate-700"
            >
              <Link size={16} />
              <span className="hidden sm:inline">Links</span>
            </TabsTrigger>
            <TabsTrigger 
              value="brand" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-300 text-slate-300 hover:bg-slate-700"
            >
              <Palette size={16} />
              <span className="hidden sm:inline">Marca</span>
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-300 text-slate-300 hover:bg-slate-700"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">Config</span>
            </TabsTrigger>
            <TabsTrigger 
              value="projects" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-300 text-slate-300 hover:bg-slate-700"
            >
              <FolderPlus size={16} />
              <span className="hidden sm:inline">Projetos</span>
            </TabsTrigger>
            <TabsTrigger 
              value="categories" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-300 text-slate-300 hover:bg-slate-700"
            >
              <Tags size={16} />
              <span className="hidden sm:inline">Categorias</span>
            </TabsTrigger>
            <TabsTrigger 
              value="social" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-300 text-slate-300 hover:bg-slate-700"
            >
              <MessageSquare size={16} />
              <span className="hidden sm:inline">Redes</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <ContentManager />
          </TabsContent>

          <TabsContent value="links" className="space-y-6">
            <LinksManager />
          </TabsContent>

          <TabsContent value="brand" className="space-y-6">
            <BrandManager />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <SiteSettingsManager />
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <ProjectsManager />
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <CategoriesManager />
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            <SocialMediaManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
