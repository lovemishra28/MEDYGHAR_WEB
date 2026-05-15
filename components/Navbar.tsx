"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    checkSession();

    // Listen for auth changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MedyGhar
            </Link>
            
            {/* Nav Links */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-all">Home</Link>
              <Link href="/orders" className="text-gray-600 hover:text-blue-600 font-medium transition-all">My Orders</Link>
              <Link href="/consult" className="text-gray-600 hover:text-blue-600 font-medium transition-all">Consult</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Search medicines..."
                  className="bg-gray-100 border-none rounded-lg py-2 px-4 w-64 focus:ring-2 focus:ring-blue-600 outline-none text-sm"
                />
             </div>
             
             {/* Conditional Auth Button (Desktop) */}
             <div className="hidden md:block">
               {isLoggedIn ? (
                 <Link 
                   href="/profile" 
                   className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-sm"
                 >
                    Profile
                 </Link>
               ) : (
                 <Link 
                   href="/login" 
                   className="text-blue-600 px-6 py-2 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                 >
                    Login
                 </Link>
               )}
             </div>

             {/* Hamburger Menu Icon */}
             <button 
               className="md:hidden p-2 text-gray-600"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
          
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-4 flex flex-col">
            <Link href="/" className="block text-gray-600 font-medium hover:text-blue-600 transition-all px-2">Home</Link>
            <Link href="/orders" className="block text-gray-600 font-medium hover:text-blue-600 transition-all px-2">My Orders</Link>
            <Link href="/consult" className="block text-gray-600 font-medium hover:text-blue-600 transition-all px-2">Consult</Link>
            <div className="pt-4 border-t border-gray-100 px-2 mt-2">
               {isLoggedIn ? (
                 <Link 
                   href="/profile" 
                   className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-sm"
                 >
                    Profile
                 </Link>
               ) : (
                 <Link 
                   href="/login" 
                   className="inline-block text-blue-600 px-6 py-2 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                 >
                    Login
                 </Link>
               )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
