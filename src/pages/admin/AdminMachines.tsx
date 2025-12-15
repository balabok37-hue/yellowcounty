import { useState, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search, Edit, Trash2, Flame, CheckCircle, XCircle, Loader2, Star, ImageOff } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { allMachines as staticMachines } from '@/data/machines';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type Machine = {
  id: string;
  name: string;
  year: number;
  hours: number | null;
  miles: number | null;
  price: number;
  category: string;
  is_hot_offer: boolean;
  is_sold: boolean;
  is_featured: boolean;
};

type MachineImage = {
  id: string;
  machine_id: string;
  url: string;
  is_primary: boolean;
};

// Build a map from machine name to static image
const staticImageMap = new Map<string, string>();
staticMachines.forEach(m => {
  // Extract key from name (e.g., "2022 Sany SY80U Excavator" -> "sany sy80u")
  const nameLower = m.name.toLowerCase();
  staticImageMap.set(nameLower, m.image);
});

// Find matching static image by name similarity
const findStaticImage = (machineName: string): string | undefined => {
  const nameLower = machineName.toLowerCase();
  
  // First try exact match
  if (staticImageMap.has(nameLower)) {
    return staticImageMap.get(nameLower);
  }
  
  // Find by partial match - check if static name contains DB name parts
  for (const [staticName, image] of staticImageMap.entries()) {
    // Extract model parts (skip year)
    const staticParts = staticName.split(' ').slice(1).join(' ');
    const dbParts = nameLower.split(' ').slice(0).join(' ');
    
    if (staticParts && dbParts.includes(staticParts.split(' ')[0])) {
      return image;
    }
    if (dbParts && staticName.includes(dbParts.split(' ')[0])) {
      return image;
    }
  }
  
  return undefined;
};

export default function AdminMachines() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: machines, isLoading } = useQuery({
    queryKey: ['admin-machines'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('machines')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as Machine[];
    },
  });

  // Fetch primary images from DB
  const { data: machineImages } = useQuery({
    queryKey: ['admin-machine-images'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('machine_images')
        .select('*')
        .eq('is_primary', true);
      
      if (error) throw error;
      return data as MachineImage[];
    },
  });

  // Get image: first try DB, then fallback to static
  const getImageForMachine = (machineId: string, machineName: string) => {
    const dbImage = machineImages?.find(img => img.machine_id === machineId)?.url;
    if (dbImage) return dbImage;
    
    // Fallback to static image
    return findStaticImage(machineName);
  };

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      // First delete associated images from storage and database
      const { data: images } = await supabase
        .from('machine_images')
        .select('url')
        .eq('machine_id', id);
      
      if (images && images.length > 0) {
        const filePaths = images.map(img => {
          const urlParts = img.url.split('/');
          return urlParts.slice(-2).join('/');
        });
        await supabase.storage.from('machine-images').remove(filePaths);
        await supabase.from('machine_images').delete().eq('machine_id', id);
      }
      
      const { error } = await supabase.from('machines').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-machines'] });
      queryClient.invalidateQueries({ queryKey: ['admin-machine-images'] });
      toast.success('Machine deleted successfully');
      setDeleteId(null);
    },
    onError: () => {
      toast.error('Failed to delete machine');
    },
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ id, field, value }: { id: string; field: string; value: boolean }) => {
      const { error } = await supabase
        .from('machines')
        .update({ [field]: value })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-machines'] });
    },
    onError: () => {
      toast.error('Failed to update machine');
    },
  });

  const filteredMachines = machines?.filter((machine) => {
    const matchesSearch = machine.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || machine.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(machines?.map(m => m.category) || [])];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Machines</h1>
          <p className="text-muted-foreground">
            {machines?.length || 0} units in catalog
          </p>
        </div>
        <Button onClick={() => navigate('/admin/machines/new')}>
          <Plus className="mr-2 h-4 w-4" />
          Add Machine
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search machines..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : filteredMachines?.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No machines found. Add your first machine to get started.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredMachines?.map((machine) => {
                const imageUrl = getImageForMachine(machine.id, machine.name);
                return (
                  <div
                    key={machine.id}
                    className="group relative bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] relative bg-muted">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={machine.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageOff className="h-12 w-12 text-muted-foreground/50" />
                        </div>
                      )}
                      
                      {/* Status badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {machine.is_hot_offer && (
                          <Badge className="bg-primary text-primary-foreground">
                            <Flame className="h-3 w-3 mr-1" />
                            HOT
                          </Badge>
                        )}
                        {machine.is_featured && (
                          <Badge variant="secondary">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        {machine.is_sold && (
                          <Badge variant="destructive">SOLD</Badge>
                        )}
                      </div>

                      {/* Quick actions overlay */}
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button
                          size="sm"
                          onClick={() => navigate(`/admin/machines/${machine.id}`)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setDeleteId(machine.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-3 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
                          {machine.year} {machine.name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-primary">
                          ${machine.price.toLocaleString()}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {machine.category}
                        </Badge>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        {machine.hours ? `${machine.hours.toLocaleString()} hrs` : 
                         machine.miles ? `${machine.miles.toLocaleString()} mi` : 'No hours/miles'}
                      </div>

                      {/* Quick toggles */}
                      <div className="flex gap-1 pt-2 border-t">
                        <Button
                          variant={machine.is_hot_offer ? 'default' : 'outline'}
                          size="sm"
                          className="flex-1 h-8 text-xs"
                          onClick={() => toggleMutation.mutate({
                            id: machine.id,
                            field: 'is_hot_offer',
                            value: !machine.is_hot_offer
                          })}
                        >
                          <Flame className="h-3 w-3 mr-1" />
                          Hot
                        </Button>
                        <Button
                          variant={machine.is_featured ? 'secondary' : 'outline'}
                          size="sm"
                          className="flex-1 h-8 text-xs"
                          onClick={() => toggleMutation.mutate({
                            id: machine.id,
                            field: 'is_featured',
                            value: !machine.is_featured
                          })}
                        >
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Button>
                        <Button
                          variant={machine.is_sold ? 'destructive' : 'outline'}
                          size="sm"
                          className="flex-1 h-8 text-xs"
                          onClick={() => toggleMutation.mutate({
                            id: machine.id,
                            field: 'is_sold',
                            value: !machine.is_sold
                          })}
                        >
                          {machine.is_sold ? <XCircle className="h-3 w-3 mr-1" /> : <CheckCircle className="h-3 w-3 mr-1" />}
                          Sold
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Machine</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this machine? This action cannot be undone.
              All associated images will also be deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
