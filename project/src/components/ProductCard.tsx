import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating.rate}</span>
          </div>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600">{rating.count} reviews</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};