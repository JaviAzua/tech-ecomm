import { Product } from "../types";
import { urlFor } from "../lib/client";
import Image from "next/image";
import Link from "next/link";

export interface Props {
  product: Product;
}

export default function ProductCard({
  product: { image, name, slug, price },
}: Props) {
  const src = urlFor(image && image[0]).url();

  return (
    <Link href={`/product/${slug.current}`}>
      <div className=" cursor-pointer hover:scale-110 duration-500 group">
        <div className="bg-white rounded-3xl min-h-[200px] max-h-[200px] min-w-[200px] md:min-h-[230px] md:max-h-[230px] md:min-w-[230px] flex items-center justify-center">
          <Image
            alt=""
            className=" object-cover"
            src={src}
            width={170}
            height={170}
          />
        </div>
        <div className="w-2/3 group-">
          <h3 className="font-bold">{name.slice(0, 20)}...</h3>
          <p className=" mt-2 group-hover:underline">${price}</p>
        </div>
      </div>
    </Link>
  );
}
