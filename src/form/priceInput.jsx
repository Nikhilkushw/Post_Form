import { useState } from "react";

export default function PriceInput() {
  const [price, setPrice] = useState("");
  const [touched, setTouched] = useState(false);

  const isError = touched && (price === "" || parseInt(price) < 15000);

  return (
    <div className="w-full max-w-md">
      {/* Input Container */}
      <div
        className={`flex items-center border rounded px-4 py-2 transition-all duration-200 ${
          isError ? "border-2 border-red-500" : "border-gray-300"
        }`}
      >
        <span className="text-xl text-gray-700">₹</span>
        <span className="mx-2 text-gray-400">|</span>
        <input
          type="number"
          placeholder="Enter price (min ₹15000)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          onBlur={() => setTouched(true)}
          className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
        />
      </div>

      {/* Warning Text */}
      {isError && (
        <p className="text-red-600 text-xs mt-1">
          Price has a minimum value of 15000.
        </p>
      )}
    </div>
  );
}
