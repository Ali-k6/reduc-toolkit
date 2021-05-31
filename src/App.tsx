import { useDispatch } from "react-redux";
import "./App.css";
import { AppDispatch, useAppSelector } from "./redux/store";
import {
  decrement,
  increment,
  incrementByValue,
  getUser,
} from "./redux/reducer";

const App = () => {
  const { value, userData, loading } = useAppSelector((state) => state.counter);
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

        <button onClick={() => dispatch(getUser())}>Fetch User</button>
      </div>

      <div className="user__data_wrapper">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          userData && (
            <div className="user__data_user__details">
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.phone}</p>
              <p>Website: {userData.website}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default App;
