import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  );
}
