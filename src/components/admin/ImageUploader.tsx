import { useState, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Trash2, GripVertical, Star, Loader2, X } from 'lucide-react';
import { toast } from 'sonner';
import ImageCropper from './ImageCropper';

type MachineImage = {
  id: string;
  url: string;
  position: number;
  is_primary: boolean;
};

interface ImageUploaderProps {
  machineId: string;
  images: MachineImage[];
  onImagesChange: (images: MachineImage[]) => void;
}

export default function ImageUploader({ machineId, images, onImagesChange }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [cropImage, setCropImage] = useState<string | null>(null);
  const [cropFile, setCropFile] = useState<File | null>(null);
  const queryClient = useQueryClient();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCropImage(reader.result as string);
        setCropFile(file);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  const handleCropComplete = async (croppedBlob: Blob) => {
    setIsUploading(true);
    try {
      const fileName = `${machineId}/${Date.now()}.jpg`;
      
      const { error: uploadError } = await supabase.storage
        .from('machine-images')
        .upload(fileName, croppedBlob, {
          contentType: 'image/jpeg',
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('machine-images')
        .getPublicUrl(fileName);

      const newPosition = images.length;
      const isPrimary = images.length === 0;

      const { data: newImage, error: insertError } = await supabase
        .from('machine_images')
        .insert({
          machine_id: machineId,
          url: publicUrl,
          position: newPosition,
          is_primary: isPrimary,
        })
        .select()
        .single();

      if (insertError) throw insertError;

      onImagesChange([...images, newImage as MachineImage]);
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setIsUploading(false);
      setCropImage(null);
      setCropFile(null);
    }
  };

  const deleteMutation = useMutation({
    mutationFn: async (imageId: string) => {
      const image = images.find(img => img.id === imageId);
      if (image) {
        // Extract file path from URL
        const urlParts = image.url.split('/');
        const filePath = urlParts.slice(-2).join('/');
        
        await supabase.storage.from('machine-images').remove([filePath]);
      }
      
      const { error } = await supabase
        .from('machine_images')
        .delete()
        .eq('id', imageId);
      
      if (error) throw error;
    },
    onSuccess: (_, imageId) => {
      onImagesChange(images.filter(img => img.id !== imageId));
      queryClient.invalidateQueries({ queryKey: ['machine-images', machineId] });
      toast.success('Image deleted');
    },
    onError: () => {
      toast.error('Failed to delete image');
    },
  });

  const setPrimaryMutation = useMutation({
    mutationFn: async (imageId: string) => {
      // First, unset all as primary
      await supabase
        .from('machine_images')
        .update({ is_primary: false })
        .eq('machine_id', machineId);
      
      // Then set the selected one as primary
      const { error } = await supabase
        .from('machine_images')
        .update({ is_primary: true })
        .eq('id', imageId);
      
      if (error) throw error;
    },
    onSuccess: (_, imageId) => {
      onImagesChange(images.map(img => ({
        ...img,
        is_primary: img.id === imageId
      })));
      queryClient.invalidateQueries({ queryKey: ['machine-images', machineId] });
      toast.success('Primary image updated');
    },
    onError: () => {
      toast.error('Failed to update primary image');
    },
  });

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Images</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group aspect-[4/3] bg-muted rounded-lg overflow-hidden"
              >
                <img
                  src={image.url}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setPrimaryMutation.mutate(image.id)}
                    disabled={image.is_primary}
                  >
                    <Star className={`h-4 w-4 ${image.is_primary ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => deleteMutation.mutate(image.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                {image.is_primary && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-yellow-950 text-xs px-2 py-0.5 rounded">
                    Primary
                  </div>
                )}
              </div>
            ))}
            
            <label className="aspect-[4/3] border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
              {isUploading ? (
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              ) : (
                <>
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">Upload</span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileSelect}
                disabled={isUploading}
              />
            </label>
          </div>

          <p className="text-sm text-muted-foreground">
            Click the star to set as primary image. Primary image will be shown on the catalog card.
          </p>
        </CardContent>
      </Card>

      {cropImage && (
        <ImageCropper
          imageSrc={cropImage}
          onComplete={handleCropComplete}
          onCancel={() => {
            setCropImage(null);
            setCropFile(null);
          }}
        />
      )}
    </>
  );
}
