import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  //we extract data from store using useselecter
  const counter = useSelector((state) => state.counter.value);

  //sending data using dispatch
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="counter">
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <div>Counter: {counter}</div>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
