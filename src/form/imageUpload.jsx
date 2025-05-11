import React from "react";

const MAX_PHOTOS = 20;

const PhotoGrid = () => {
  const photos = Array(MAX_PHOTOS).fill(null);

  return (
    <div className="p-6 max-w-md">
      <h2 className="text-xl font-semibold mb-4">Uploaded Photos</h2>
      <div className="grid grid-cols-3 gap-3">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative border rounded-xl overflow-hidden h-28 w-full flex items-center justify-center bg-gray-100`}
          >
            {photo ? (
              <>
                <img
                  src={photo.url}
                  alt={`Uploaded ${index}`}
                  className="object-cover h-full w-full pointer-events-none"
                />
                <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white text-xs py-1 pointer-events-none">
                  Cover
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <span className="text-xs mt-1">Add Photo</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
