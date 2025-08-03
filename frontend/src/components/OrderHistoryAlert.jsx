import React from "react";

function OrderHistoryAlert({ orders }) {
  if (!orders || orders.length === 0) {
    window.alert("No order history found.");
    return null;
  }

  let orderDetails = "Order History:\n";
  orders.forEach((order, index) => {
    orderDetails += `${index + 1}. Order ID: ${order._id} | Items: ${
      order.items.length
    }\n`;
  });

  window.alert(orderDetails);
  return null;
}

export default OrderHistoryAlert;
