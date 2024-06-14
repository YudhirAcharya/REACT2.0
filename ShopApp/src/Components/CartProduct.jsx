import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };
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
          <button
            className="btn btn-warning"
            onClick={() => Decrease(product.id)}
          >
            Remove
          </button>
          <button className="ms-2 me-2 p-3 h5 rounded">
            {product.quantity}
            {console.log(product.quantity)}
          </button>
          <button
            className="btn btn-success"
            onClick={() => Increase(product.id)}
          >
            Add
          </button>
        </div>
        <button
          className="btn btn-danger"
          onClick={() =>
            dispatch({ type: "Remove", id: product.id })
          }
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
