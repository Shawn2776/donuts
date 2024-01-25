"use client";

import Hero from "@/components/Hero";
import React, { useState } from "react";
import theDonut from "../../public/donuts1.png";
import Image from "next/image";
import Carouselv2 from "@/components/Carouselv2";
import Donuts from "../../data";
import Accordion from "@/components/Accordion";

const DonutsHome = () => {
  const classics = Donuts.filter((donut) => donut.type === "classic");
  const deluxes = Donuts.filter((donut) => donut.type === "deluxe");
  const others = Donuts.filter((donut) => donut.type === "other");

  const accordionInfo = {
    classic: classics,
    deluxe: deluxes,
    other: others,
  };

  return (
    // <div className="grid max-w-6xl grid-cols-2 mx-auto md:grid-cols-6">
    //   <div className="md:col-span-5">hi</div>
    //   <div className="col-span-1">
    //     <ul className="w-56 menu bg-base-200 rounded-box">
    //       <li>
    //         <a>Classic Donuts</a>
    //         <ul>
    //           {classics.map((image) => (
    //             <li key={image.id}>{image.name}</li>
    //           ))}
    //         </ul>
    //       </li>
    //       <li>
    //         <a>Deluxe Donuts</a>
    //         <ul>
    //           {deluxes.map((image) => (
    //             <li key={image.id}>{image.name}</li>
    //           ))}
    //         </ul>
    //       </li>
    //       <li>Donut Holes</li>
    //     </ul>
    //   </div>
    // </div>
    <Accordion accordionInfo={accordionInfo} />
  );
};

export default DonutsHome;
