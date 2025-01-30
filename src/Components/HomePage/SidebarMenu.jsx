import { useDispatch } from "react-redux";
import { toggle } from "../Redux/toggle";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const SidebarMenu = () => {
  const dispatch = useDispatch();
  const [panchangList, setPanchangList] = useState(true);
  const [calenderList, setCalenderList] = useState(true);
  return (
    <div className="sidebar absolute h-screen title-color z-1 transition-all">
      <header className="flex flex-col gap-4 items-center bg-orange-800 p-6 ">
        <img src="./images/logo.png" className="h-12 " alt="" />
        <div className="flex gap-2 ">
          <img
            src="./SocialMediaIcon/play_store_badge.svg"
            className="h-10"
            alt=""
          />
          <img
            src="./SocialMediaIcon/app_store_badge.svg"
            className="h-10"
            alt=""
          />
        </div>
      </header>
      <nav className="sidenavbar ">
        <ul className="flex flex-col gap-0">
          <li>
            {" "}
            <div className="flex gap-3 items-center">
              <img src="./images/panditji.png" alt="" /> Home
            </div>
          </li>
          <li>
            {" "}
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <img src="./images/home-card-img/1.png" alt="" /> Panchang
              </div>
              {panchangList ? (
                ""
              ) : (
                <IoMdArrowDropdown
                  className="text-xl"
                  onClick={() => setPanchangList((prev) => !prev)}
                />
              )}
              {panchangList && (
                <IoClose
                  className="text-lg"
                  onClick={() => setPanchangList((prev) => !prev)}
                />
              )}
            </div>
          </li>
          {panchangList && (
            <ul className="nested-list">
              <li>Month Panchang</li>
              <li>Dainik Panchang</li>
              <li>Assamese Panjika</li>
              <li>Bengali Panjika</li>
              <li>Tamil Panchagam</li>
              <li>Odia Panji</li>
              <li>Malyalam Panchagam</li>
              <li>Marathi Panchang</li>
              <li>Gujarati Panchang</li>
              <li>Kannada Panchang</li>
              <li>Telugu Panchang</li>
              <li>Nepali Patro</li>
              <li>ISKCON Panchang</li>
              <li>Chandrabalam</li>
              <li>Panchang Utilities</li>
              <li>Nakshatra</li>
            </ul>
          )}
          <li>
            {" "}
            <div className="flex justify-between items-center w-full">

            <div className="flex gap-3 items-center">
              <img src="./images/home-card-img/2.png" alt="" /> Calendars
            </div>
            {calenderList ? (
                ""
              ) : (
                <IoMdArrowDropdown
                  className="text-xl"
                  onClick={() => setCalenderList((prev) => !prev)}
                />
              )}
              {calenderList && (
                <IoClose
                  className="text-lg"
                  onClick={() => setCalenderList((prev) => !prev)}
                />
              )}
            </div>
          </li>
          {calenderList && (
            <ul className="nested-list">
              <li>Hindu Calendar</li>
              <li>Indian Calendar</li>
              <li>Tamil Calendar</li>
              <li>Malayalam Calendar</li>
              <li>Sankranti Calendar</li>
              <li>Diwali Calendar</li>
              <li>Durga Puja Calendar</li>
              <li>Shardiya Navratri</li>
              <li>Chaitra Navratri</li>
              <li>Odia Calendar</li>
              <li>Bengali Calendar</li>
              <li>Gujarati Calendar</li>
              <li>Marathi Calendar</li>
              <li>Telugu Calendar</li>
              <li>ISKCON Calendar</li>
            </ul>
          )}
          <li>
            {" "}
            <div className="flex gap-3 items-center">
              <img src="./images/home-card-img/4.png" alt="" /> Muhurat
            </div>
            <IoMdArrowDropdown className="text-xl" />
          </li>
          <li>
            {" "}
            <div className="flex gap-3 items-center">
              <img src="./images/home-card-img/8.png" alt="" /> Vrat & Upavas
            </div>
            <IoMdArrowDropdown className="text-xl" />
          </li>
          <li>
            {" "}
            <div className="flex gap-3 items-center">
              <img src="./images/home-card-img/7.png" alt="" /> Festivals
            </div>
            <IoMdArrowDropdown className="text-xl" />
          </li>
          <li>
            {" "}
            <div className="flex gap-3 items-center">
              <img src="./images/home-card-img/14.png" alt="" /> Jyotish
            </div>
            <IoMdArrowDropdown className="text-xl" />
          </li>
          <li>
            {" "}
            <div className="flex gap-3 items-center">
              <img src="./images/home-card-img/9.png" alt="" /> Planets
            </div>
            <IoMdArrowDropdown className="text-xl" />
          </li>
          <li>
            {" "}
            <div className="flex gap-3 items-center">
              <img src="./images/home-card-img/10.png" alt="" /> Lyrics
            </div>
            <IoMdArrowDropdown className="text-xl" />
          </li>
          <li>
            {" "}
            <div className="flex gap-3 items-center">
              <img src="./images/home-card-img/5.png" alt="" /> Gallery
            </div>
            <IoMdArrowDropdown className="text-xl" />
          </li>
          <li>
            {" "}
            <div className="flex gap-3 items-center">
              <img src="./images/panditji.png" alt="" className="invisible" />{" "}
              Others
            </div>
            <IoMdArrowDropdown className="text-xl" />
          </li>
        </ul>
      </nav>
      <div className="h-50 flex-col flex items-center justify-center gap-4 ">
        <div className="flex gap-5 w-full justify-center items-center ">
          <img
            src="./SocialMediaIcon/icon_facebook_circle.svg"
            alt=""
            width={50}
          />
          <img
            src="./SocialMediaIcon/icon_twitter_circle.svg"
            alt=""
            width={50}
          />
        </div>
        <button
          className="bg-orange-800 text-white px-4 py-2 shadow-md rounded-md font-bold tracking-wider cursor-pointer"
          onClick={() => dispatch(toggle())}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
