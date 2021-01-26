import React, { useState } from "react";
import Head from "next/head";
import { getData } from "../utils/fetchData";
import ProductItem from "../components/product/ProductItem";

const Home = (props) => {
  const [products, setProducts] = useState(props.products);

  return (
    <div className="products">
      <Head>
        <title>Wish that was mine</title>
      </Head>
      {products.length === 0 ? (
        <h2>No Products</h2>
      ) : (
        products.map((product) => (
          <ProductItem key={product._id} {...product} />
        ))
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await getData("product");
  console.log(res);
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result,
    }, // will be passed to the page component as props
  };
}

export default Home;
