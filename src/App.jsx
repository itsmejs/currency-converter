import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
  const [from, setFrom] = useState("eur");
  const to = "inr";

  const [calculated, setCalculated] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  let result = currencyInfo[to];

  console.log(calculated, currencyInfo[to]);

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-w-sm mx-auto mb-8 mt-8">
        Conversion from {from} to {to} is: {calculated}
      </label>

      <form className="max-w-sm mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select a number:
        </label>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-w-sm mx-auto">
          {from.toUpperCase()} :
        </label>

        <input
          type="number"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"
          placeholder="Amount"
          required
          onChange={(e) => setCalculated(Number(e.target.value * result))}
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-w-sm mx-auto">
          {to.toUpperCase()} :
        </label>
        <input
          type="number"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Converted"
          required
          value={calculated}
          disabled={true}
        />
      </form>
    </div>
  );
}

export default App;
