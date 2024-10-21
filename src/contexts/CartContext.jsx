import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
const CART_ITEMS = "cartItems";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const items = localStorage.getItem(CART_ITEMS);

    return items ? JSON.parse(items) : [];
  });

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  const shipping = 50;
  const vat = 0.2 * totalPrice;
  const total = totalPrice + shipping + vat;

  function updateCartItems(newCartItems) {
    setCartItems(newCartItems);
    localStorage.setItem(CART_ITEMS, JSON.stringify(newCartItems));
  }

  function reduceName(item) {
    let slug = item.slug.replaceAll("-", " ");
    let name = item.name.length < slug.length ? item.name : slug;

    name = name.split(" ").slice(0, -1).join(" ");

    return name.length <= 12 ? name : name.split(" ")[0];
  }

  function addItem(newItem) {
    newItem.reducedName = reduceName(newItem);
    const existingItem = cartItems.find((item) => item.id === newItem.id);
    const newCartItems = !existingItem
      ? [...cartItems, newItem]
      : cartItems.map((item) =>
        item.id === newItem.id
          ? { ...item, quantity: newItem.quantity }
          : item,
      );

    updateCartItems(newCartItems);
  }

  function incrementQuantity(itemId) {
    const newCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
    );

    updateCartItems(newCartItems);
  }

  function decrementQuantity(itemId) {
    const newCartItems = cartItems
      .map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);

    updateCartItems(newCartItems);
  }

  function removeAll() {
    updateCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        shipping,
        vat,
        total,
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
