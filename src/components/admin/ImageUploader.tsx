import { useState, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Upload, Trash2, Star, Loader2, GripVertical, ArrowUp, ArrowDown } from 'lucide-react';
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
  const queryClient = useQueryClient();

  const sortedImages = [...images].sort((a, b) => a.position - b.position);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCropImage(reader.result as string);
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
      queryClient.invalidateQueries({ queryKey: ['admin-machine-images'] });
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setIsUploading(false);
      setCropImage(null);
    }
  };

  const deleteMutation = useMutation({
    mutationFn: async (imageId: string) => {
      const image = images.find(img => img.id === imageId);
      if (image) {
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
      const deletedImage = images.find(img => img.id === imageId);
      const remainingImages = images.filter(img => img.id !== imageId);
      
      // If deleted image was primary, make the first remaining image primary
      if (deletedImage?.is_primary && remainingImages.length > 0) {
        const firstImage = remainingImages.reduce((min, img) => 
          img.position < min.position ? img : min, remainingImages[0]);
        setPrimaryMutation.mutate(firstImage.id);
      }
      
      onImagesChange(remainingImages);
      queryClient.invalidateQueries({ queryKey: ['machine-images', machineId] });
      queryClient.invalidateQueries({ queryKey: ['admin-machine-images'] });
      toast.success('Image deleted');
    },
    onError: () => {
      toast.error('Failed to delete image');
    },
  });

  const setPrimaryMutation = useMutation({
    mutationFn: async (imageId: string) => {
      await supabase
        .from('machine_images')
        .update({ is_primary: false })
        .eq('machine_id', machineId);
      
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
      queryClient.invalidateQueries({ queryKey: ['admin-machine-images'] });
      toast.success('Primary image updated');
    },
    onError: () => {
      toast.error('Failed to update primary image');
    },
  });

  const moveImageMutation = useMutation({
    mutationFn: async ({ imageId, direction }: { imageId: string; direction: 'up' | 'down' }) => {
      const currentIndex = sortedImages.findIndex(img => img.id === imageId);
      if (currentIndex === -1) return;
      
      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      if (newIndex < 0 || newIndex >= sortedImages.length) return;
      
      const currentImage = sortedImages[currentIndex];
      const swapImage = sortedImages[newIndex];
      
      // Swap positions
      await supabase
        .from('machine_images')
        .update({ position: swapImage.position })
        .eq('id', currentImage.id);
      
      await supabase
        .from('machine_images')
        .update({ position: currentImage.position })
        .eq('id', swapImage.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['machine-images', machineId] });
      toast.success('Image order updated');
    },
    onError: () => {
      toast.error('Failed to update image order');
    },
  });

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Images ({images.length})</CardTitle>
          <CardDescription>
            Upload photos of the machine. The primary image (marked with ★) will be shown on the catalog card.
            Use arrows to reorder images.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Upload button */}
          <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
            {isUploading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                <span className="text-muted-foreground">Uploading...</span>
              </>
            ) : (
              <>
                <Upload className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Click to upload new image</span>
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

          {/* Images list */}
          {sortedImages.length > 0 && (
            <div className="space-y-2">
              {sortedImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`flex items-center gap-3 p-2 rounded-lg border ${
                    image.is_primary ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-16 rounded overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={image.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {image.is_primary && (
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                          ★ Primary
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">
                        Position {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1">
                    {/* Move up */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => moveImageMutation.mutate({ imageId: image.id, direction: 'up' })}
                      disabled={index === 0 || moveImageMutation.isPending}
                      title="Move up"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    
                    {/* Move down */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => moveImageMutation.mutate({ imageId: image.id, direction: 'down' })}
                      disabled={index === sortedImages.length - 1 || moveImageMutation.isPending}
                      title="Move down"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>

                    {/* Set primary */}
                    <Button
                      variant={image.is_primary ? 'default' : 'ghost'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setPrimaryMutation.mutate(image.id)}
                      disabled={image.is_primary || setPrimaryMutation.isPending}
                      title="Set as primary"
                    >
                      <Star className={`h-4 w-4 ${image.is_primary ? 'fill-current' : ''}`} />
                    </Button>

                    {/* Delete */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => deleteMutation.mutate(image.id)}
                      disabled={deleteMutation.isPending}
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {images.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No images uploaded yet. Upload your first image above.
            </div>
          )}
        </CardContent>
      </Card>

      {cropImage && (
        <ImageCropper
          imageSrc={cropImage}
          onComplete={handleCropComplete}
          onCancel={() => setCropImage(null)}
        />
      )}
    </>
  );
}
