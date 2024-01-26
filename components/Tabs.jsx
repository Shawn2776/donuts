"use client";

import { useState } from "react";
import Donuts from "../data";
import Accordion from "@/components/Accordion";

const Tabs = () => {
  const [isActive, setIsActive] = useState("donuts");

  const classics = Donuts.filter((donut) => donut.type === "classic");
  const deluxes = Donuts.filter((donut) => donut.type === "deluxe");
  const others = Donuts.filter((donut) => donut.type === "other");

  const donutInfo = {
    classic: classics,
    deluxe: deluxes,
    other: others,
  };

  const drinkInfo = {
    test: "test",
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full mb-1 text-2xl">
        <div
          className={`flex justify-center w-full py-4 border rounded-md ${
            isActive === "donuts" ? "bg-secondary" : ""
          }`}
          onClick={() => setIsActive("donuts")}
        >
          Donuts
        </div>
        <div
          className={`flex justify-center w-full py-4 border rounded-md ${
            isActive === "donuts" ? "" : "bg-secondary"
          }`}
          onClick={() => setIsActive("drinks")}
        >
          Drinks
        </div>
      </div>
      <div>
        <div className={`${isActive === "donuts" ? "" : "hidden"} w-full`}>
          <Accordion accordionInfo={donutInfo} />
        </div>
        <div className={`${isActive === "donuts" ? "hidden" : ""} w-full`}>
          <h2 className="flex justify-center h-screen mt-20 text-2xl align-middle">
            Coming Soon
          </h2>
          {/* <Accordion accordionInfo={drinkInfo} /> */}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
