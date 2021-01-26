import React from "react";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item, dispatch, cart }) => {
  return (
    <tr>
      <td style={{ width: 100, overflow: "hidden" }}>
        <img
          src={item.images[0].url}
          alt={item.images[0].url}
          className="img-thumbnail w-100"
          style={{ minWidth: 80, height: 80 }}
        />
      </td>

      <td style={{ minWidth: 200 }} className="w-50 align-middle">
        <h5 className="text-capitalize text-secondary">
          <Link href={`/product/${item._id}`}>
            <a>{item.title}</a>
          </Link>
        </h5>

        <h6 className="text-danger">${item.quantity * item.price}</h6>
        {item.inStock > 0 ? (
          <p className="mb-1 text-danger">In Stock: {item.inStock}</p>
        ) : (
          <p className="mb-1 text-danger">Out of Stock</p>
        )}
      </td>

      <td className="align-middle" style={{ minWidth: 150 }}>
        <button className="btn btn-outline-secondary"> - </button>
        <span className="px-3">{item.quantity}</span>
        <button className="btn btn-outline-secondary"> + </button>
      </td>

      <td className="align-middle" style={{ minWidth: 50, cursor: "pointer" }}>
        <FaTrashAlt className="text-danger" aria-hidden="true" />
      </td>
    </tr>
  );
};

export default CartItem;