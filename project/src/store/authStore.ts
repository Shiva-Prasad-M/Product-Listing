import { create } from 'zustand';

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

// Simulated user database
const users: User[] = [];

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  signIn: async (email: string, password: string) => {
    const user = users.find(u => u.email === email);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    set({ user });
  },
  signUp: async (email: string, password: string) => {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    const newUser = { id: Math.random().toString(), email };
    users.push(newUser);
    set({ user: newUser });
  },
  signOut: () => {
    set({ user: null });
  },
}));