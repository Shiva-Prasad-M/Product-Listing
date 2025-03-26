import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Laptop, Watch, Gem, Shirt } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  image: string;
  itemCount: number;
}

const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: <Laptop className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=500',
    itemCount: 45
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    icon: <Gem className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500',
    itemCount: 32
  },
  {
    id: 'mens-clothing',
    name: "Men's Clothing",
    icon: <Shirt className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=500',
    itemCount: 28
  },
  {
    id: 'womens-clothing',
    name: "Women's Clothing",
    icon: <ShoppingBag className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?auto=format&fit=crop&q=80&w=500',
    itemCount: 36
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: <Watch className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=500',
    itemCount: 24
  }
];

export const Categories: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Categories</h1>
        <p className="mt-2 text-gray-600">Browse through our collection of premium products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 z-10" />
            <img
              src={category.image}
              alt={category.name}
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
              <div className="flex items-center space-x-2 mb-2">
                {category.icon}
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-90">{category.itemCount} items</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                  View All
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">New Collection</h2>
            <p className="text-white/80">Discover our latest arrivals and trending items</p>
          </div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};