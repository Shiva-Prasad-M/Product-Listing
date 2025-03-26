import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Header: React.FC = () => {
  const { user, signOut } = useAuthStore();
  const location = useLocation();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold">Store</Link>
            <nav className="hidden md:flex space-x-6">
              <Link 
                to="/" 
                className={`text-gray-600 hover:text-gray-900 ${location.pathname === '/' ? 'text-blue-600 font-semibold' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className={`text-gray-600 hover:text-gray-900 ${location.pathname === '/categories' ? 'text-blue-600 font-semibold' : ''}`}
              >
                Categories
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-2">
                  <User size={24} />
                  <button
                    onClick={() => signOut()}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <User size={24} />
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};