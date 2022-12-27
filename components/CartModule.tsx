import React from "react";
import { ContextTypes, Product } from "../types";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

export interface Props {
  product: Product;
}

export default function CartModule({ product }: Props) {
  const src = urlFor(product?.image ? product?.image[0] : "").url();
  const { totalPrice, onRemove } = useStateContext() as ContextTypes;

  return (
    <div className="py-2">
      <div className="grid grid-cols-4 md:grid-cols-5">
        <div className="w-[60px] h-[60px] md:w-[45px] place-self-center md:h-[45px] flex items-center justify-center bg-white rounded object-cover">
          <Image alt="" className=" " src={src} width={40} height={40} />
        </div>

        <p className="hidden md:flex md:items-center place-self-center">
          {product.name.slice(0, 10)}...
        </p>

        <p className="text-xs font-semibold flex items-center place-self-center">
          (x{product.quantity})
        </p>

        <p className="font-bold flex justify-center items-center">
          $
          <span className="underline ">{product.price * product.quantity}</span>
        </p>

        <button
          onClick={() => onRemove(product)}
          className=" place-self-center bg-lightRed px-3 py-1 rounded text-white font-bold flex justify-center items-center"
        >
          x
        </button>
      </div>
    </div>
  );
}
