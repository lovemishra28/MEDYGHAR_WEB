"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import AuthForm from '@/components/AuthForm';
import { Calendar, Activity, Key, MapPin, ShoppingBag, ChevronRight, User, HeartPulse, Mail } from 'lucide-react';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const accountOptions = [
    { title: 'My Appointments', icon: <Calendar className="w-5 h-5 text-blue-600" />, href: '#', bg: 'bg-blue-50' },
    { title: 'My Orders', icon: <ShoppingBag className="w-5 h-5 text-red-500" />, href: '/orders', bg: 'bg-red-50' },
    { title: 'Medical Details', icon: <Activity className="w-5 h-5 text-green-500" />, href: '#', bg: 'bg-green-50' },
    { title: 'Change Password', icon: <Key className="w-5 h-5 text-orange-500" />, href: '#', bg: 'bg-orange-50' },
    { title: 'Your Address', icon: <MapPin className="w-5 h-5 text-purple-500" />, href: '#', bg: 'bg-purple-50', sub: '37.4220, -122.0840' },
  ];

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };
    getUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-blue-600 font-bold">Verifying session...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="flex flex-col gap-10">
        
        {/* Top: User Header Card (Horizontal) */}
        <div className="w-full">
          <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full translate-x-32 -translate-y-32 opacity-30"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: Avatar & Basic Info */}
              <div className="flex flex-col md:flex-row items-center gap-8 flex-1">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-5xl font-black text-white border-8 border-white shadow-2xl shrink-0">
                  {user.email?.[0].toUpperCase() || 'U'}
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-1">{user.email?.split('@')[0] || 'User'}</h2>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
                    <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-blue-600/20">Verified Member</span>
                    <span className="bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">UID: {user.id.slice(0, 8)}</span>
                  </div>
                  <p className="text-gray-500 font-medium mt-4 flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
                <button className="w-full md:px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                  <User className="w-5 h-5" />
                  Edit Profile
                </button>
                <button 
                  onClick={() => supabase.auth.signOut().then(() => window.location.reload())}
                  className="w-full md:px-10 py-4 bg-red-50 text-red-500 rounded-2xl font-bold hover:bg-red-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Account Options List (Stacked Below) */}
        <div className="w-full">
          <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-blue-900/5">
            <div className="mb-10">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Account Settings</h3>
              <h2 className="text-3xl font-black text-gray-900">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accountOptions.map((option, index) => (
                <div 
                  key={index}
                  className="group flex items-center justify-between p-6 rounded-[2.5rem] border border-gray-50 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 ${option.bg} rounded-2xl flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                        {option.title}
                      </h4>
                      {option.sub && (
                        <p className="text-xs text-gray-400 mt-1 font-medium">
                          {option.sub}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Support CTA */}
            <div className="mt-12 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900">Need medical assistance?</h4>
                <p className="text-gray-500 mt-1">Our support team is available 24/7 for your help.</p>
              </div>
              <button className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 flex items-center gap-2">
                <HeartPulse className="w-5 h-5" />
                Contact Support
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
