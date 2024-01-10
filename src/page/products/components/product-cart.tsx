import { useReducer } from "react";

type ProductCartProps = {
  name?: string;
  price?: number;
};

// Khai báo initialState và action type
const initialState = { count: 0 };
const INCREMENT = "increment";
const DECREMENT = "decrement";

//  Tạo reducer function
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Sử dụng ngoài UI component
const ProductCart = ({ name, price }: ProductCartProps) => {
  // khởi tạo một state
  const [count, setCount] = useReducer(reducer, initialState);

  const handleIncrement = () => setCount({ type: INCREMENT });
  const handleDecrement = () => setCount({ type: DECREMENT });

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
};

export default ProductCart;
