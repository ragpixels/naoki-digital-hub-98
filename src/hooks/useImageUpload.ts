
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useImageUpload = () => {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      setIsUploading(true);
      
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setIsUploading(false);
          toast({
            title: "Imagem carregada!",
            description: "A imagem foi carregada com sucesso.",
          });
          resolve(result);
        } else {
          setIsUploading(false);
          reject(new Error('Erro ao processar a imagem'));
        }
      };
      
      reader.onerror = () => {
        setIsUploading(false);
        toast({
          title: "Erro no upload",
          description: "Não foi possível carregar a imagem.",
          variant: "destructive",
        });
        reject(new Error('Erro ao ler o arquivo'));
      };
      
      reader.readAsDataURL(file);
    });
  };

  return {
    uploadImage,
    isUploading
  };
};
