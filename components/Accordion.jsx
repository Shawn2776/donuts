"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Accordion = ({ accordionInfo }) => {
  const [isChecked, setIsChecked] = useState(1);
  const [image, setImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [scrollPosition, setScrollPosition] = useState({
    classic: 0,
    deluxe: 0,
    other: 0,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Refs for each list
  const classicRef = useRef(null);
  const deluxeRef = useRef(null);
  const otherRef = useRef(null);

  const classic = accordionInfo.classic;
  const deluxe = accordionInfo.deluxe;
  const other = accordionInfo.other;

  const handleClick = (e) => {
    setIsChecked(e.target.value);
  };

  const scrollList = (listName, direction) => {
    const listRef =
      listName === "classic"
        ? classicRef
        : listName === "deluxe"
        ? deluxeRef
        : otherRef;

    if (listRef.current) {
      const currentScrollPosition = scrollPosition[listName];

      let newScrollPosition = currentScrollPosition;
      if (direction === "down") {
        newScrollPosition = Math.min(
          currentScrollPosition + 200,
          listRef.current.scrollHeight - listRef.current.clientHeight
        );
      } else if (direction === "up") {
        newScrollPosition = Math.max(currentScrollPosition - 200, 0);
      }

      listRef.current.scrollTop = newScrollPosition;
      setScrollPosition({ ...scrollPosition, [listName]: newScrollPosition });
    }
  };

  return (
    <div className="w-full join join-vertical">
      <div className="border collapse collapse-arrow join-item border-base-300">
        <input
          type="radio"
          name="my-accordion-4"
          checked={isChecked === 1 ? "checked" : null}
          onClick={() => setIsChecked(1)}
        />
        <div className="text-xl font-medium collapse-title">Classics</div>
        <div className="collapse-content">
          <div className="relative">
            {/* Scroll up button - only show if not at top */}
            {scrollPosition.classic > 0 && (
              <button
                className="absolute top-0 left-0"
                onClick={() => scrollList("classic", "up")}
              >
                <FaArrowUp className="text-pink-500 animate-bounce" />
              </button>
            )}

            <ul
              ref={classicRef}
              className="overflow-y-scroll h-[200px] scroll-smooth"
            >
              {accordionInfo.classic.map((image) => (
                <li
                  key={image.id}
                  className="flex justify-between pl-10 pr-8 text-xl"
                  onClick={() => setImage(image.url)}
                >
                  <span className="name">{image.name}</span>
                  <div className="flex-grow mx-2 border-b border-dotted"></div>
                  <span className="pr-8 price">${image.price}</span>
                </li>
              ))}
            </ul>
            {/* Scroll down button - only show if not at bottom */}
            {classicRef.current &&
              scrollPosition.classic <
                classicRef.current.scrollHeight -
                  classicRef.current.clientHeight && (
                <button
                  className="absolute bottom-0 left-0"
                  onClick={() => scrollList("classic", "down")}
                >
                  <FaArrowDown className="text-pink-500 animate-bounce" />
                </button>
              )}
          </div>
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
          <div className="relative">
            {/* Scroll up button - only show if not at top */}
            {scrollPosition.deluxe > 0 && (
              <button
                className="absolute top-0 left-0"
                onClick={() => scrollList("deluxe", "up")}
              >
                <FaArrowUp className="text-pink-500 animate-bounce" />
              </button>
            )}

            <ul
              ref={deluxeRef}
              className="overflow-y-scroll h-[200px] scroll-smooth"
            >
              {accordionInfo.deluxe.map((image) => (
                <li
                  key={image.id}
                  className="flex justify-between pl-10 pr-8 text-xl"
                  onClick={() => setImage(image.url)}
                >
                  <span className="name">{image.name}</span>
                  <div className="flex-grow mx-2 border-b border-dotted"></div>
                  <span className="pr-8 price">${image.price}</span>
                </li>
              ))}
            </ul>
            {/* Scroll down button - only show if not at bottom */}
            {deluxeRef.current &&
              scrollPosition.deluxe <
                deluxeRef.current.scrollHeight -
                  deluxeRef.current.clientHeight && (
                <button
                  className="absolute bottom-0 left-0"
                  onClick={() => scrollList("deluxe", "down")}
                >
                  <FaArrowDown className="text-pink-500 animate-bounce" />
                </button>
              )}
          </div>
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
          <div className="relative">
            {/* Scroll up button - only show if not at top */}
            {scrollPosition.other > 0 && (
              <button
                className="absolute top-0 left-0"
                onClick={() => scrollList("other", "up")}
              >
                <FaArrowUp className="text-pink-500 animate-bounce" />
              </button>
            )}

            <ul
              ref={otherRef}
              className="overflow-y-scroll h-[200px] scroll-smooth"
            >
              {accordionInfo.other.map((image) => (
                <li
                  key={image.id}
                  className="flex justify-between pl-10 pr-8 text-xl"
                  onClick={() => setImage(image.url)}
                >
                  <span className="name">{image.name}</span>
                  <div className="flex-grow mx-2 border-b border-dotted"></div>
                  <span className="pr-8 price">${image.price}</span>
                </li>
              ))}
            </ul>
            {/* Scroll down button - only show if not at bottom */}
            {otherRef.current &&
              scrollPosition.other <
                otherRef.current.scrollHeight -
                  otherRef.current.clientHeight && (
                <button
                  className="absolute bottom-0 left-0"
                  onClick={() => scrollList("other", "down")}
                >
                  <FaArrowDown className="text-pink-500 animate-bounce" />
                </button>
              )}
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        {image === null ? (
          <div className="skeleton w-[175px] h-[175px] flex justify-center text-center pt-[15%]">
            Select a Donut
            <br />
            Above
          </div>
        ) : (
          <Image
            src={image}
            alt="donut"
            width={175}
            height={175}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default Accordion;
