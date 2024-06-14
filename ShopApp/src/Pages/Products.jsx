import React, { useState } from "react";
import Data from "../../Data.json";
import Product from "../Components/Product";

const Products = () => {
  const [products, setProducts] = useState(Data.products);
  return (
    <div className="container">
      <span className="h2 mt-2 mb-2">Our Products:</span>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((p) => (
          <Product product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
