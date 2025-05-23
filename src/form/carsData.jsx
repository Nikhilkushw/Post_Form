import { useState, useEffect, useRef } from "react";

const CarBrandForm = ({ car }) => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const filteredBrands = car.filter((brand) =>
    brand.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (brand) => {
    setInputValue(brand);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="relative w-[50%]" ref={dropdownRef}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md"
          placeholder="Select car brand"
        />

        {showDropdown && filteredBrands.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto shadow">
            {filteredBrands.map((brand) => (
              <div
                key={brand}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(brand)}
              >
                {brand}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarBrandForm;
