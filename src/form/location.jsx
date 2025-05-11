import { useEffect, useState } from "react";

export default function LocationSelector() {
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
  ];

  const [mode, setMode] = useState("LIST");
  const [selectedState, setSelectedState] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mode === "CURRENT") {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`);
          setLoading(false);
        },
        () => {
          setCurrentLocation("Location access denied.");
          setLoading(false);
        }
      );
    }
  }, [mode]);

  const isStateInvalid = mode === "LIST" && !selectedState;

  return (
    <div className="w-full max-w-md p-4 border rounded-md shadow-sm">
      <h2 className="text-lg font-bold text-center">Confirm Your Location</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-12 border-b mt-4 pb-2">
        <button
          className={`font-semibold pb-1 ${
            mode === "LIST"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setMode("LIST")}
        >
          LIST
        </button>
        <button
          className={`font-semibold pb-1 ${
            mode === "CURRENT"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setMode("CURRENT")}
        >
          CURRENT LOCATION
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {mode === "LIST" ? (
          <div>
            <label className="block mb-1 font-medium">State *</label>
            <select
              className="w-full border rounded-md px-4 py-2"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select a state</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {isStateInvalid && (
              <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
            )}
          </div>
        ) : (
          <div className="text-gray-700 font-medium">
            {loading ? "Fetching location..." : currentLocation}
          </div>
        )}
      </div>
    </div>
  );
}
