// components/AuthForm.tsx
"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = isSignUp 
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (error) alert(error.message);
    else alert(isSignUp ? 'Check your email for confirmation!' : 'Logged in successfully!');
    
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold text-gray-heading mb-2 text-center">
        {isSignUp ? 'Join MediGhar' : 'Welcome Back'}
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
