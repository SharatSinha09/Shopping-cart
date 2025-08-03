import React, { useEffect, useState } from "react";
import axios from "../api/axios.js";

function ItemsPage() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/items").then((res) => setItems(res.data));
  }, []);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const checkout = () => {
    if (cart.length === 0) return;
    setOrders((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        items: cart,
        total: cart.reduce((t, i) => t + i.price, 0),
      },
    ]);
    setCart([]);
  };

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🛒 Shopping Cart
      </h1>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600">₹{item.price}</p>
            <button
              className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg transition"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          🛍 Cart ({cart.length} items)
        </h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart</p>
        ) : (
          <div className="space-y-2">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <span className="text-gray-700">
                  {item.name} - ₹{item.price}
                </span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between font-bold text-gray-800 pt-4 border-t">
              <span>Total:</span>
              <span>₹{cart.reduce((t, i) => t + i.price, 0)}</span>
            </div>
          </div>
        )}
        {cart.length > 0 && (
          <button
            onClick={checkout}
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition"
          >
            Checkout
          </button>
        )}
      </div>

      {/* Orders */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          📦 Order History
        </h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 rounded-xl shadow-md mb-4 hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-800 mb-2">
                Order #{order.id} - {order.items.length} items - ₹{order.total}
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ItemsPage;
