import { useState } from "react";
import CartList from "./CartList";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleUpdateCart = () => {
    alert("Cart updated!");
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`);
    }
  };

  const subtotal = getCartTotal();
  const total = subtotal;

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <CartList
          cartItems={cartItems}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
            />
            <button
              onClick={handleApplyCoupon}
              className="px-6 py-3 bg-red-500 text-white rounded font-medium hover:bg-red-600 transition"
            >
              APPLY COUPON
            </button>
          </div>

          <button
            onClick={handleUpdateCart}
            className="px-6 py-3 bg-red-300 text-white rounded font-medium hover:bg-red-400 transition"
          >
            UPDATE CART
          </button>
        </div>

        <div className="mt-12 flex justify-end">
          <div className="w-full md:w-96 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Cart totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900 font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-600">Total</span>
                <span className="text-gray-900 font-semibold">${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 px-6 py-3 bg-red-500 text-white rounded font-medium hover:bg-red-600 transition">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
