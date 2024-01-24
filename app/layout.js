import { Special_Elite } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextProvider from "@/providers/NextUIProvider";

const special = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Hello Donuts",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="coffee">
      <body className={special.className}>{children}</body>
    </html>
  );
}
