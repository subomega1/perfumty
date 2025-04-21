'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import api from '@/lib/api';
import { toast } from 'react-toastify';

export default function OrderModal({
  isOpen,
  onClose,
  totalPrice,
  selectedTopNote,
  selectedMiddleNote,
  selectedBaseNote,
  selectedSize,
  selectedIntensity,
  selectedBottle,
  selectedPremium,
}) {
  const [formData, setFormData] = useState({
    gift_message: '',
    delivery_date: '',
    sample: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const perfumeRes = await api.post('/client/', {
        top_note: selectedTopNote?.name,
        middle_note: selectedMiddleNote?.name,
        base_note: selectedBaseNote?.name,
        size: selectedSize?.name,
        intensity: selectedIntensity?.name,
        bottle_material: selectedBottle?.name,
        premium_ingredients: selectedPremium?.name || null,
      });

      const perfumeId = perfumeRes?.data?.perfumeId;
      if (!perfumeId) throw new Error('Failed to get perfume ID');

      const orderRes = await api.post('/order', {
        perfumeId,
        gift_message: formData.gift_message,
        delivery_date: formData.delivery_date,
        sample: formData.sample,
      });

      toast.success('Order placed successfully!');
      console.log('Order success:', orderRes.data);
      onClose();
    } catch (err) {
      const fallbackMessage = 'An unexpected error occurred while submitting your order.';
      let message = fallbackMessage;

      console.error('Order submission error:', err);

      if (err.response?.data && typeof err.response.data === 'string' && err.response.data.startsWith('<!DOCTYPE')) {
        message = 'Server returned unexpected HTML. Check if the API route is correct.';
      } else if (err.response?.data?.error) {
        message = err.response.data.error;
      } else if (err.message) {
        message = err.message;
      }

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full p-8 relative shadow-lg border-2 border-purple-300 shadow-purple-300 transition-all ease-in-out duration-300">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-200"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-3xl font-semibold text-center  text-gray-800 dark:text-white">Complete Your Order</h2>

        <div className=" p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="font-semibold mb-3 text-lg text-gray-800 dark:text-white">Order Summary</h3>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <p>Top Note: {selectedTopNote?.name || 'None'}</p>
            <p>Middle Note: {selectedMiddleNote?.name || 'None'}</p>
            <p>Base Note: {selectedBaseNote?.name || 'None'}</p>
            <p>Size: {selectedSize?.name}</p>
            <p>Intensity: {selectedIntensity?.name}</p>
            <p>Bottle: {selectedBottle?.name}</p>
            <p>Premium Ingredient: {selectedPremium?.name || 'None'}</p>
            <p className="text-xl font-bold mt-4 text-purple-600">Total: ${totalPrice}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Gift Message (optional)</label>
            <textarea
              value={formData.gift_message}
              onChange={(e) => setFormData({ ...formData, gift_message: e.target.value })}
              rows={3}
              className="w-full resize-none h-14 p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Preferred Delivery Date</label>
            <input
              type="date"
              required
              value={formData.delivery_date}
              onChange={(e) => setFormData({ ...formData, delivery_date: e.target.value })}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="sample"
              checked={formData.sample}
              onChange={(e) => setFormData({ ...formData, sample: e.target.checked })}
              className="h-5 w-5"
            />
            <label htmlFor="sample" className="text-sm text-gray-700 dark:text-gray-300">Include 25% Sample (adds 25% to price)</label>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 px-5 py-3 rounded-full text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}