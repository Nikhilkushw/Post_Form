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
  const [state, setState] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mode === "CURRENT") {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();

            const state = data.address.state || "";
            const city = data.address.city || data.address.town || data.address.village || "";

            setCurrentLocation(
              `State: ${state}, City: ${city}`
            );
          } catch {
            setCurrentLocation("Unable to fetch detailed location.");
          } finally {
            setLoading(false);
          }
        },
        () => {
          setCurrentLocation("Location access denied.");
          setLoading(false);
        }
      );
    }
  }, [mode]);

  const isStateInvalid = mode === "LIST" && !state;

  return (
    <div className="w-full max-w-md">
      <h2 className="text-lg font-bold">CONFIRM YOUR LOCATION</h2>

      {/* Tabs */}
      <div className="flex justify-center border-b pb-1 gap-28 mt-2">
        <span
          className={`font-semibold cursor-pointer pb-1 ${
            mode === "LIST" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
          }`}
          onClick={() => setMode("LIST")}
        >
          LIST
        </span>
        <span
          className={`font-semibold cursor-pointer pb-1 ${
            mode === "CURRENT" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
          }`}
          onClick={() => setMode("CURRENT")}
        >
          CURRENT LOCATION
        </span>
      </div>

      {/* Content */}
      <div className="mt-4">
        {mode === "LIST" ? (
          <div>
            <label className="block mb-1 font-medium">State *</label>
            <select
              className={`w-full border rounded-md px-4 py-3`}
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select a state</option>
              {indianStates.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
            {isStateInvalid && (
              <p className="text-red-500 text-xs mt-1">This field is mandatory</p>
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
