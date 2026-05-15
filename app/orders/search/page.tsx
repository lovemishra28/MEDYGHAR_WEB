"use client";
import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, Pill, TestTube, ChevronRight, Filter, ShieldCheck, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function StoreSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Pharmacies', 'Labs', 'Wellness'];

  const dummyStores = [
    {
      id: 1,
      name: 'MediGhar Flagship Pharmacy',
      type: 'Pharmacy',
      rating: 4.9,
      reviews: 1250,
      distance: '0.8 km',
      address: 'Sector 44, Near Huda Metro, Gurugram',
      image: 'https://images.unsplash.com/photo-1587854680352-936b22b91030?auto=format&fit=crop&q=80&w=400',
      isVerified: true,
      isOpen: true,
      deliveryTime: '20-30 mins'
    },
    {
      id: 2,
      name: 'City Health Diagnostic Lab',
      type: 'Lab',
      rating: 4.7,
      reviews: 840,
      distance: '1.2 km',
      address: 'DLF Phase 3, Cyber City, Gurugram',
      image: 'https://images.unsplash.com/photo-1579152276503-34e8574d3da4?auto=format&fit=crop&q=80&w=400',
      isVerified: true,
      isOpen: true,
      deliveryTime: 'Same Day Reports'
    },
    {
      id: 3,
      name: 'Modern Wellness Store',
      type: 'Pharmacy',
      rating: 4.5,
      reviews: 520,
      distance: '2.5 km',
      address: 'Sushant Lok 1, Gurugram',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400',
      isVerified: true,
      isOpen: true,
      deliveryTime: '45-60 mins'
    },
    {
      id: 4,
      name: 'Apollo Diagnostics Centre',
      type: 'Lab',
      rating: 4.8,
      reviews: 2100,
      distance: '3.0 km',
      address: 'Golf Course Road, Gurugram',
      image: 'https://images.unsplash.com/photo-1581595221475-10332881c107?auto=format&fit=crop&q=80&w=400',
      isVerified: true,
      isOpen: true,
      deliveryTime: '24 hrs Reports'
    }
  ];

  const filteredStores = dummyStores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          store.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || store.type === activeCategory.replace('Pharmacies', 'Pharmacy').replace('Labs', 'Lab');
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Search Header */}
      <div className="bg-[#050B18] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Find Nearby <span className="text-blue-400">Stores & Labs</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              Search for authentic medicines, diagnostic tests, and health wellness stores near your location.
            </p>

            {/* Glowing Search Bar */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-2 pr-4 focus-within:border-blue-500/50 transition-all">
                <div className="w-14 h-14 flex items-center justify-center text-gray-400 group-focus-within:text-blue-400 transition-colors">
                  <Search className="w-6 h-6" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for 'Medicines', 'Blood Test' or 'Pharmacy Name'..."
                  className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder:text-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                  : 'bg-white text-gray-500 border border-gray-100 hover:border-blue-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-bold bg-white px-6 py-3 rounded-2xl border border-gray-100 cursor-pointer hover:border-blue-200 transition-all">
            <Filter className="w-5 h-5" />
            <span>Advanced Filters</span>
          </div>
        </div>

        {/* Results List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStores.map((store) => (
            <div key={store.id} className="bg-white rounded-[2.5rem] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group shadow-sm">
              {/* Store Image */}
              <div className="w-full md:w-48 h-48 rounded-[2rem] overflow-hidden shrink-0 relative">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                  {store.type}
                </div>
              </div>

              {/* Store Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-gray-900">{store.name}</h3>
                      {store.isVerified && <ShieldCheck className="w-5 h-5 text-green-500" />}
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-yellow-700">{store.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {store.distance} • {store.address}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-bold bg-gray-50 px-3 py-1.5 rounded-xl">
                      <Clock className="w-4 h-4" />
                      {store.deliveryTime}
                    </div>
                    {store.isOpen && (
                      <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold bg-green-50 px-3 py-1.5 rounded-xl uppercase tracking-wider">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Open Now
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10">
                    <ShoppingBag className="w-5 h-5" />
                    {store.type === 'Pharmacy' ? 'Order Medicines' : 'Book Test'}
                  </button>
                  <button className="w-14 h-14 border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-all group-hover:bg-blue-50">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStores.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border border-gray-100 shadow-sm">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">No stores found</h3>
            <p className="text-gray-500">We couldn't find any stores matching your search. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
