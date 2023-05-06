// Tutorial href di react : https://www.youtube.com/watch?v=bdOHxlrS5UM
// Tutorial Navbar : https://www.youtube.com/watch?v=ZdlBXeNe7bg&list=PLYUZYclCvGnvncVJgNc-Cf3RYpbjS5qK9&index=10&t=1s
// Tutorial ganti icon dan title web : https://www.youtube.com/watch?v=7pJmM-XdPm8

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { HashLink as Link } from "react-router-hash-link";
import logoPutih from "./Img/Logo-White.png";
import logoBlack from "./Img/Logo-Black.png";
import cassavaCircle from "./Img/Cassava.jpeg";
import bgUtama from "./Img/Cassava-Field.jpg";
import waIcon from "./Img/Wa-icon-color.png";
import gambar1 from "./Img/building.png";
import gambar2 from "./Img/Cassava.png";
import gambar3 from "./Img/System.png";
import gambar4 from "./Img/Globe.png";
import gambar5 from "./Img/Variation.png";
import feature1 from "./Img/Commitment.png";
import feature2 from "./Img/Integrity.png";
import feature3 from "./Img/Top Quality.png";
import backArrowImg from "./Img/backArrow.png";
import forwardArrowImg from "./Img/forwardArrow.png";
import chipsProduct from "./Img/DriedCassava3.jpg";
import flourProduct from "./Img/Cassava-Flour.jpg";
import freshProduct from "./Img/Fresh cassava.jpeg";
import bgLine from "./Img/bgLine.png";

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

  // Slider Function
  // const slider = document.getElementById("slider");
  // const forwardArrow = document.getElementById("forwardArrow");
  // const backArrow = document.getElementById("backArrow");

  // let i = 0;

  // forwardArrow.onclick = function () {
  //   i = i - 300;
  //   slider.style.right = i + "px";
  // };
  // backArrow.onclick = function () {
  //   i = i + 300;
  //   slider.style.right = i + "px";
  // };

  const slider = document.getElementById("slider");
  const forwardArrow = () => {
    let width = slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft - width;
    console.log(width);
  };
  const backArrow = document.getElementById("backArrow");

  return (
    <BrowserRouter>
      <>
        {/* Helmet */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Agro Techno Cassava</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <body className="">
          {/* WA button */}
          <Link
            to="https://wa.me/6287874574409"
            className="flex items-center space-x-2 fixed bg-green-200  rounded-full right-5 bottom-5 md:bottom-10 p-2 md:right-10 md:p-3 z-50"
            target="newtab"
          >
            <img src={waIcon} alt="Wa-icon-color.png" className="w-10" />
            <div className="md:block hidden">Contact Us!</div>
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
          <div
            className="pt-3 p-2 sticky top-0  animasiBgColor z-50"
            id="navbar"
          >
            {/* Navbar Container */}
            <div className="mx-auto container">
              {/* Top Menu */}
              <div className="flex items-center justify-between">
                {/* Logo White */}
                <div className="">
                  <img
                    src={logoPutih}
                    alt="Logo-White.jpg"
                    className="w-[25%] md:w-[10%]"
                    id="logo"
                  />
                </div>
                {/* menu Items */}
                <div className="font-bold text-white space-x-9 hidden md:block">
                  <Link to="#aboutUs">About</Link>
                  <Link to="#journeyUs">Journey</Link>
                  <Link to="#featuresUs">Features</Link>
                  <Link to="#productUs">Products</Link>
                  <Link to="#contactUs">Contact</Link>
                </div>
              </div>
              {/* Bottom menu hidden
            <div className="hidden" id="bottomMenu"></div> */}
            </div>
          </div>
          {/* Hero Section */}
          <section className="container mx-auto">
            <div className="z-0 mt-72 mb-[480px]  w-3/4 md:w-[40%]">
              <div className="text-white text-sm md:text-2xl ">
                Supplying across the globe
              </div>
              <div className="font-bold text-white text-2xl md:text-5xl">
                The Leading Supplier of Cassava Product
              </div>
            </div>
          </section>
          {/* About Us Section */}
          <section
            className="flex flex-col container mx-auto pt-28 mb-96  md:flex-row gap-52"
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
                Everyday we processed 1.000 hectares of Cassava plantation
                across several island in Indonesia.
              </div>
              <div className="text-lg">
                We always check our products quality, if the quality is not meet
                with our requirement then we will discard the products. We
                always take care of our Cassava plantation to meet or Product
                requirements,
              </div>
              <div className="text-lg">
                Our Company has served +1.000 customer across the globe and our
                top priority is giving customers satisfaction and expectation,
              </div>
            </div>
            {/* Right items */}
            <div className="md:w-1/2 flex align-middle relative">
              {/* Grey Circle */}
              <div className="bg-gray-200 w-[190px] h-[190px] rounded-full absolute left-44 bottom-4 shadow-[6px_4px_10px_rgba(0,0,0,0.20)] z-0"></div>
              {/* ImageCircle */}
              <div className="w-[250px] h-[250px] rounded-full absolute z-10 right-48 bottom-12 shadow-[6px_4px_10px_rgba(0,0,0,0.20)]">
                <img
                  src={cassavaCircle}
                  alt="cassava.jpeg"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* GreenCircle */}
              <div className="absolute w-[85px] h-[85px] bg-green-500 rounded-full right-48 top-28 z-20 shadow-[4px_4px_10px_rgba(0,0,0,0.20)]"></div>
            </div>
          </section>

          <section className="container mx-auto mt-16 pt-20" id="journeyUs">
            {/* Journey Section */}
            <div className="w-full font-bold text-4xl text-center flex  justify-center align-middle mb-40">
              Journey
            </div>
            {/* Journey 2 Cols */}
            <div className="flex flex-col md:flex-row mx-16 gap-12">
              {/* Left items */}
              <div className="flex flex-col md:w-1/2">
                {/* Image1 Section */}
                <div className="flex mb-56 h-[150px] items-center">
                  {/* Image1 */}
                  <div className="w-[200px] flex">
                    <img
                      src={gambar1}
                      alt="Building"
                      className="object-contain"
                    />
                  </div>
                  <div className="px-10 flex flex-col">
                    <div className="font-bold text-xl mb-2 ">2017</div>
                    <div className="font-bold text-xl mb-2">
                      Agro Techno Cassava was Founded
                    </div>
                    <div className="items-center">
                      Agro Techno Cassava was founded on 2017 in Jakarta City.
                      Our first project is exporting cassava chips into Europe.
                    </div>
                  </div>
                </div>
                {/* Image3 Section */}
                <div className="flex mb-56 h-[150px] items-center">
                  {/* Image1 */}
                  <div className="w-[200px] flex">
                    <img
                      src={gambar3}
                      alt="Building"
                      className="object-contain"
                    />
                  </div>
                  <div className="px-10 flex flex-col">
                    <div className="font-bold text-xl mb-2 ">2018</div>
                    <div className="font-bold text-xl mb-2">
                      Build end to end Cassava system
                    </div>
                    <div className="items-center">
                      To increase Effectiveness and Efficiency in cassava
                      services we creating system that can improve our
                      productivity.
                    </div>
                  </div>
                </div>
                {/* Image5 Section */}
                <div className="flex mb-56 h-[150px] items-center">
                  {/* Image1 */}
                  <div className="w-[200px] flex">
                    <img
                      src={gambar5}
                      alt="Building"
                      className="object-contain"
                    />
                  </div>
                  <div className="px-10 flex flex-col">
                    <div className="font-bold text-xl mb-2 ">2019</div>
                    <div className="font-bold text-xl mb-2">
                      Deliver more derivative products
                    </div>
                    <div className="items-center">
                      Every Customer have various needs including with cassava
                      products therefore we create more derivative products to
                      meet customer needs.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-1/2">
                {/* Right Item */}
                {/* Image2 Section */}
                <div className="flex mt-52 mb-56 h-[150px] items-center">
                  {/* Image1 */}
                  <div className="w-[100px] flex">
                    <img
                      src={gambar2}
                      alt="Building"
                      className="object-contain"
                    />
                  </div>
                  <div className="px-10 flex flex-col">
                    <div className="font-bold text-xl mb-2 ">2018</div>
                    <div className="font-bold text-xl mb-2">
                      Expand 1.000 ha across Indonesia
                    </div>
                    <div className="items-center">
                      After many Cassava Projects we can expand our plantation
                      into 1.000 ha across indonesia.
                    </div>
                  </div>
                </div>
                {/* Image4 Section */}
                <div className="flex mb-56 h-[150px] items-center">
                  {/* Image1 */}
                  <div className="w-[100px] flex">
                    <img
                      src={gambar4}
                      alt="Building"
                      className="object-contain"
                    />
                  </div>
                  <div className="px-10 flex flex-col">
                    <div className="font-bold text-xl mb-2 ">2019</div>
                    <div className="font-bold text-xl mb-2">
                      Expanding Export Capacities
                    </div>
                    <div className="">
                      To increase Customer within the globe on 2019 we are
                      focusing on how to increase our market size.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Features Section */}

          <section
            className="container mx-auto mt-16 pt-20 mb-[26rem]"
            id="featuresUs"
          >
            {/* Journey Section */}
            <div className="w-full font-bold text-4xl text-center flex  justify-center align-middle mb-40">
              Features
            </div>
            {/* FeaturesItems */}
            <div className="flex flex-col gap-11 mx-16 justify-around md:flex-row">
              {/* Features 1 */}
              <div className="w-full flex flex-col items-center md:w-1/3 ">
                <img src={feature1} alt="commitment" className="w-[134px]" />
                <div className="font-bold text-xl mb-2">Commitment</div>
                <div className="text-center">
                  We will continue to provide the best to our customers and
                  investors all the time. Our opportunity to serve should be
                  viewed as a privilege that is not to be taken for granted.
                </div>
              </div>
              {/* Features 2 */}
              <div className="w-full flex flex-col items-center md:w-1/3">
                <img src={feature2} alt="commitment" className="w-[134px]" />
                <div className="font-bold text-xl mb-2">Integrity</div>
                <div className="text-center">
                  Integrity means telling the truth, keeping our word, and
                  treating others with fairness and respect. Integrity is one of
                  our most cherished assets. It must not be compromised.
                </div>
              </div>
              {/* Features 3 */}
              <div className="w-full flex flex-col items-center md:w-1/3">
                <img src={feature3} alt="commitment" className="w-[134px]" />
                <div className="font-bold text-xl mb-2">Top Quality</div>
                <div className="text-center">
                  Quality is exhibited in many ways by selling and supporting
                  products and services that delight customers, establishing a
                  work environment, and delivering financial results that meet
                  investor expectations.
                </div>
              </div>
            </div>
          </section>
          {/* Section Products */}
          <section
            className="bg-[#F0EDED] w-full h-[900px] mt-36 pt-20 relative mb-[11rem]"
            id="productUs"
          >
            {/* Section and box productUs */}

            <div className="container mx-auto h-[90%] gap-x-12 overflow-hidden relative">
              {/* backButton */}
              <div className="flex cursor-pointer w-[35px] absolute left-0 top-96">
                <img
                  src={backArrowImg}
                  alt="back button"
                  className=" object-contain"
                  onClick={backArrow}
                />
              </div>
              {/* cardSlider 1 box tuts for JS : https://www.youtube.com/watch?v=JXLICFXewj4&list=PLYUZYclCvGnvncVJgNc-Cf3RYpbjS5qK9&index=4&t=89s*/}
              {/* Card Div */}
              <div
                className="Card Div w-[4620px] absolute flex"
                id="slider"
                style={{ right: "-30s00px" }}
              >
                {/* untuk di slide */}
                {/* Card 1 */}
                <div className="flex gap-x-10 pt-10 w-full mb-24">
                  {/* Left Items product */}
                  {/* Description */}
                  <div className="flex flex-col gap-y-10 w-1/2 pl-24">
                    <div className="font-bold text-5xl">Products</div>
                    <div className="text-green-600 text-4xl font-thin mt-10">
                      Cassava Chips
                    </div>
                    <div className="text-xl font-thin mt-10 pr-10">
                      Cassava chips from Argo Techno cassava, made from thinly
                      sliced cassava roots that always used by farmer for animal
                      feed. we always keep our quality since it will help the
                      livestock happy and healthy.
                      <br></br>
                      <br></br>
                      Argo Techno Cassava Chips production base in various
                      Indonesia, our product is handle by dedicated
                      professional, we offer best quality of Cassava chips.
                    </div>
                    {/* contactUs Button */}
                    <div className="h-[25%] items-end">
                      <Link
                        to="https://wa.me/6287874574409"
                        className=" flex items-center rounded-lg border-2 border-gray-300 w-[150px] h-[40px] hover:bg-gray-300"
                        target="newtab"
                      >
                        <div className="w-[70%] flex items-center ">
                          <div className="pl-4">Contact Us</div>
                        </div>
                        <div className="w-[30%] flex items-center justify-start ">
                          <img
                            src={waIcon}
                            alt="icon WA"
                            className="object-contain w-[55%]"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="w-1/2 flex align-middle items-center justify-center">
                    <div className="flex w-[675px] h-[608px] ">
                      <img
                        src={chipsProduct}
                        alt="Dried Chip Cassava"
                        className="object-cover rounded-[2rem] "
                      />
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="flex gap-x-10 pt-10 w-full mb-24">
                  {/* Left Items product */}
                  {/* Description */}
                  <div className="flex flex-col gap-y-10 w-1/2">
                    <div className="font-bold text-5xl">Products</div>
                    <div className="text-green-600 text-4xl font-thin mt-10">
                      Cassava Flour
                    </div>
                    <div className="text-xl font-thin mt-10 pr-10">
                      Cassava flour is made by grating and drying the fibrous
                      cassava root. It's a great substitute for wheat and other
                      flours. You can use it in any recipe that calls for wheat
                      flour, making baking and cooking gluten-free meals easy.
                      Cassava flour is very rich in carbohydrates.
                      <br></br>
                      <br></br>
                      Argo Techno Cassava Flour production base in various
                      Indonesia, our product is handle by dedicated
                      professional, we offer best quality of Cassava Flour.
                    </div>
                    {/* contactUs Button */}
                    <div className="h-[25%] items-end">
                      <Link
                        to="https://wa.me/6287874574409"
                        className=" flex items-center rounded-lg border-2 border-gray-300 w-[150px] h-[40px] hover:bg-gray-300"
                        target="newtab"
                      >
                        <div className="w-[70%] flex items-center ">
                          <div className="pl-4">Contact Us</div>
                        </div>
                        <div className="w-[30%] flex items-center justify-start ">
                          <img
                            src={waIcon}
                            alt="icon WA"
                            className="object-contain w-[55%]"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="w-1/2 flex align-middle items-center justify-center">
                    <div className="flex w-[675px] h-[608px]">
                      <img
                        src={flourProduct}
                        alt="Dried Chip Cassava"
                        className="object-cover rounded-[2rem] "
                      />
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="flex gap-x-10 pt-10 w-full mb-24">
                  {/* Left Items product */}
                  {/* Description */}
                  <div className="flex flex-col gap-y-10 w-1/2">
                    <div className="font-bold text-5xl">Products</div>
                    <div className="text-green-600 text-4xl font-thin mt-10">
                      Fresh Cassava
                    </div>
                    <div className="text-xl font-thin mt-10 pr-10">
                      Cassava is a perennial plant with conspicuous, almost
                      palmate (fan-shaped) leaves resembling those of the
                      related castor-oil plant but more deeply parted into five
                      to nine lobes. The fleshy roots are reminiscent of dahlia
                      tubers. Different varieties range from low herbs to
                      branching shrubs and slender un branched trees.
                      <br></br>
                      <br></br>
                      Argo Techno Cassava production base in various Indonesia,
                      our product is handle by dedicated professional, we offer
                      best quality of Fresh Cassava.
                    </div>
                    {/* contactUs Button */}
                    <div className="h-[25%] items-end">
                      <Link
                        to="https://wa.me/6287874574409"
                        className=" flex items-center rounded-lg border-2 border-gray-300 w-[150px] h-[40px] hover:bg-gray-300"
                        target="newtab"
                      >
                        <div className="w-[70%] flex items-center ">
                          <div className="pl-4">Contact Us</div>
                        </div>
                        <div className="w-[30%] flex items-center justify-start ">
                          <img
                            src={waIcon}
                            alt="icon WA"
                            className="object-contain w-[55%]"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="w-1/2 flex align-middle items-center justify-center">
                    <div className="flex w-[675px] h-[608px] ">
                      <img
                        src={freshProduct}
                        alt="Dried Chip Cassava"
                        className="object-cover rounded-[2rem] "
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* forwardButton */}
              <div className="flex cursor-pointer w-[35px] absolute right-0 top-96 ">
                <img
                  src={forwardArrowImg}
                  alt="forward button"
                  className=" object-contain"
                  onClick={forwardArrow}
                />
              </div>
            </div>
          </section>
          {/* Contact Us Section */}
          <section className="relative mb-36" id="contactUs">
            <div className="flex">
              <img
                src={bgLine}
                alt=""
                className="-z-10 object-cover absolute"
              />
              <div className="container flex  mx-auto h-[721px] items-center">
                {/* leftItem Contact Us */}
                <div className="w-1/2 flex justify-center">
                  <div className="w-[573px] h-[251px] rounded-3xl border-2 border-[#F0EDED] bg-white ">
                    <div className="font-bold text-3xl py-6 px-10">
                      Contact Us
                    </div>
                    <div className="py-3 px-10 text-lg">
                      If you Interested or have questions about anything, feel
                      free to contact us!
                      <br></br>
                      <br></br>
                      We are happy to help you!
                    </div>
                  </div>
                </div>
                {/* rightItem contactUs */}
                <div className="w-1/2 flex justify-center">
                  <div className="flex flex-col gap-y-4">
                    <div className="font-bold text-xl">Address</div>
                    <div className="text-xl">DKI Jakarta, Indonesia</div>

                    <div className="font-bold text-xl">Email</div>
                    <div className="text-xl">agrotechnocassava@gmail.com</div>

                    <div className="font-bold text-xl">Whatsapp</div>
                    <div className="text-xl">
                      Or you can Chat us via whatsapp!
                    </div>
                    <div className="h-[25%] items-end">
                      <Link
                        to="https://wa.me/6287874574409"
                        className=" flex items-center rounded-lg border-2 border-green-100 w-[150px] h-[40px] bg-green-200 hover:bg-green-100"
                        target="newtab"
                      >
                        <div className="w-[70%] flex items-center ">
                          <div className="pl-4 ">Contact Us</div>
                        </div>
                        <div className="w-[30%] flex items-center justify-start ">
                          <img
                            src={waIcon}
                            alt="icon WA"
                            className="object-contain w-[55%]"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Footer 1 Section */}
          <section className="bg-[#313131] pb-6 border-0">
            <div className="container mx-auto">
              <div className="pt-10 pb-5 flex w-[95px]">
                <img
                  src={logoPutih}
                  alt="logoPutihAGC"
                  className="object-contain"
                />
              </div>
              <div className="text-2xl font-bold text-white">
                PT Agro Techno Cassava
              </div>
              <div className="text-white">
                Chat us for more information and promotion!
              </div>
            </div>
          </section>
          {/* Footer 2 Section */}
          <section className="bg-black">
            <div className="text-white container mx-auto py-2">
              &copy; Agro Techno Cassava. All right reserved
            </div>
          </section>
        </body>
      </>
    </BrowserRouter>
  );
}

export default App;
