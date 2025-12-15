import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search, Edit, Trash2, Flame, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
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

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('machines').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-machines'] });
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
          <p className="text-muted-foreground">Manage your equipment catalog</p>
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
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Hours/Miles</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMachines?.map((machine) => (
                    <TableRow key={machine.id}>
                      <TableCell className="font-medium max-w-[200px] truncate">
                        {machine.name}
                      </TableCell>
                      <TableCell>{machine.year}</TableCell>
                      <TableCell>
                        {machine.hours ? `${machine.hours.toLocaleString()} hrs` : 
                         machine.miles ? `${machine.miles.toLocaleString()} mi` : '-'}
                      </TableCell>
                      <TableCell>${machine.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{machine.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button
                            variant={machine.is_hot_offer ? 'default' : 'outline'}
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => toggleMutation.mutate({
                              id: machine.id,
                              field: 'is_hot_offer',
                              value: !machine.is_hot_offer
                            })}
                            title="Hot Offer"
                          >
                            <Flame className="h-3 w-3" />
                          </Button>
                          <Button
                            variant={machine.is_sold ? 'destructive' : 'outline'}
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => toggleMutation.mutate({
                              id: machine.id,
                              field: 'is_sold',
                              value: !machine.is_sold
                            })}
                            title="Sold"
                          >
                            {machine.is_sold ? <XCircle className="h-3 w-3" /> : <CheckCircle className="h-3 w-3" />}
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate(`/admin/machines/${machine.id}`)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setDeleteId(machine.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
