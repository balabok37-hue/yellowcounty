import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, DollarSign, Flame, CheckCircle } from 'lucide-react';

export default function AdminDashboard() {
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const { data: machines, error } = await supabase
        .from('machines')
        .select('id, price, is_hot_offer, is_sold');
      
      if (error) throw error;
      
      const total = machines?.length || 0;
      const active = machines?.filter(m => !m.is_sold).length || 0;
      const sold = machines?.filter(m => m.is_sold).length || 0;
      const hotOffers = machines?.filter(m => m.is_hot_offer && !m.is_sold).length || 0;
      const totalValue = machines?.reduce((acc, m) => acc + Number(m.price), 0) || 0;
      
      return { total, active, sold, hotOffers, totalValue };
    },
  });

  const statCards = [
    {
      title: 'Total Machines',
      value: stats?.total || 0,
      icon: Package,
      color: 'text-blue-500',
    },
    {
      title: 'Active Listings',
      value: stats?.active || 0,
      icon: CheckCircle,
      color: 'text-green-500',
    },
    {
      title: 'Hot Offers',
      value: stats?.hotOffers || 0,
      icon: Flame,
      color: 'text-orange-500',
    },
    {
      title: 'Total Value',
      value: `$${(stats?.totalValue || 0).toLocaleString()}`,
      icon: DollarSign,
      color: 'text-primary',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your equipment catalog</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-muted-foreground">
            Use the sidebar to navigate to Machines to add or edit equipment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
