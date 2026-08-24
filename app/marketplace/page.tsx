import ProductCard from '@/components/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

// Ibi ni ibyo twerekana by'agateganyo (Mock Data) mbere y'uko tubikura muri Database
const DUMMY_PRODUCTS = [
  { id: '1', title: 'Fresh Irish Potatoes (Ibirayi)', price: 450, location: 'Musanze', category: 'Agriculture', image: 'https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?q=80&w=400' },
  { id: '2', title: 'iPhone 13 Pro Max - Used', price: 850000, location: 'Kigali, CBD', category: 'Electronics', image: 'https://images.unsplash.com/photo-1639433121083-00bc68800171?q=80&w=400' },
  { id: '3', title: 'Professional House Painting', price: 50000, location: 'Rubavu', category: 'Services', image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?q=80&w=400' },
  { id: '4', title: 'Wholesale Cement (Dangote)', price: 14500, location: 'Kigali, Gikondo', category: 'Construction', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400' },
];

export default function MarketplacePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          <p className="text-gray-500">Discover everything available in the network.</p>
        </div>
        <button className="flex items-center space-x-2 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
          <SlidersHorizontal className="h-5 w-5" />
          <span className="font-medium">Filter Results</span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard 
            key={product.id}
            title={product.title}
            price={product.price}
            location={product.location}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
