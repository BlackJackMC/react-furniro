import { Poppins } from "next/font/google";
import {randomUUID} from "crypto";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";

import {shopTheme} from "@/design/theme";

import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";

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
      <ThemeProvider theme={shopTheme}>
      <body className={`${poppins.className} flex flex-col min-h-[100vh]`}>
        <Header nav={navList}/>
        {children}
        <Footer nav={navList}/>
      </body>
      </ThemeProvider>
    </html>
  );
}
