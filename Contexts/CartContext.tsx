import React, { useContext, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const CartContext = createContext<any | null>(null);

export function useCart() {
  return useContext(CartContext);
}

interface Props {
  children?: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [cart, setCart] = useState<any>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedCart = Cookies.get("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      Cookies.set("cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (product: any) => {
    const productIndex = cart.findIndex(
      (item: any) => item.variantId === product.variantId
    );
    const newCart = [...cart];
    if (newCart[productIndex]) {
      newCart[productIndex].quantity = newCart[productIndex].quantity + 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCart(newCart);
  };

  const updateQuantity = (e: any, productTitle: any) => {
    const productIndex = cart.findIndex(
      (product: any) => product.title === productTitle
    );
    if (productIndex !== -1) {
      const newCart = [...cart];
      newCart[productIndex].quantity = parseInt(e.target.value);
      setCart(newCart);
    }
  };

  const removeItem = (variantId: any) => {
    const newCart = cart.filter((product: any) => {
      return product.variantId !== variantId;
    });
    setCart(newCart);
  };

  const checkoutObject = [
    ...cart.map((product: any) => {
      return {
        variantId: product.variantId,
        quantity: product.quantity,
      };
    }),
  ];

  const cartTotalPrice =
    cart.length > 0 &&
    cart
      .reduce((total: any, product: any) => {
        return total + parseInt(product.price.amount) * product.quantity;
      }, 0)
      .toFixed(2);

  const cartTotalQuantity = cart.reduce(
    (total: any, product: any) => total + product.quantity,
    0
  );

  const values = {
    showCartPreview,
    setShowCartPreview,
    checkoutObject,
    cart,
    setCart,
    addToCart,
    updateQuantity,
    removeItem,
    cartTotalPrice,
    cartTotalQuantity,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
