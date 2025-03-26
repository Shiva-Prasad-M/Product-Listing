import { create } from 'zustand';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      set({ products: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch products', loading: false });
    }
  },
}));