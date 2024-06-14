import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "../Components/CartProduct";
import {
  totalItem,
  totalPrice,
} from "../Features/CartReducer";
const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="row">
            {cart.map((p) => (
              <div className="col-md-6 mb-4">
                <CartProduct product={p} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-4">
          <div className="bg-primary mt-4 rounded p-3">
            <h4 className="text-light">
              Total Items:{totalItem(cart)}
            </h4>
            <h4 className="text-light">
              Net Price:{totalPrice(cart)}
            </h4>
            <button className="btn btn-success">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
