import Link from 'next/link';
import Image from 'next/image';

export default function CartLayout({
  state,
  setState,
  updateCartTotals,
  handleQuantityChange,
  handleRemoveItem,
  handlePromoCode,
  handleCheckout,
  handleSaveForLater,
}) {
  const { subtotal, discount, shipping, tax, total } = updateCartTotals();

  return (
    <div className="grid gap-8 mb-12 lg:grid-cols-[2fr_1fr]">
      {/* Cart Items */}
      <div className="cart-items">
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <h2 className="p-6 border-b border-gray-200">Cart Items ({state.items.length})</h2>
          {state.items.map((item) => (
            <div key={item.id} className="grid gap-6 p-6 border-b border-gray-200 sm:grid-cols-[1fr_2fr_1fr]">
              <div className="item-image aspect-square rounded-md bg-cosmic-latte overflow-hidden">
                <Image src={item.image} alt={item.name} width={150} height={150} className="object-cover w-full h-full" />
              </div>
              <div className="item-details">
                <h3 className="text-lg font-semibold mb-4">{item.name}</h3>
                <div className="notes text-sm mb-4">
                  <p><strong>Top Notes:</strong> {item.details.topNotes}</p>
                  <p><strong>Middle Notes:</strong> {item.details.middleNotes}</p>
                  <p><strong>Base Notes:</strong> {item.details.baseNotes}</p>
                </div>
                <div className="specifications grid grid-cols-2 gap-2 text-sm mb-4">
                  <span><strong>Size:</strong> {item.details.size}</span>
                  <span><strong>Intensity:</strong> {item.details.intensity}</span>
                  <span><strong>Bottle:</strong> {item.details.bottle}</span>
                  {item.details.engraving && <span><strong>Engraving:</strong> {item.details.engraving}</span>}
                </div>
                <div className="item-actions flex gap-4">
                  <button onClick={handleSaveForLater} className="text-dim-gray font-medium hover:text-black">
                    ♡ Save for Later
                  </button>
                  <button onClick={() => handleRemoveItem(item.id)} className="text-dim-gray font-medium hover:text-black">
                    🗑️ Remove
                  </button>
                </div>
              </div>
              <div className="item-price text-right">
                <p className="text-lg font-medium mb-4">${item.price.toFixed(2)}</p>
                <div className="quantity-controls inline-flex items-center border border-gray-300 rounded-md mb-4">
                  <button onClick={() => handleQuantityChange(item.id, false)} className="px-3 py-2 text-gray-600">
                    −
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, true)} className="px-3 py-2 text-gray-600">
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/collection" className="inline-flex items-center text-dim-gray mt-8 hover:text-black">
          ← Continue Shopping
        </Link>
      </div>

      {/* Order Summary */}
      <div className="order-summary bg-white rounded-md shadow-md sticky top-20">
        <div className="summary-header p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Order Summary</h2>
        </div>
        <div className="summary-content p-6">
          <div className="summary-row flex justify-between mb-4">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {state.promoApplied && (
            <div className="summary-row flex justify-between mb-4 text-green-500">
              <span>Discount (15%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
          <div className="summary-row flex justify-between mb-4">
            <span>Shipping</span>
            <span className={shipping === 0 ? 'text-green-500' : ''}>
              {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className="summary-row flex justify-between mb-4">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="promo-code mb-6">
            <input
              type="text"
              placeholder="Promo code"
              value={state.promoCode}
              onChange={(e) => setState({ ...state, promoCode: e.target.value })}
              disabled={state.promoApplied}
              className="w-full p-3 border border-gray-300 rounded-md mb-2"
            />
            <button
              onClick={handlePromoCode}
              disabled={state.promoApplied}
              className="text-dim-gray font-medium hover:text-black"
            >
              Apply
            </button>
            <p className={`text-xs mt-1 ${state.promoApplied ? 'text-green-500' : 'text-gray-600'}`}>
              {state.promoApplied ? 'Promo code applied successfully!' : 'Try "WELCOME15" for 15% off'}
            </p>
          </div>
          <div className="summary-total flex justify-between text-lg font-semibold pt-4 border-t border-gray-200 mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <p className={`text-sm mb-6 ${shipping === 0 ? 'text-green-500' : ''}`}>
            {shipping === 0
              ? 'You qualified for free shipping!'
              : `Add $${(100 - subtotal).toFixed(2)} more for free shipping`}
          </p>
          <button
            onClick={handleCheckout}
            className="w-full bg-coral text-white py-3 rounded-md font-medium hover:bg-[#e67c5c] mb-4"
          >
            Proceed to Checkout
          </button>
          <p className="text-sm text-gray-600 text-center">Secure checkout powered by Stripe</p>
        </div>
      </div>

      {/* New Creation Card */}
      <div className="creation-card  border-2 border-dashed  border-dim-gray bg-cosmic-latte rounded-md flex items-center justify-center">
        <div className="item-center text-center p-8">
          <div className="plus-circle w-16 h-16 bg-plum justify-self-center rounded-full flex items-center justify-center text-white text-2xl mb-4">
            +
          </div>
          <h3 className="text-lg font-semibold mb-2">Create a New Perfume</h3>
          <p className="text-sm text-gray-600 mb-4">Design your next signature scent</p>
          <button className="bg-coral text-white py-3 px-6 rounded-md font-medium hover:bg-[#e67c5c]">
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
}