import { ArrowRight, Search, Zap, ShoppingBasket, Hammer, Repeat } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            KERRO <span className="text-primary font-medium text-3xl block md:inline">Goods & Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The intelligent marketplace where Rwanda finds what it needs and sells what it has.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/marketplace" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 flex items-center justify-center">
              What do you need? <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/create" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 flex items-center justify-center">
              What do you have?
            </Link>
          </div>
        </div>
      </section>

      {/* Main Actions */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card hover:shadow-md transition-shadow cursor-pointer border-t-4 border-t-emerald-500">
          <ShoppingBasket className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Marketplace</h3>
          <p className="text-gray-500 text-sm">Browse fresh agriculture, electronics, wholesale, and daily goods.</p>
        </div>

        <div className="card hover:shadow-md transition-shadow cursor-pointer border-t-4 border-t-blue-500">
          <Hammer className="h-10 w-10 text-accent mb-4" />
          <h3 className="text-xl font-bold mb-2">Services</h3>
          <p className="text-gray-500 text-sm">Find professionals: Electricians, designers, farmers, and technicians.</p>
        </div>

        <div className="card hover:shadow-md transition-shadow cursor-pointer border-t-4 border-t-orange-500">
          <Repeat className="h-10 w-10 text-secondary mb-4" />
          <h3 className="text-xl font-bold mb-2">I Need This</h3>
          <p className="text-gray-500 text-sm">Can't find it? Post a request and let suppliers come to you.</p>
        </div>
      </div>
    </div>
  );
      }
