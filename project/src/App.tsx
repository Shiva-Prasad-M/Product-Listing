import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductList } from './pages/ProductList';
import { AuthForm } from './components/AuthForm';
import { Register } from './pages/Register';
import { Categories } from './pages/Categories';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;