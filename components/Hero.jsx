import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen hero bg-[url('../public/bgDonuts2.png')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Discover a World of Flavors
          </h1>
          <p className="mb-5">
            Embark on a delectable journey with our handcrafted donuts – each
            one a masterpiece of flavor, waiting to tantalize your taste buds.
            From classic favorites to innovative creations, find your perfect
            treat today!
          </p>
          <Link href="/donuts" className="btn btn-primary">
            Donuts, please!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
