import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <div class="card h-100">
        <img
          src={product.thumbnail}
          class="card-img-top h-75"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <h5 class="card-title">Price: {product.price}</h5>
          <p class="card-text">{product.discription}</p>
          <button
            href="#"
            class="btn btn-primary"
            onClick={() =>
              dispatch({
                type: "Add",
                product: { ...product, quantity: 1 },
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
