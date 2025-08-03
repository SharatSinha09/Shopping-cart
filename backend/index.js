import express from "express";
import cors from "cors";

const app = express(); // ✅ define app first

app.use(cors());
app.use(express.json());

// ===== Sample Data =====
let items = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 },
];
let cart = { items: [] };
let orders = [];

// ===== Root Route =====
app.get("/", (req, res) => {
  res.send("Backend is running ✅ (No Auth, No DB)");
});

// ===== Items =====
app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const { name, price } = req.body;
  const newItem = { id: items.length + 1, name, price };
  items.push(newItem);
  res.status(201).json(newItem);
});

// ===== Cart =====
app.post("/carts", (req, res) => {
  const { itemId } = req.body;
  cart.items.push({ itemId });
  res.json({ message: "Item added to cart", cart });
});

app.get("/carts", (req, res) => {
  res.json([cart]);
});

// ===== Orders =====
app.post("/orders", (req, res) => {
  if (cart.items.length === 0)
    return res.status(400).json({ message: "Cart empty" });

  const newOrder = { id: orders.length + 1, items: cart.items };
  orders.push(newOrder);
  cart = { items: [] }; // clear cart

  res.json({ message: "Order placed", order: newOrder });
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

// ===== Start Server =====
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
