import React, { createContext, useState, useEffect } from "react";
import cartService from "../services/cart.service";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const updateCart = async () => {
    try {
      const response = await cartService.getCart();
      setCart(response.data);
      const newTotal = response.data.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotal(newTotal);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, total, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
