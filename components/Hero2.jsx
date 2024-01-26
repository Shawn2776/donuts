"use client";

import { useEffect, useState } from "react";

const Hero2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Change the state to make the div visible after the component mounts
    setIsVisible(true);
  }, []);
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage: "url('/donut_hero.jpeg')",
      }}
    >
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-opacity-50 hero-overlay`}
      ></div>
    </div>
  );
};

export default Hero2;
