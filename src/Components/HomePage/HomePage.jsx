import React from "react";
import Header from "./Header";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import Timer from "../Timer";
import { useSelector } from "react-redux";
import moment from "moment";
import Footer from "./Footer";

const HomePage = () => {
  const date = useSelector((state) => state.dateTime.dateValue);
  const time = useSelector((state) => state.dateTime.timeValue);
  return (
    <section className="w-screen flex flex-col items-center ">
      {/* <Timer/> */}
      <Header />
      <section className="flex justify-center p-2 bg-[#E9A74E] w-full">
        <div className=" w-[80%]">
          <div className="flex justify-between items-center w-full">
            <img
              src="https://www.drikpanchang.com/images/icon/deepak/deepam.gif.pagespeed.ce.H0RitBz0ww.gif"
              alt="deep-logo"
              className="w-12"
            />
            <p className="text-3xl text-red-800">
              Online{" "}
              <span className="bg-red-800 text-amber-200 px-2 py-1">
                {" "}
                Panchang and Hindu Calendar
              </span>{" "}
              for the world{" "}
            </p>
            <img
              src="https://www.drikpanchang.com/images/icon/deepak/deepam.gif.pagespeed.ce.H0RitBz0ww.gif"
              alt="deep-logo"
              className="w-12"
            />
          </div>
          <div className="text-sm gap-2 flex justify-end items-center my-2">
            <button className="gap-1 cursor-pointer flex items-center justify-center py-1 px-3 bg-black text-white rounded-2xl ">
              {" "}
              <FaXTwitter /> Post{" "}
            </button>
            <button className="gap-1 cursor-pointer flex items-center justify-center py-1 px-3 bg-black text-white rounded-2xl">
              {" "}
              <FaXTwitter /> Follow{" "}
            </button>
            <button className="gap-1 cursor-pointer flex items-center justify-center py-1 px-3 bg-blue-500 text-white rounded-2xl">
              {" "}
              <AiTwotoneLike /> Like 37k{" "}
            </button>
            <button className="gap-1 cursor-pointer flex items-center justify-center py-1 px-3 bg-blue-500 text-white rounded-2xl">
              {" "}
              Share{" "}
            </button>
          </div>
        </div>
      </section>
      <section className="pageWrapper pattern ">
        <div className="py-2">
          <div className="bg-white p-4 rounded shadow-md">
            <div className="flex justify-between items-center mb-4">
              <button className="bg-gray-200 px-4 py-2 rounded">
                Stop seeing this ad
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded">
                Why this ad?
              </button>
            </div>
            <div className="text-center">
              <button className="title-color text-white px-4 py-2 rounded">
                Sign in with Google Dialog
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#948720] rounded shadow-md text-white p-2 text-center">
          <div className="flex justify-around items-center ">
            <div className="leading-5 text-left">
              <div className="flex items-center">
                <img
                  src="./moon/moon.png"
                  alt="Moon Phase"
                  className="w-18 h-18 mr-2"
                />

                <div>
                  <h2 className="text-xl font-bold text-orange-300">
                    12, Magha
                  </h2>
                  <p>Krishna Paksha, Dwadashi</p>
                  <p>2081 Pingala, Vikrama Samvata</p>
                </div>
              </div>
              <p>New Delhi, India</p>
            </div>
            <div className="text-center leading-5">
              <h2 className="text-2xl leading-5 font-bold text-orange-300">
                {moment().format("DD")}
              </h2>
              <p>{moment().format("MMMM YYYY")}</p>
              <p>{moment().format("dddd")}</p>
            </div>
          </div>
          <a href="#" className=" underline">
            Shattila Ekadashi Parana, Republic Day
          </a>
        </div>
      </section>
      <Footer/>
    </section>
  );
};

export default HomePage;
