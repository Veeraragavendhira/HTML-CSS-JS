import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { increment, decrement } from "./CounterSlice.jsx";
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;