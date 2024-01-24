"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function NextCard() {
  const list = [
    {
      title: "Orange",
      img: "/donuts1.png",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/donuts1.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/donuts1.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/donuts1.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/donuts1.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/donuts1.png",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/donuts1.png",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/donuts1.png",
      price: "$12.20",
    },
  ];

  return (
    <div className="grid max-w-6xl grid-cols-2 gap-2 mx-auto sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="p-0 overflow-visible">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="justify-between text-small">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
