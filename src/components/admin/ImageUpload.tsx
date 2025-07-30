
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X, Loader2 } from 'lucide-react';
import { useImageUpload } from '@/hooks/useImageUpload';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  accept?: string;
  placeholder?: string;
  showUrlInput?: boolean;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label = "Imagem",
  accept = "image/*",
  placeholder = "URL da imagem ou clique para fazer upload",
  showUrlInput = true,
  className = ""
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadImage, isUploading } = useImageUpload();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await uploadImage(file);
        onChange(imageUrl);
      } catch (error) {
        console.error('Erro no upload:', error);
      }
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const clearImage = () => {
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label>{label}</Label>
      
      {showUrlInput && (
        <div className="flex gap-2">
          <Input
            type="url"
            value={value}
            onChange={handleUrlChange}
            placeholder={placeholder}
            className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
          />
          {value && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={clearImage}
              className="px-2"
            >
              <X size={16} />
            </Button>
          )}
        </div>
      )}
      
      <div className="flex gap-2">
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileUpload}
          className="hidden"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="flex-1 border-slate-300 dark:border-slate-600"
        >
          {isUploading ? (
            <>
              <Loader2 size={16} className="mr-2 animate-spin" />
              Carregando...
            </>
          ) : (
            <>
              <Upload size={16} className="mr-2" />
              Escolher arquivo
            </>
          )}
        </Button>
      </div>
      
      {value && (
        <div className="mt-2">
          <img 
            src={value} 
            alt="Preview" 
            className="max-w-full h-32 object-cover rounded-md border border-slate-200 dark:border-slate-700"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
