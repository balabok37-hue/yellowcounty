import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Loader2, Save, Plus, Trash2, GripVertical } from 'lucide-react';
import { toast } from 'sonner';
import ImageUploader from '@/components/admin/ImageUploader';
import SpecsEditor from '@/components/admin/SpecsEditor';
import { Json } from '@/integrations/supabase/types';

const categories = ['earthmoving', 'loaders', 'telehandlers', 'trucks', 'specialty'];

type MachineImage = {
  id: string;
  url: string;
  position: number;
  is_primary: boolean;
};

export default function AdminMachineEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isNew = id === 'new';

  const [formData, setFormData] = useState({
    name: '',
    year: new Date().getFullYear(),
    hours: '',
    miles: '',
    price: '',
    original_price: '',
    discount: '',
    location: 'Billings, MT',
    category: 'earthmoving',
    description: '',
    is_hot_offer: false,
    is_sold: false,
    is_featured: false,
    is_reserved: false,
    image_position: '',
    specs: {} as Record<string, string>,
  });

  const [images, setImages] = useState<MachineImage[]>([]);

  const { data: machine, isLoading } = useQuery({
    queryKey: ['admin-machine', id],
    queryFn: async () => {
      if (isNew) return null;
      const { data, error } = await supabase
        .from('machines')
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !isNew,
  });

  const { data: machineImages } = useQuery({
    queryKey: ['machine-images', id],
    queryFn: async () => {
      if (isNew) return [];
      const { data, error } = await supabase
        .from('machine_images')
        .select('*')
        .eq('machine_id', id)
        .order('position');
      if (error) throw error;
      return data as MachineImage[];
    },
    enabled: !isNew,
  });

  useEffect(() => {
    if (machine) {
      setFormData({
        name: machine.name,
        year: machine.year,
        hours: machine.hours?.toString() || '',
        miles: machine.miles?.toString() || '',
        price: machine.price?.toString() || '',
        original_price: machine.original_price?.toString() || '',
        discount: machine.discount?.toString() || '',
        location: machine.location,
        category: machine.category,
        description: machine.description || '',
        is_hot_offer: machine.is_hot_offer || false,
        is_sold: machine.is_sold || false,
        is_featured: machine.is_featured || false,
        is_reserved: (machine as any).is_reserved || false,
        image_position: machine.image_position || '',
        specs: (machine.specs as Record<string, string>) || {},
      });
    }
  }, [machine]);

  useEffect(() => {
    if (machineImages) {
      setImages(machineImages);
    }
  }, [machineImages]);

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        name: formData.name,
        year: formData.year,
        hours: formData.hours ? parseInt(formData.hours) : null,
        miles: formData.miles ? parseInt(formData.miles) : null,
        price: parseFloat(formData.price),
        original_price: formData.original_price ? parseFloat(formData.original_price) : null,
        discount: formData.discount ? parseInt(formData.discount) : null,
        location: formData.location,
        category: formData.category,
        description: formData.description,
        is_hot_offer: formData.is_hot_offer,
        is_sold: formData.is_sold,
        is_featured: formData.is_featured,
        is_reserved: formData.is_reserved,
        image_position: formData.image_position || null,
        specs: formData.specs as Json,
      };

      if (isNew) {
        const { data, error } = await supabase
          .from('machines')
          .insert(payload)
          .select()
          .single();
        if (error) throw error;
        return data;
      } else {
        const { data, error } = await supabase
          .from('machines')
          .update(payload)
          .eq('id', id)
          .select()
          .single();
        if (error) throw error;
        return data;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['admin-machines'] });
      queryClient.invalidateQueries({ queryKey: ['admin-machine', id] });
      toast.success(isNew ? 'Machine created successfully' : 'Machine updated successfully');
      if (isNew && data?.id) {
        navigate(`/admin/machines/${data.id}`);
      }
    },
    onError: (error) => {
      console.error('Save error:', error);
      toast.error('Failed to save machine');
    },
  });

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/admin/machines')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {isNew ? 'Add New Machine' : 'Edit Machine'}
          </h1>
        </div>
        <Button onClick={() => saveMutation.mutate()} disabled={saveMutation.isPending}>
          {saveMutation.isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Save
        </Button>
      </div>

      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="images" disabled={isNew}>Images</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="2024 Caterpillar 336 Excavator"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year *</Label>
                  <Input
                    id="year"
                    type="number"
                    value={formData.year}
                    onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hours">Hours</Label>
                  <Input
                    id="hours"
                    type="number"
                    value={formData.hours}
                    onChange={(e) => handleInputChange('hours', e.target.value)}
                    placeholder="1500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="miles">Miles (for trucks)</Label>
                  <Input
                    id="miles"
                    type="number"
                    value={formData.miles}
                    onChange={(e) => handleInputChange('miles', e.target.value)}
                    placeholder="50000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleInputChange('category', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  placeholder="Detailed description of the machine..."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Sale Price *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="85000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="original_price">Original Price</Label>
                  <Input
                    id="original_price"
                    type="number"
                    value={formData.original_price}
                    onChange={(e) => handleInputChange('original_price', e.target.value)}
                    placeholder="100000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount">Discount %</Label>
                  <Input
                    id="discount"
                    type="number"
                    value={formData.discount}
                    onChange={(e) => handleInputChange('discount', e.target.value)}
                    placeholder="15"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Hot Offer</Label>
                  <p className="text-sm text-muted-foreground">Show as featured hot deal</p>
                </div>
                <Switch
                  checked={formData.is_hot_offer}
                  onCheckedChange={(checked) => handleInputChange('is_hot_offer', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Featured</Label>
                  <p className="text-sm text-muted-foreground">Show in featured section on homepage</p>
                </div>
                <Switch
                  checked={formData.is_featured}
                  onCheckedChange={(checked) => handleInputChange('is_featured', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Reserved</Label>
                  <p className="text-sm text-muted-foreground">Mark as reserved for a buyer</p>
                </div>
                <Switch
                  checked={formData.is_reserved}
                  onCheckedChange={(checked) => handleInputChange('is_reserved', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Sold</Label>
                  <p className="text-sm text-muted-foreground">Mark as sold (will show overlay)</p>
                </div>
                <Switch
                  checked={formData.is_sold}
                  onCheckedChange={(checked) => handleInputChange('is_sold', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images">
          {!isNew && id && (
            <ImageUploader machineId={id} images={images} onImagesChange={setImages} />
          )}
        </TabsContent>

        <TabsContent value="specs">
          <SpecsEditor
            specs={formData.specs}
            onChange={(specs) => handleInputChange('specs', specs as any)}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
