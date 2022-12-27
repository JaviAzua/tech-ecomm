import { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { ContextTypes } from "../types";
import CartModule from "./CartModule";

function Cart() {
  const { cartItems, totalPrice } = useStateContext() as ContextTypes;
  return (
    <div className="absolute top-0 right-2 pt-20">
      <div className="flex flex-col p-4 gap-4 bg-white rounded-xl">
        {cartItems.map((item) => (
          <div key={item?._id} className="border-b-2 border-b-lightRed/50">
            <CartModule product={item} />
          </div>
        ))}
        {cartItems.length >= 1 && (
          <h4 className="flex flex-wrap mt-4 justify-center py-2 gap-2">
            <p className=" bg-lightRed/10 p-1">
              Total:$<span className="font-bold">{totalPrice}</span>
            </p>
            <button className=" bg-lightRed p-1 text-sm font-bold text-white">
              Buy Now
            </button>
          </h4>
        )}
      </div>
    </div>
  );
}

export default Cart;
