import Hero from "@/components/Hero";
import React from "react";
import theDonut from "../../public/donuts1.png";
import Image from "next/image";
import Carouselv2 from "@/components/Carouselv2";
import images from "../../data";

const DonutsHome = () => {
  const classics = images.filter((image) => image.type === "classic");
  const deluxes = images.filter((image) => image.type === "deluxe");

  return (
    <div className="grid max-w-6xl grid-cols-6 mx-auto">
      <div className="col-span-4">hi</div>
      <div className="col-span-2 col-start-5">
        <ul className="w-56 menu bg-base-200 rounded-box">
          <li>
            <a>Classic Donuts</a>
            <ul>
              {classics.map((image) => (
                <li key={image.id}>{image.name}</li>
              ))}
            </ul>
          </li>
          <li>
            <a>Deluxe Donuts</a>
            <ul>
              {deluxes.map((image) => (
                <li key={image.id}>{image.name}</li>
              ))}
            </ul>
          </li>
          <li>Donut Holes</li>
        </ul>
      </div>
    </div>
  );
};

export default DonutsHome;
