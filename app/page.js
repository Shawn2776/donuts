import Carouselv2 from "@/components/Carouselv2";
import Hero from "@/components/Hero";
import React from "react";
import Donuts from "../data";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="absolute bottom-0">
        <Carouselv2 donuts={Donuts} />
      </div>
    </div>
  );
};

export default Home;
