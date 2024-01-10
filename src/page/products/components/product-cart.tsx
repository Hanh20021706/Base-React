import { useEffect, useState } from "react";

type ProductCartProps = {
  name?: string;
  price?: number;
};
const ProductCart = ({ name, price }: ProductCartProps) => {
  // khởi tạo một state
  const [count, setCount] = useState(1);

  const handleSetValue = () => {
    setCount(count + 1);
  };

  const handleNothing = () => {
    setCount(count);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleSetValue}>update count</button>
      <button onClick={handleNothing}>Nothing count</button>
    </>
  );
};

export default ProductCart;
