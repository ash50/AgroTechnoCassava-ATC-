// Tutorial href di react : https://www.youtube.com/watch?v=bdOHxlrS5UM
// Tutorial Navbar : https://www.youtube.com/watch?v=ZdlBXeNe7bg&list=PLYUZYclCvGnvncVJgNc-Cf3RYpbjS5qK9&index=10&t=1s
// Tutorial ganti icon dan title web : https://www.youtube.com/watch?v=7pJmM-XdPm8

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { HashLink as Link } from "react-router-hash-link";
import logoPutih from "./Img/Logo-White.png";
import logoBlack from "./Img/Logo-Black.png";
import bgUtama from "./Img/Cassava-Field.jpg";
import waIcon from "./Img/Wa-icon-color.png";
import { Helmet } from "react-helmet";

function App() {
  // Versi Arrow Function ()=>
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const scrollValue = window.scrollY;
    if (scrollValue < 150) {
      navbar.classList.remove("bgColor");
    } else {
      navbar.classList.add("bgColor");
    }
  });

  // versi non arrow function () => (sebenarnya hanya beda di jika arrow () jika function () harus di define dulu --> case ini changeBg)
  // window.addEventListener("scroll", changeBg);
  // function changeBg() {
  //   const navbar = document.getElementById("navbar");
  //   const scrollValue = window.scrollY;
  //   if (scrollValue < 150) {
  //     navbar.classList.remove("bgColor");
  //   } else {
  //     navbar.classList.add("bgColor");
  //   }
  // }
  return (
    <BrowserRouter>
      <body className="vh">
        {/* Helmet */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Agro Techno Cassava</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        {/* WA button */}
        <Link
          to="https://wa.me/6287874574409"
          className="flex items-center space-x-2 fixed bg-green-200 bottom-10 right-10 rounded-full p-3"
          target="newtab"
        >
          <img src={waIcon} alt="Wa-icon-color.png" className="w-10" />
          <div>Contact Us!</div>
        </Link>
        {/* Background Size  */}
        <div className="w-full h-[986px] absolute -z-10">
          <img
            src={bgUtama}
            alt="Cassava-Field.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Navbar*/}
        <div className="pt-3 p-2 sticky top-0  animasiBgColor" id="navbar">
          {/* Navbar Container */}
          <div className="mx-auto container">
            {/* Top Menu */}
            <div className="flex items-center justify-between">
              {/* Logo White */}
              <div className="">
                <img
                  src={logoPutih}
                  alt="Logo-White.jpg"
                  className="w-[20%]"
                  id="logo"
                />
              </div>
              {/* menu Items */}
              <div className="font-bold text-white space-x-9">
                <Link to="#aboutUs">About</Link>
                <Link to="#">Journey</Link>
                <Link to="#">Features</Link>
                <Link to="#">Products</Link>
                <Link to="#">Contact</Link>
              </div>
            </div>
            {/* Bottom menu hidden
            <div className="hidden" id="bottomMenu"></div> */}
          </div>
        </div>
        {/* Hero Section */}
        <section className="container mx-auto">
          <div className="z-0 mt-72 mb-[480px]  w-[40%]">
            <div className="text-white text-lg font-bold">
              Supplying across the globe
            </div>
            <div className="font-bold text-white text-5xl">
              The Leading Supplier of Cassava Product
            </div>
          </div>
        </section>
        {/* About Us Section */}
        <section
          className="flex flex-col container mx-auto pt-28  md:flex-row gap-52"
          id="aboutUs"
        >
          {/* left Items */}
          <div className="space-y-12 md:w-1/2">
            <div className="font-bold text-4xl">About Us</div>
            <div className="text-lg">
              Agro Techno Cassava is the leading Cassava supplier based on
              Indonesia. We provided various Cassava products for example
              <span className="ml-2 font-bold text-green-600">
                Cassava Chips, Cassava Flour, and Fresh Cassava.
              </span>
              Everyday we processed 1.000 hectares of Cassava plantation across
              several island in Indonesia.
            </div>
            <div className="text-lg">
              We always check our products quality, if the quality is not meet
              with our requirement then we will discard the products. We always
              take care of our Cassava plantation to meet or Product
              requirements,
            </div>
            <div className="text-lg">
              Our Company has served +1.000 customer across the globe and our
              top priority is giving customers satisfaction and expectation,
            </div>
          </div>
          {/* Right items */}
          <div className="md:w-1/2"></div>
        </section>
      </body>
    </BrowserRouter>
  );
}

export default App;
