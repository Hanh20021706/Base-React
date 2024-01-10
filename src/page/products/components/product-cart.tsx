import { useState } from "react";

type ProductCartProps = {
  name?: string;
  price?: number;
};

const ProductCart = ({ name, price }: ProductCartProps) => {
  // khởi tạo một state
  const [count, setCount] = useState(1);

  // update lại state
  const handleSetValue = () => {
    setCount(count + 1);
  };
  return (
    <>
      {/* hiển thị state  */}
      <h2>{count}</h2>
      <button onClick={handleSetValue}>update count</button>
    </>
  );
};

export default ProductCart;
