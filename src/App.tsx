import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { IRootState } from "./redux/store";
import { decrement, increment, incrementByValue } from "./redux/reducer";

const App = () => {
  const count = useSelector<IRootState>((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Count:{count}</h1>
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
