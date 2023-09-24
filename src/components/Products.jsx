import { useLoaderData } from "react-router-dom";
import Headline from "./Headline";
import Product from "./Product";

const Products = () => {
  const productsArray = useLoaderData();
  const products = productsArray.products;
  // console.log(products);

  return (
    <>
      <Headline headline={`Total Stock: ${products.length}`}></Headline>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto py-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
