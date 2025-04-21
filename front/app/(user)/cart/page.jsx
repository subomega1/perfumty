import { useState, useEffect } from 'react';
import CartLayout from '@/components/sections/cart/CartLayout';
import { initialCartState } from '../../../constants/cart'; // Import initialCartState

export default function Cart() {
  const [state, setState] = useState(initialCartState);

  const updateCartTotals = () => {
    const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = state.promoApplied ? subtotal * 0.15 : 0;
    const shipping = subtotal > 100 ? 0 : 5.99;
    const tax = (subtotal - discount) * 0.08;
    const total = subtotal - discount + shipping + tax;
    return { subtotal, discount, shipping, tax, total };
  };

  const handleQuantityChange = (itemId, increment) => {
    setState((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + (increment ? 1 : -1)) }
          : item
      ),
    }));
  };

  const handleRemoveItem = (itemId) => {
    setState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== itemId),
    }));
  };

  const handlePromoCode = () => {
    const code = state.promoCode.trim().toUpperCase();
    if (code === 'WELCOME15' && !state.promoApplied) {
      setState((prev) => ({ ...prev, promoApplied: true }));
    } else {
      alert('Invalid promo code');
    }
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout... (This would integrate with your payment processor)');
  };

  const handleSaveForLater = () => {
    alert('Item saved for later!');
  };

  return (
    <main className="max-w-6xl mx-auto px-4">
      <div className="py-8">
        <h1 className="text-4xl font-bold">Your Cart</h1>
        <p className="text-gray-600">Review and checkout your custom perfume creations</p>
      </div>
      <CartLayout
        state={state}
        setState={setState}
        updateCartTotals={updateCartTotals}
        handleQuantityChange={handleQuantityChange}
        handleRemoveItem={handleRemoveItem}
        handlePromoCode={handlePromoCode}
        handleCheckout={handleCheckout}
        handleSaveForLater={handleSaveForLater}
      />
    </main>
  );
}