import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Product from './pages/Product';
import Research from './pages/Research';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const path = window.location.pathname;

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: (p.quantity || 1) + quantity } : p);
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(p => p.id !== productId));
  };

  const toggleWishlist = (product) => {
    setWishlistItems(prev => {
      const exists = prev.find(p => p.id === product.id);
      return exists ? prev.filter(p => p.id !== product.id) : [...prev, product];
    });
  };

  const updateCartQuantity = (productId, delta) => {
    setCartItems(prev => {
      const updated = prev.map(item => {
        if (String(item.id) === String(productId)) {
          const currentQty = item.quantity || 1;
          const newQty = Math.max(1, currentQty + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      });
      return [...updated];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(p => p.id !== productId));
  };

  const commonProps = {
    cartItems,
    setCartItems,
    wishlistItems,
    setWishlistItems,
    onAddToCart: addToCart,
    onUpdateQuantity: updateCartQuantity,
    onRemoveFromCart: removeFromCart,
    onToggleWishlist: toggleWishlist,
    onRemoveFromWishlist: removeFromWishlist
  };

  if (path === '/contact') return <Contact {...commonProps} />;
  if (path === '/about') return <About {...commonProps} />;
  if (path === '/products') return <Product {...commonProps} />;
  if (path === '/research') return <Research {...commonProps} />;
  
  return <Home {...commonProps} />;
}