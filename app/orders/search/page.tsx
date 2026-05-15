"use client";
import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronLeft, ShieldCheck, Clock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function StoreSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [radius, setRadius] = useState(10);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login?message=login_required');
      } else {
        setIsCheckingAuth(false);
      }
    };
    checkAuth();
  }, [router]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-blue-600 font-bold animate-pulse">Verifying access...</div>
      </div>
    );
  }

  const dummyStores = [
    {
      id: 1,
      name: 'MedyGhar Flagship Pharmacy',
      type: 'Pharmacy',
      rating: 4.9,
      distance: '0.8 km',
      address: 'Sector 44, Near Huda Metro, Gurugram',
      isVerified: true,
      isOpen: true,
      deliveryTime: '20-30 mins'
    },
    {
      id: 2,
      name: 'City Health Diagnostic Lab',
      type: 'Lab',
      rating: 4.7,
      distance: '1.2 km',
      address: 'DLF Phase 3, Cyber City, Gurugram',
      isVerified: true,
      isOpen: true,
      deliveryTime: 'Same Day'
    },
    {
      id: 3,
      name: 'Modern Wellness Store',
      type: 'Pharmacy',
      rating: 4.5,
      distance: '2.5 km',
      address: 'Sushant Lok 1, Gurugram',
      isVerified: true,
      isOpen: true,
      deliveryTime: '45-60 mins'
    },
    {
      id: 4,
      name: 'Apollo Diagnostics Centre',
      type: 'Lab',
      rating: 4.8,
      distance: '3.0 km',
      address: 'Golf Course Road, Gurugram',
      isVerified: true,
      isOpen: true,
      deliveryTime: '24 hrs'
    }
  ];

  const filteredStores = dummyStores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          store.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-50 px-4 py-4 flex items-center gap-4">
        <Link href="/" className="text-blue-600 hover:bg-blue-50 p-1 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-gray-800">Select MediGhar Store</h1>
      </div>

      {/* Search and Radius Filter */}
      <div className="px-4 py-6 flex gap-3">
        <div className="flex-[4] relative flex items-center bg-white border border-gray-200 rounded-2xl px-4 py-3.5 focus-within:border-blue-500 focus-within:shadow-sm transition-all shadow-sm">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input 
            type="text" 
            placeholder="Search store or area..."
            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400 font-medium"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex-1 min-w-[100px] bg-white border border-gray-200 rounded-2xl p-2 flex flex-col items-center justify-center shadow-sm">
          <span className="text-[10px] font-bold text-gray-400 uppercase">Rad(km)</span>
          <input 
            type="number" 
            value={radius}
            onChange={(e) => setRadius(parseInt(e.target.value) || 0)}
            className="w-full text-center font-black text-gray-800 bg-transparent outline-none text-lg"
          />
        </div>
      </div>

      {/* List of Stores */}
      <div className="px-4 pb-20">
        <div className="space-y-1">
          {filteredStores.map((store) => (
            <Link 
              key={store.id} 
              href={`/orders/store/${store.id}`}
              className="block p-4 rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50 last:border-none"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{store.name}</h3>
                    {store.isVerified && <ShieldCheck className="w-4 h-4 text-blue-500" />}
                  </div>
                  <p className="text-gray-500 text-sm font-medium flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    {store.distance} • {store.address}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider ${
                      store.type === 'Pharmacy' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                    }`}>
                      {store.type}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400 text-xs font-bold">
                      <Clock className="w-3 h-3" />
                      {store.deliveryTime}
                    </div>
                  </div>
                </div>
                <div className={`text-[10px] font-black px-2 py-1 rounded-full ${
                  store.isOpen ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  {store.isOpen ? 'OPEN' : 'CLOSED'}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">No stores found</h3>
            <p className="text-gray-500 text-sm">Try searching for something else.</p>
          </div>
        )}
      </div>
    </div>
  );
}
