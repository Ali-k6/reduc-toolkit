import { useDispatch } from "react-redux";
import "./App.css";
import { AppDispatch, useAppSelector } from "./redux/store";
import { decrement, increment, incrementByValue } from "./redux/reducer";

const App = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="container">
      <h1>Count:{value}</h1>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByValue(5))}>
          increment by value 5
        </button>
      </div>
    </div>
  );
};

export default App;
