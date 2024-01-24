import { Special_Elite } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RightMenu from "@/components/RightMenu";

const special = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Hello Donuts",
  description:
    "Dive into the delightful world of Hello Donuts, where every bite is an experience! Our donut shop, located in Coeur d'Alene, ID, specializes in creating freshly made, gourmet donuts that tantalize your taste buds. From classic glazed to innovative flavors, each donut is a masterpiece of taste and texture. We pride ourselves on using only the finest ingredients to ensure top-notch quality and flavor. Whether you're craving a sweet treat for breakfast, a snack, or for catering special events, Hello Donuts is your go-to destination. Enjoy a warm, welcoming atmosphere and exceptional customer service while you indulge in our delicious creations. Visit us today and discover why we're Coeur d'Alene, ID's favorite donut destination!",
  keywords:
    "gourmet donuts, fresh donuts, hello donuts donut shop, sweet treats, breakfast, snacks, catering, innovative flavors, quality ingredients, customer service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="coffee">
      <body className={`${special.className}`}>{children}</body>
    </html>
  );
}
