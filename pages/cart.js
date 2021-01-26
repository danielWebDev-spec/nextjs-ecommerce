import React, { useContext } from "react";
import Head from "next/head";
import { DataContext } from "../store/GlobalState";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (cart.length === 0)
    return (
      <div>
        <Head>
          <title>Cart Page</title>
        </Head>
        <img
          src="/empty_cart.jpg"
          alt="empty cart"
          className="img-responsive w-100"
        />
      </div>
    );

  return (
    <div>
      <Head>
        <title>Cart Page</title>
      </Head>

      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
