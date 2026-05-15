import React, { Suspense } from 'react';
import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-md">
        <Suspense fallback={<div className="text-center text-blue-600 font-bold">Loading...</div>}>
          <AuthForm />
        </Suspense>
      </div>
    </div>
  );
}
