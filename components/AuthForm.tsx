// components/AuthForm.tsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { AlertCircle } from 'lucide-react';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [authMessage, setAuthMessage] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('message') === 'login_required') {
      setAuthMessage('You must login first to access this page.');
    }
  }, [searchParams]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = isSignUp 
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
    } else {
      if (isSignUp) {
        alert('Check your email for confirmation!');
      } else {
        router.push('/');
        router.refresh(); // Refresh to update navbar/auth state
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl max-w-md w-full mx-auto">
      {authMessage && (
        <div className="mb-6 flex items-center gap-3 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-xs font-bold leading-tight">{authMessage}</p>
        </div>
      )}
      <h2 className="text-2xl font-bold text-gray-heading mb-2 text-center">
        {isSignUp ? 'Join MedyGhar' : 'Welcome Back'}
      </h2>
      <p className="text-gray-500 text-sm text-center mb-8">
        Your health journey starts here.
      </p>
      
      <form onSubmit={handleAuth} className="space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-5 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-primary outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-primary outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-dark transition-all shadow-lg mt-4"
        >
          {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
        </button>
      </form>
      
      <p className="mt-6 text-center text-sm text-gray-500">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button 
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-brand-primary font-bold hover:underline"
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}
