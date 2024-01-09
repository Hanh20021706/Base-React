import { useState } from "react";

// khởi tạo type
type ProductCartProps = {
  name: string;
  price: number;
};

// {name, price} : ProductCartProps ) truyền props vào component
const ProductCart = ({ name, price }: ProductCartProps) => {
  const [value, setValue] = useState("value 1");
  const handleSetValue = () => {
    setValue("update value");
  };
  return (
    <>
      <h2>{value}</h2>
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={handleSetValue}>update value</button>
    </>
  );
};

export default ProductCart;
