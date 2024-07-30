import React, { useState } from "react";

export default function Img({ src, alt, className }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImageLoad = () => {
    setImgLoaded(true);
  };

  return (
    <div className={`${className} overflow-hidden`}>
      {!imgLoaded && (
        <div 
          className="animate-pulse bg-gray-300 rounded p-[50%] w-full"
        />
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full ${imgLoaded ? 'block' : 'hidden'}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}