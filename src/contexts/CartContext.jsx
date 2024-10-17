import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const totalQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  function addItem(newItem) {
    setCartItems((cartItems) => {
      const item = cartItems.find((item) => item.id === newItem.id);

      if (item) {
        return cartItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: newItem.quantity }
            : item,
        );
      }
      return [...cartItems, newItem];
    });
  }

  function incrementQuantity(itemId) {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrementQuantity(itemId) {
    setCartItems((cartItems) =>
      cartItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeAll() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity,
        totalPrice,
        addItem,
        incrementQuantity,
        decrementQuantity,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
