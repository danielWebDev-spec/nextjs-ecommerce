import React from "react";
import Link from "next/link";

const ProductItem = ({ description, images, inStock, price, title, _id }) => {
  const userLink = () => {
    return (
      <>
        <Link href={`product/${_id}`}>
          <a className="btn btn-info" style={{ marginRight: "5px", flex: 1 }}>
            View
          </a>
        </Link>
        <button
          className="btn btn-success"
          style={{ marginLeft: "5px", flex: 1 }}
        >
          Buy
        </button>
      </>
    );
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={images[0].url} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title text-capitalize" title={title}>
          {title}
        </h5>
        <div className="row justify-content-between mx-0">
          <h6 className="text-danger">${price}</h6>
          {inStock > 0 ? (
            <h6 className="text-danger">In Stock: {inStock}</h6>
          ) : (
            <h6 className="text-danger">Out of stock</h6>
          )}
        </div>
        <p className="card-text" title={description}>
          {description}
        </p>

        <div className="row justify-content-between mx-0">{userLink()}</div>
      </div>
    </div>
  );
};

export default ProductItem;
