import axios from "axios";

const instance = axios.create({
  baseURL: "https://shopping-cart-backend.onrender.com", // Render URL
});

export default instance;
