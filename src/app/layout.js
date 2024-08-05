import { Poppins } from "next/font/google";
import "./globals.css";
import {randomUUID} from "crypto";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

const navList = [
  {"name": "Home", "url": "/"},
  {"name": "Shop", "url": "/shop"},
  {"name": "About", "url": "/about"},
  {"name": "Contact", "url": "/contact"},
].map(item => ({...item, "id":randomUUID()}));

export const metadata = {
  title: "Furniro",
  description: "A furniture shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header nav={navList}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
