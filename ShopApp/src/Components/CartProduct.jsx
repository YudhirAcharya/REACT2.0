import React from "react";

const CartProduct = ({ product }) => {
  return (
    <div className="d-flex border mt-2 p-2 ">
      <img
        src={product.thumbnail}
        alt=""
        className="w-25 h-25"
      />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h4>Price: {product.price}</h4>
        <div className="buttons">
          <button className="btn btn-success">Add</button>
          <button className="ms-2 me-2">
            {product.quantity}
          </button>
          <button className="btn btn-warning">
            Remove
          </button>
        </div>
        <button className="btn btn-danger">Cancel</button>
      </div>
    </div>
  );
};

export default CartProduct;
