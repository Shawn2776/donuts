"use client";

import React, { useState } from "react";

const Accordion = ({ accordionInfo }) => {
  const [isChecked, setIsChecked] = useState(1);

  const classic = accordionInfo.classic;
  const deluxe = accordionInfo.deluxe;
  const other = accordionInfo.other;

  const handleClick = (e) => {
    setIsChecked(e.target.value);
  };

  return (
    <div className="w-full join join-vertical">
      <h1 className="my-2 text-2xl text-center">Donuts</h1>
      <div className="border collapse collapse-arrow join-item border-base-300">
        <input
          type="radio"
          name="my-accordion-4"
          checked={isChecked === 1 ? "checked" : null}
          onClick={() => setIsChecked(1)}
        />
        <div className="text-xl font-medium collapse-title">Classics</div>
        <div className="collapse-content">
          <ul className="overflow-y-scroll h-[200px]">
            {accordionInfo.classic.map((image) => (
              <li
                key={image.id}
                className="flex justify-between pl-10 pr-8 text-xl"
              >
                <span className="name">{image.name}</span>
                <div className="flex-grow mx-2 border-b border-dotted"></div>
                <span className="pr-8 price">${image.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border collapse collapse-arrow join-item border-base-300">
        <input
          type="radio"
          name="my-accordion-4"
          checked={isChecked === 2 ? "checked" : null}
          onClick={() => setIsChecked(2)}
        />
        <div className="text-xl font-medium collapse-title">Deluxe</div>
        <div className="collapse-content">
          <ul className="overflow-y-scroll h-[200px]">
            {accordionInfo.deluxe.map((image) => (
              <li
                key={image.id}
                className="flex justify-between pl-10 pr-8 text-xl"
              >
                <span className="name">{image.name}</span>
                <div className="flex-grow mx-2 border-b border-dotted"></div>
                <span className="pr-8 price">${image.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border collapse collapse-arrow join-item border-base-300">
        <input
          type="radio"
          name="my-accordion-4"
          checked={isChecked === 3 ? "checked" : null}
          onClick={() => setIsChecked(3)}
        />
        <div className="text-xl font-medium collapse-title">Others</div>
        <div className="collapse-content">
          <ul className="overflow-y-scroll max-h-[200px]">
            {accordionInfo.other.map((image) => (
              <li
                key={image.id}
                className="flex justify-between pl-10 pr-8 text-xl"
              >
                <span className="name">{image.name}</span>
                <div className="flex-grow mx-2 border-b border-dotted"></div>
                <span className="pr-8 price">${image.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
