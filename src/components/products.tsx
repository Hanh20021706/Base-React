import React from "react";
import ColorButtons from "./ui/styled-button";

type ProductsProps = {
  name?: string;
  price?: number;
};
const ProductPage = ({ name, price }: ProductsProps) => {
  return (
    <div className="">
      <h2>{name}</h2>
      <p>{price}</p>

      <h2>products page</h2>
      <ColorButtons />
    </div>
  );
};

export default ProductPage;
