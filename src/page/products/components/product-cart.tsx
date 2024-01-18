import { useEffect, useState } from "react";

type ProductCartProps = {
  name?: string;
  price?: number;
};

const ProductCart = ({ name, price }: ProductCartProps) => {
  // khởi tạo một state
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleNothing = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>update count</button>
      <button onClick={handleNothing}>Nothing count</button>
    </>
  );
};

export default ProductCart;
