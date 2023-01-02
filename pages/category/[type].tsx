import ProductCard from "../../components/ProductCard";
import { client } from "../../lib/client";
import { Product } from "../../types";

export interface Props {
  products: Product[];
}

export default function Category({ products }: Props) {
  return (
    <div className=" mx-auto">
      <h2 className=" text-center md:text-left text-2xl font-bold py-6">
        Category:{" "}
        <span className="text-base font-medium">
          {products[0].type.toUpperCase()}
        </span>
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-12">
        {products &&
          products?.map((product) => (
            <ProductCard product={product} key={product?._id} />
          ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params: { type } }: any) => {
  const query = `*[_type == "product" && type == '${type}']`;
  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
};
