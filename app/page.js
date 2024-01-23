import Image from "next/image";

import donuts from "../public/donuts1.png";
import Hero from "@/components/Hero";
import Donuts from "@/components/Donuts";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Donuts />
    </main>
  );
}
