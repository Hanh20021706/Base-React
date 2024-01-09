import React from "react";
import ColorButtons from "../../components/ui/styled-button";
import ProductCart from "./components/product-cart";

const Products = () => {
  return (
    <>
      <h2>products page</h2>
      <ProductCart name="product a" price={200} />
    </>
  );
};

export default Products;
