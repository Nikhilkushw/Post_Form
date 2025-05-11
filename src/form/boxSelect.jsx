import { useState } from "react";

const BoxSelector = ({boxSelectData, Heading}) => {
  const [selectedFuel, setSelectedFuel] = useState("");

  return (
    <div className="p-4">
      <p className="">{Heading} *</p>
      <div className="flex flex-wrap gap-2">
        {boxSelectData.map((fuel) => (
          <button
            key={fuel}
            onClick={() => setSelectedFuel(fuel)}
            className={`px-4 py-2 rounded-md border text-sm
              ${selectedFuel === fuel ? "bg-blue-100 border-black" : "bg-white border-gray-300"}
              hover:bg-blue-50 transition cursor-pointer`}
          >
            {fuel}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoxSelector;
