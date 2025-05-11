import { useState } from "react";

const InputData = ({Heading, text}) => {
  const [year, setYear] = useState("");
  const [isTouched, setIsTouched] = useState(false); // Track if input was touched

  const isValid = year.trim() !== "" && !isNaN(year); // Validate numeric and not empty

  const handleChange = (e) => {
    setYear(e.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true); // Mark as touched on blur
  };

  return (
    <div>
      <p className={`${!isValid && isTouched ? "text-red-500 font-semibold" : "text-black"}`}>
        {Heading} *
      </p>
      <input
        type="number"
        value={year}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-[50%] h-12 px-4 rounded-md outline-none 
          border 
          ${!isValid && isTouched ? "border-red-500 border-2" : "border-gray-300"} 
          focus:ring-2 focus:ring-blue-900`}
        placeholder=""
      />
      {!isValid && isTouched && (
        <p className="text-red-500 text-xs mt-1">{text}</p>
      )}
    </div>
  );
};

export default InputData;
