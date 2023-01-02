import React, { useContext, createContext, useState, useMemo } from "react";
import { Product } from "../types";
import toast from "react-hot-toast";

export interface Props {
  children: React.ReactNode;
}

export interface Add {
  product: Product;
  quantity?: number;
}

export interface ContextTypes {
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
  onRemove: (product: Product) => void;
  cartOpen: boolean;
  setCartOpen: (value: boolean) => void;
  cartItems: Product[];
  totalPrice: number | null;
  totalQuantities: number | null;
}

export const CartContext = createContext<ContextTypes | null>(null);

const StateContext = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems?.find(
      (item) => item?._id === product?._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product?.price * quantity!
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities + quantity!
    );

    if (checkProductInCart) {
      const updatedCartItems = cartItems?.map((cartProduct: Product) => {
        if (cartProduct?._id === product?._id)
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

    setQty(1);
    toast(`x${qty} of "${product?.name.slice(0, 15)}..." added to Cart`, {
      duration: 1500,
      icon: "✅",
      style: { textAlign: "center" },
    });
  };

  const onRemove = (product: Product) => {
    const foundProduct = cartItems.find((item) => item?._id === product?._id);
    const newCartItems = cartItems.filter((item) => item?._id !== product?._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct?.price! * foundProduct?.quantity!
    );

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct?.quantity!
    );

    setCartItems(newCartItems);
    toast(`"${product?.name.slice(0, 15)}..." has been removed from Cart`, {
      duration: 1500,
      icon: "❌",
      style: { textAlign: "center" },
    });
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
        cartOpen,
        qty,
        incQty,
        decQty,
        onAdd,
        onRemove,
        setCartOpen,
        cartItems,
        totalPrice,
        totalQuantities,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(CartContext);
