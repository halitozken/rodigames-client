import { Montserrat } from "next/font/google";

import "../styles/globals.css";
import "../styles/reset.css";

import Category from "@/components/category";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: {
    default: "Free Online Games",
    template: "%s - Free Online Games",
  },
  description:
    "Unlock the exciting universe of free online games! Explore the most popular free online games. Create your own gaming experience and find your place in this fun world.",
};

const montserratFontFamily = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserratFontFamily.className}>
      <body className="bg-gradient-to-r from-blue-500 to-pink-500 ">
        <Header />
        <Category />
        {children}
        <Footer />
      </body>
    </html>
  );
}
