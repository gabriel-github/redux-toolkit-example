import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

export function Actions() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(increment())}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-2xl w-20 py-2.5 mr-2 mb-2"
      >
        +
      </button>

      <button
        type="button"
        onClick={() => dispatch(decrement())}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-2xl w-20 py-2.5 mr-2 mb-2"
      >
        -
      </button>
    </div>
  );
}
