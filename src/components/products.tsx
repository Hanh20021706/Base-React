import React from "react";

type ProductsProps = {
  name?: string;
  price?: number;
};
const ProductPage = ({ name, price }: ProductsProps) => {
  return (
    <div className="">
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

export default ProductPage;