import React, { useContext, createContext, useState } from "react";
import { ContextTypes, Product } from "../types";

export interface Props {
  children: React.ReactNode;
}

export interface Add {
  product: Product;
  quantity?: number;
}

export const CartContext = createContext<ContextTypes | null>(null);

const StateContext = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems?.find(
      (item) => item._id === product?._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product?.price * quantity!
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities + quantity!
    );

    if (checkProductInCart) {
      const updatedCartItems = cartItems?.map((cartProduct: Product) => {
        if (cartProduct._id === product?._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity! + quantity!,
          };
      }) as Product[];
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity as number;

      setCartItems([...cartItems, { ...product }]);
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <CartContext.Provider
      value={{
        qty,
        incQty,
        decQty,
        totalPrice,
        totalQuantities,
        cartItems,
        onAdd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(CartContext);
