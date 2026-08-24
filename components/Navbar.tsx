import Link from 'next/link';
import { Search, ShoppingBag, User, PlusCircle, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary tracking-tight">KERRO</span>
            <span className="hidden sm:block text-xs font-medium text-gray-400">GOODS & SERVICES</span>
          </Link>

          {/* Search Bar - Hidden on Mobile, shown later */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search products, services, requests..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/create" className="hidden sm:flex items-center text-primary font-medium hover:text-opacity-80">
              <PlusCircle className="h-5 w-5 mr-1" />
              Post Listing
            </Link>
            <Link href="/cart" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <Link href="/login" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6" />
            </Link>
            <button className="md:hidden p-2 text-gray-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
