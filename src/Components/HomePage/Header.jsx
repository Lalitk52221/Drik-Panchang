import React from "react";
import { Zodiac } from "../../Data/Zodiac";
import Timer from "../Timer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  
  return (
    <div>
      <header className="bg-orange-800 border-b-1  text-white p-1 flex justify-between items-center w-screen">
        <div className="flex items-center">
          <img
            src="./images/logo.png"
            alt="Drik Panchang"
            className="h-16 mx-4"
          />
        </div>
        <div className="flex items-center space-x-4 ">
          <div className="flex justify-center items-center rounded bg-[#E9A74E] text-orange-900 px-2">
            <img
              src="./images/search.png"
              alt="setting"
              className=" w-4 h-4 shadow-2xl   "
            />
            <input
              type="text"
              placeholder="Search Drik Panchang"
              className="p-2 h-12 placeholder:text-orange-900/60 font-semibold"
            />
          </div>
          <button className="headerIcon">EN</button>
          <button className=" bg-white cursor-pointer h-12 text-gray-600 font-semibold px-4 py-2 rounded">
            Sign in with Google
          </button>
          <button className="headerIcon">
            <img src="./images/play-store.png" alt="apple" className="w-7" />
          </button>
          <button className="headerIcon">
            <img
              src="./images/apple.jpeg"
              alt="apple"
              className="w-7 mix-blend-color-burn"
            />
          </button>
          <button className="headerIcon">
            <img src="./images/setting.svg" alt="setting" className=" w-7   " />
          </button>
          <button className="headerIcon text-amber-100 ">
            <Timer />
          </button>
        </div>
      </header>
      <nav className="bg-orange-800 text-white p-2 flex justify-center space-x-2">
        <Link to={"/"} href="#" className="hover:underline headerMenu">
          Home
        </Link>
        <Link to={"/panchang"} className="hover:underline headerMenu">
          Panchang
        </Link>
        <Link to={"calendars"} className="hover:underline headerMenu">
          Calendars
        </Link>
        <Link to={"muhurat"} className="hover:underline headerMenu">
          Muhurat
        </Link>
        <Link to={"/vrateUpwavas"} className="hover:underline headerMenu">
          Vrat & Upavas
        </Link>
        <Link to={"/festivals"} className="hover:underline headerMenu">
          Festivals
        </Link>
        <Link to={"/jyotish"} className="hover:underline headerMenu">
          Jyotish
        </Link>
        <Link to={"/planets"} className="hover:underline headerMenu">
          Planets
        </Link>
        <Link to={"/lyrics"} className="hover:underline headerMenu">
          Lyrics
        </Link>
        <Link to={"/gallery"} className="hover:underline headerMenu">
          Gallery
        </Link>
        <Link to={"/others"} className="hover:underline headerMenu">
          Others
        </Link>
      </nav>

      <div className="bg-[#E9A74E] p-4 flex justify-around">
        <div className="flex space-x-4 font-comic">
          {Zodiac.map((item, index) => (
            <div key={index}>
              <div className="text-center">
                <p className="text-sm text-orange-900 ">{item.nameHi}</p>
                <img src={item.img} alt="Aries" className="h-10 mx-auto" />
                <p className="text-xs text-orange-900 opacity-50">
                  {item.nameEng}
                </p>
              </div>
            </div>
          ))}

          {/* Add other zodiac signs similarly */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
