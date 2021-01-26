import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { DataContext } from "../store/GlobalState";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

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
    <div className="row mx-auto">
      <Head>
        <title>Cart Page</title>
      </Head>

      <div
        className="col-md-8 text-secondary table-responsive my-3"
        style={{ overflow: "hidden" }}
      >
        <h2 className="text-uppercase">Shopping Cart</h2>

        <table className="table my-3">
          <tbody>
            {cart.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                dispatch={dispatch}
                cart={cart}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
        <form>
          <h2>Shipping</h2>

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control mb-2"
          />

          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="form-control mb-2"
          />
        </form>

        <h3>
          Total: <span className="text-info">0</span>
        </h3>

        <Link href={auth.user ? "#" : "/signin"}>
          <a className="btn btn-dark my-2">Proceed with payment</a>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
