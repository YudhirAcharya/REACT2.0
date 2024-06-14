import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "../Components/CartProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="row">
            {cart.map((p) => (
              <div className="col-md-6 mb-4" key={p.id}>
                <CartProduct product={p} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Cart;
