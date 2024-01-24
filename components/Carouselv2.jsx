import Image from "next/image";
import React from "react";

const Carouselv2 = ({ images }) => {
  return (
    <div className="flex logos">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex animate-[slide-left_1s_ease-in-out_infinite]"
        >
          <Image
            src={image.url}
            width={200}
            height={200}
            alt={image.name}
            className="img"
          />
        </div>
      ))}
      {images.map((image, index) => (
        <div
          key={index}
          className="flex animate-[slide-left_1s_ease-in-out_infinite]"
        >
          <Image
            src={image.url}
            width={200}
            height={200}
            alt={image.name}
            className="img"
          />
        </div>
      ))}
    </div>
  );
};

export default Carouselv2;
