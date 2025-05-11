import { useState } from "react";

const AdTitleInput = ({Heading,warnText, minLen, padding}) => {
  const [title, setTitle] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const isTooShort = title.length > 0 && title.length < 10;

  return (
    <div className="w-[55%] max-w-xl">
      <label
        className={`block mb-1 ${
          isTooShort && isTouched ? "text-red-600 font-semibold" : "text-black"
        }`}
      >
        {Heading} *
      </label>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={minLen}
        className={`w-full ${padding} border-[1.3px] rounded-md outline-none ${
          isTooShort && isTouched
            ? "border-red-600 focus:border-red-600 border-2"
            : "border-gray-300 focus:border-blue-500"
        }`}
        placeholder=""
      />
      <div className="flex justify-between mt-1 text-xs">
        <p
          className={`${
            isTooShort && isTouched ? "text-red-600" : "text-gray-500"
          }`}
        >
          {isTooShort && isTouched
            ? "A minimum length of 10 characters is required. Please edit the field."
            : warnText}
        </p>
        <span className="text-gray-400">{title.length} / {minLen}</span>
      </div>
    </div>
  );
};

export default AdTitleInput;
