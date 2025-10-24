// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';   // ✅ All products
import ProductCart from './Pages/ProductCart';   // ✅ Cart page
import { CartProvider } from "./Context/CartContext";
import AuthForm from './components/SignIn';

function App() {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(
    parseInt(localStorage.getItem("cartCount") || "0")
  );

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    const handleCartUpdate = () => {
      setCartCount(parseInt(localStorage.getItem("cartCount") || "0"));
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userData.token);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('cartCount');
    setCartCount(0);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Header user={user} onLogout={handleLogout} cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} /> {/* ✅ Show all products */}
          <Route path="/cart" element={<ProductCart />} />      {/* ✅ Show user’s cart */}
          <Route path="/auth" element={<AuthForm onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
