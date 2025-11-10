import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Black Printed Coffee Mug",
      price: "15.00",
      quantity: 2,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Printed Dark Blue Tshirt",
      price: "34.00",
      quantity: 4,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    },
  ]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
