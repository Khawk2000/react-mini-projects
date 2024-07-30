import React from "react";
import { productsArray, getProductData } from "../productsStore";
import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
    <>
      <h1 className="text-center p-3">Welcome to the Store!</h1>
      <div className="row row-xs-1 row-md-3 gap-4">
        {productsArray.map((product, idx) => (
          <div className="col" key={idx}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
