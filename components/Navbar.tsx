import Link from 'next/link';
import { ShoppingBag, User, PlusCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo - Ikanzeho igusubiza kuri Home Page */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-primary tracking-tighter">KERRO</span>
          </Link>

          {/* Buttons z'iburyo */}
          <div className="flex items-center space-x-3 md:space-x-6">
            
            {/* Button yo gushyiraho igicuruzwa */}
            <Link 
              href="/create" 
              className="flex items-center bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-bold text-sm hover:bg-opacity-90 transition-all shadow-sm"
            >
              <PlusCircle className="h-4 w-4 mr-1.5" />
              <span>Post Listing</span>
            </Link>

            {/* Button ya Login (Kwinjira) */}
            <Link 
              href="/login" 
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full border border-gray-100 transition-colors"
              title="Login"
            >
              <User className="h-6 w-6" />
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
