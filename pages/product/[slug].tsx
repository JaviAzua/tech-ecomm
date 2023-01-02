import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { ContextTypes, Product } from "../../types";
import { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import Head from "next/head";
import ProductCard from "../../components/ProductCard";
import { useStateContext } from "../../context/StateContext";

export interface Props {
  product: Product;
  productsAll: Product[];
}

export default function ProductDetails({ product, productsAll }: Props) {
  const [imgSelect, setImgSelect] = useState(0);
  const { qty, incQty, decQty, onAdd, setCartOpen } =
    useStateContext() as ContextTypes;

  const productsNoSelected = productsAll.filter((p) => p._id !== product._id);

  const src = urlFor(product.image && product?.image[imgSelect])?.url();

  const handleBuy = () => {
    onAdd(product, qty);
    setCartOpen(true);
  };

  return (
    <div>
      <Head>
        <title>Tech Ecomm - {product.name}</title>
        <meta
          name="tech_ecommerce"
          content="tech ecommerce made by Javier Azua in NEXTjs with Tailwind, Ts and Sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex mt-10 gap-5 flex-wrap justify-center p-4 ">
        <div>
          <div className="relative rounded-xl bg-white h-[400px] w-[400px]  md:h-[430px] md:w-[430px] flex items-center justify-center">
            <Image
              alt=""
              src={src}
              fill
              className="rounded-xl object-contain"
            />
          </div>
          <div className="flex gap-4 items-center justify-center py-5">
            {product.image.map((image, i) => (
              <div
                key={i}
                className="relative flex items-center bg-white w-[80px] h-[80px] rounded-xl"
              >
                <Image
                  className={`${
                    i === imgSelect ? " bg-lightRed" : ""
                  } rounded-xl object-cover`}
                  src={urlFor(image).url()}
                  alt=""
                  fill
                  onMouseEnter={() => setImgSelect(i)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <div className="flex text-lightRed">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <span className="text-black/80 text-xs">(30)</span>
          </div>
          <h3 className="pt-5 font-semibold">Description:</h3>
          <p className="w-56">{product.description}</p>
          <br />
          <p className="text-2xl font-bold text-lightRed">
            $<span className="underline">{product.price}</span>
          </p>
          <br />

          <div className="flex gap-3 items-center select-none">
            <h3 className="font-semibold">Quantity:</h3>
            <span className="text-3xl md:text-2xl text-lightRed cursor-pointer ">
              <AiOutlineMinusCircle onClick={decQty} />
            </span>
            <span>{qty}</span>
            <span className="text-3xl md:text-2xl text-lightRed cursor-pointer">
              <AiOutlinePlusCircle onClick={incQty} />
            </span>
          </div>
          <br />
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onAdd(product, qty)}
              className="py-4 px-6 rounded border border-lightRed text-lightRed hover:scale-110 duration-500"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuy}
              className="py-4 px-6 rounded bg-lightRed text-white hover:scale-110 duration-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-center mt-28 text-2xl font-semibold">
        You May Also Like
      </h2>
      <div className="min-h-[40vh] flex items-center relative overflow-x-scroll scrollbar-hide">
        <div className="flex gap-6 animate-marquee whitespace-nowrap hover:pause">
          {productsNoSelected.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product: Product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  const queryProducts = `*[type == '${product.type}']`;
  const productsAll = await client.fetch(queryProducts);

  return {
    props: {
      product,
      productsAll,
    },
  };
};
