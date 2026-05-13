"use client";
import React, { useState, useEffect } from 'react';

export default function MyOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All Orders');

  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      try {
        const res = await fetch('/api/orders');
        const data = await res.json();
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  const filteredOrders = activeTab === 'All Orders' 
    ? orders 
    : orders.filter((o: any) => o.order_type === (activeTab === 'Medicines' ? 'Medicine' : 'Lab Test'));

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-heading">My Orders</h1>
        <p className="text-gray-500 mt-2">Track your healthcare purchases live from Supabase</p>
      </div>

      <div className="flex gap-8 border-b border-gray-100 mb-8">
        {['All Orders', 'Medicines', 'Lab Tests'].map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-bold transition-all ${
              activeTab === tab ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-brand-primary font-bold">Updating orders...</div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order: any) => (
              <div key={order.id} className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between group shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary text-xl">
                    {order.order_type === 'Medicine' ? '💊' : '🧪'}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-heading group-hover:text-brand-primary transition-colors">{order.order_number}</h4>
                    <p className="text-sm text-gray-400 font-medium">
                      {new Date(order.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex-1 md:px-12">
                  <p className="text-sm font-bold text-gray-600 truncate max-w-[300px]">{order.items}</p>
                  <p className="text-brand-primary font-black mt-1">{order.total_price}</p>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                  order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-brand-primary'
                }`}>
                  {order.status}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-gray-400 font-medium border-2 border-dashed border-gray-100 rounded-3xl">
              No orders found in this category.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
