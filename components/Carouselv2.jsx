import Image from "next/image";
import React from "react";

const Carouselv2 = ({ images }) => {
  return (
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] hover:[animation-play-state:paused]">
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {images.map((image, index) => (
          <li key={index}>
            <Image
              src={image.url}
              alt={image.name}
              width={100}
              height={100}
              className="px-2 py-1 rounded-full shadow-md bg-neutral-600 shadow-black"
            />
          </li>
        ))}
      </ul>
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll flex-shrink-0">
        {images.map((image, index) => (
          <li key={index}>
            <Image
              src={image.url}
              alt="Picture of the author"
              width={100}
              height={100}
              className="px-2 py-1 rounded-full shadow-md bg-neutral-600 shadow-black"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carouselv2;
