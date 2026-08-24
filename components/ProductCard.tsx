import { MapPin, Tag } from 'lucide-react';

interface ProductProps {
  title: string;
  price: number;
  location: string;
  category: string;
  image: string;
}

export default function ProductCard({ title, price, location, category, image }: ProductProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary uppercase">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-1 truncate">{title}</h3>
        <div className="flex items-center text-gray-500 text-xs mb-3">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-extrabold text-primary">
            {price.toLocaleString()} <span className="text-xs font-normal">RWF</span>
          </span>
          <button className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-primary transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
