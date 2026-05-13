// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-brand-primary">
              MediGhar
            </Link>
            
            {/* Nav Links */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-brand-primary font-medium transition-all">Home</Link>
              <Link href="/orders" className="text-gray-600 hover:text-brand-primary font-medium transition-all">My Orders</Link>
              <Link href="/consult" className="text-gray-600 hover:text-brand-primary font-medium transition-all">Consult</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Search medicines..."
                  className="bg-gray-100 border-none rounded-lg py-2 px-4 w-64 focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                />
             </div>
             <Link href="/profile" className="bg-brand-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-dark transition-all">
                Profile
             </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
