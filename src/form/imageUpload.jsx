import React, { useRef, useState } from "react";
import { Trash2, Camera } from "lucide-react";

const MAX_PHOTOS = 20;

const PhotoGrid = () => {
  const [photos, setPhotos] = useState(Array(MAX_PHOTOS).fill(null));
  const fileInputRef = useRef(null);
  const replaceIndexRef = useRef(null);

  const handleUpload = (e, index = null) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPhoto = { url: reader.result, file };
      setPhotos((prev) => {
        const updated = [...prev];
        if (index !== null) {
          updated[index] = newPhoto;
        } else {
          const firstEmpty = updated.findIndex((p) => p === null);
          if (firstEmpty !== -1) updated[firstEmpty] = newPhoto;
        }
        return updated;
      });
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleDelete = (index) => {
    setPhotos((prev) => {
      const updated = prev.filter((_, i) => i !== index); // remove photo
      updated.push(null); // keep length same
      while (updated.length < MAX_PHOTOS) updated.push(null);
      return updated;
    });
  };

  const handleBoxClick = (index) => {
    replaceIndexRef.current = index;
    fileInputRef.current.click();
  };

  return (
    <div className="p-6 max-w-md">
      <h2 className="text-xl font-semibold mb-4">Upload Photos</h2>
      <div className="grid grid-cols-3 gap-3">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => handleBoxClick(index)}
            className={`relative border rounded-xl overflow-hidden h-28 w-full flex items-center justify-center bg-gray-100 cursor-pointer ${
              index === 0 && photo ? "ring-2 ring-green-500" : ""
            }`}
          >
            {photo ? (
              <>
                <img
                  src={photo.url}
                  alt={`Uploaded ${index}`}
                  className="object-cover h-full w-full pointer-events-none"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                  className="absolute top-1 right-1 bg-white rounded-full p-1 shadow"
                >
                  <Trash2 size={16} className="text-red-500" />
                </button>
                <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white text-xs py-1 pointer-events-none">
                  Cover
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <Camera size={24} />
                <span className="text-xs mt-1">Add Photo</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={(e) =>
          handleUpload(e, replaceIndexRef.current !== null ? replaceIndexRef.current : null)
        }
      />
    </div>
  );
};

export default PhotoGrid;
