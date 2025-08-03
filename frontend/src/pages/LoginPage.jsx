import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/items");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-96">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          🛍 Welcome to ShopEasy
        </h1>
        <p className="text-gray-600 mb-8">Your mini shopping cart app</p>

        <button
          onClick={handleEnter}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition"
        >
          Enter Shop
        </button>

        <p className="mt-8 text-xs text-gray-500">No login required</p>
      </div>
    </div>
  );
}

export default LoginPage;
