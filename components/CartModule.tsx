import React from "react";
import { ContextTypes, Product } from "../types";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

export interface Props {
  product: Product;
}

export default function CartModule({ product }: Props) {
  const src = urlFor(product?.image && product?.image[0])?.url();
  const { totalPrice, onRemove } = useStateContext() as ContextTypes;

  return (
    <div>
      <div className="grid grid-cols-5 items-center w-[35vw] p-2 place-content-evenly">
        <div className="w-[20px] h-[20px] bg-white flex justify-center items-center object-scale-down rounded">
          <Image alt="" src={src} width={15} height={15} />
        </div>

        <p className="hidden md:block">{product.name.slice(0, 10)}...</p>

        <p>x{product.quantity}</p>

        <p>${product.price * product.quantity}</p>

        <button
          onClick={() => onRemove(product)}
          className=" place-self-center bg-lightRed rounded w-1/3"
        >
          X
        </button>
      </div>
    </div>
  );
}
