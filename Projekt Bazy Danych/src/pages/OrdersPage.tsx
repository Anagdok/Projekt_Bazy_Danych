import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { Package } from 'lucide-react';
import LoadingSpinner from '../components/common/LoadingSpinner';

interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  game: {
    title: string;
    image_url: string;
  };
}

interface Order {
  id: string;
  created_at: string;
  total_amount: number;
  status: string;
  order_items: OrderItem[];
}

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    fetchOrders();
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            *,
            game:game_id (
              title,
              image_url
            )
          )
        `)
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <Package size={48} className="mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-2">No Orders Yet</h2>
            <p className="text-gray-400 mb-4">
              Looks like you haven't made any purchases yet.
            </p>
            <button
              onClick={() => navigate('/games')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Browse Games
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>
        
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-700 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Order placed</p>
                  <p className="font-medium">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total amount</p>
                  <p className="font-medium">{order.total_amount.toFixed(2)} zł</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Order status</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="space-y-4">
                  {order.order_items.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <img
                        src={item.game.image_url}
                        alt={item.game.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium">{item.game.title}</h3>
                        <p className="text-sm text-gray-400">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{item.price.toFixed(2)} zł</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;