import React, { useState, useRef } from "react";
import { Camera } from "lucide-react";

const ConfirmLocationForm = () => {
  const [name, setName] = useState("Nikhil Kushwah");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-md p-4 space-y-6 text-sm">
      <h2 className="text-lg font-bold mt-6">REVIEW YOUR DETAILS</h2>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={photo}
            className="w-20 h-20 rounded-full object-cover border"
            alt="Profile"
          />
          <button
            type="button"
            className="absolute bottom-0 right-0 bg-black bg-opacity-50 rounded-full p-1"
            onClick={() => fileInputRef.current.click()}
          >
            <Camera size={16} color="white" />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handlePhotoUpload}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-4 py-3 outline-none"
            maxLength={30}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="text-xs text-right text-gray-500">
            {name.length} / 30
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl mb-1">Let's verify your account</h3>
        <p className="text-sm mb-2">
          We will send you a confirmation code by SMS on the next step.
        </p>

        <label className="block mb-1">Mobile Phone Number *</label>
        <div className="flex border rounded-md overflow-hidden">
          <span className="bg-gray-100 px-3 py-2 text-gray-600">+91</span>
          <input
            type="tel"
            className="flex-1 px-4 py-3 outline-none"
            placeholder="Enter your 10-digit mobile number"
            maxLength={10}
            value={phone}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/\D/g, "");
              setPhone(numericValue);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ConfirmLocationForm;
