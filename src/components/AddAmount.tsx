import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementWithAmount } from "../features/counterSlice";

export function AddAmount() {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  function addAmount() {
    if (amount <= 0) {
      return;
    }

    dispatch(incrementWithAmount(amount));
  }

  return (
    <div>
      <div>
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          id="amount"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center"
          placeholder="amount"
        />
      </div>

      <button
        type="button"
        onClick={addAmount}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 mr-2 mb-2 mt-2"
      >
        adicionar valor
      </button>
    </div>
  );
}
