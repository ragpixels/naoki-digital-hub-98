
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-900 shadow-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-slate-300 hover:bg-slate-800"
            >
              <ArrowLeft size={16} />
              Voltar ao Site
            </Button>
            <div className="h-6 w-px bg-slate-600" />
            <h2 className="text-xl font-semibold text-slate-100">
              Admin Panel
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-slate-300 hover:bg-slate-800"
            >
              <Settings size={16} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-slate-300 hover:bg-slate-800"
            >
              <User size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
