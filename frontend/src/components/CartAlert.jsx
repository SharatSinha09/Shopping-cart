import React from "react";

function CartAlert({ cart }) {
  if (!cart || cart.length === 0) {
    window.alert("Your cart is empty.");
    return null;
  }

  let cartDetails = "Cart Items:\n";
  cart.forEach((item, index) => {
    cartDetails += `${index + 1}. ${item.itemId.name} - ₹${
      item.itemId.price
    }\n`;
  });

  window.alert(cartDetails);
  return null;
}

export default CartAlert;
