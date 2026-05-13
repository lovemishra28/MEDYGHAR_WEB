// app/profile/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import AuthForm from '@/components/AuthForm';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const records = [
    { type: 'Prescription', date: 'Oct 15, 2023', doctor: 'Dr. Sneha Gupta', file: 'rx_01.pdf' },
    { type: 'Lab Report', date: 'Oct 29, 2023', test: 'Full Body Checkup', file: 'report_01.pdf' },
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
        <div className="text-brand-primary font-bold">Verifying session...</div>
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
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left: User Info Card */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm text-center">
            <div className="w-32 h-32 bg-brand-light rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-brand-primary mb-6 border-4 border-white shadow-lg">
              LM
            </div>
            <h2 className="text-2xl font-bold text-gray-heading">{user.email?.split('@')[0] || 'User'}</h2>
            <p className="text-gray-500 font-medium mt-1">Verified Member</p>
            
            <div className="mt-8 pt-8 border-t border-gray-50 space-y-4 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Account</span>
                <span className="text-gray-heading font-bold">{user.email}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">UID</span>
                <span className="text-gray-heading font-bold text-[10px]">{user.id.slice(0, 12)}...</span>
              </div>
            </div>

            <button className="w-full mt-10 py-3 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-dark transition-all">
              Edit Profile
            </button>
            
            <button 
              onClick={() => supabase.auth.signOut().then(() => window.location.reload())}
              className="mt-6 text-red-500 font-bold text-sm underline hover:text-red-600 transition-colors"
            >
              Logout from MediGhar
            </button>
          </div>
        </div>

        {/* Right: Health Records & Activity */}
        <div className="flex-1 space-y-8">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-heading">Digital Health Records</h3>
              <span className="bg-brand-light text-brand-primary text-xs font-bold px-3 py-1 rounded-full">Securely Stored</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {records.map((record, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 flex items-center gap-4 hover:border-brand-primary transition-all cursor-pointer shadow-sm">
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-xl">
                    {record.type === 'Prescription' ? '📄' : '🧪'}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-heading text-sm">{record.type}</h4>
                    <p className="text-xs text-gray-400">{record.date}</p>
                    <p className="text-xs text-brand-primary font-bold mt-1">{record.doctor || record.test}</p>
                  </div>
                </div>
              ))}
              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer">
                <span className="text-2xl mb-1">+</span>
                <span className="text-xs font-bold uppercase tracking-wider">Upload New</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <h3 className="text-xl font-bold mb-2">MediGhar Premium</h3>
            <p className="text-blue-100 text-sm max-w-xs mb-6">Unlock priority consultations and extra savings on all lab tests.</p>
            <button className="bg-white text-brand-primary px-8 py-2 rounded-full font-bold text-sm">
              Upgrade Now
            </button>
            <div className="absolute right-[-20px] bottom-[-20px] text-8xl opacity-10 rotate-12">🛡️</div>
          </div>
        </div>

      </div>
    </div>
  );
}
