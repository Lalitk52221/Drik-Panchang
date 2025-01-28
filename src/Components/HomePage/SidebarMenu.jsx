import { useDispatch } from "react-redux";
import { toggle } from "../Redux/toggle";

const SidebarMenu = () => {
    const dispatch = useDispatch();
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
            <img src="./images/panditji.png" alt="" /> Home
          </li>
          <li>
            {" "}
            <img src="./images/home-card-img/1.png" alt="" /> Panchang
          </li>
          <li>
            {" "}
            <img src="./images/home-card-img/2.png" alt="" /> Calendars
          </li>
          <li>
            {" "}
            <img src="./images/home-card-img/4.png" alt="" /> Muhurat
          </li>
          <li>
            {" "}
            <img src="./images/home-card-img/8.png" alt="" /> Vrat & Upavas
          </li>
          <li>
            {" "}
            <img src="./images/home-card-img/7.png" alt="" /> Festivals
          </li>
          <li>
            {" "}
            <img src="./images/home-card-img/14.png" alt="" /> Jyotish
          </li>
          <li>
            {" "}
            <img src="./images/home-card-img/9.png" alt="" /> Planets
          </li>
          <li>
            {" "}
            <img src="./images/home-card-img/10.png" alt="" /> Lyrics
          </li>
          <li>
            {" "}
            <img src="./images/home-card-img/5.png" alt="" /> Gallery
          </li>
          <li>
            {" "}
            <img src="./images/panditji.png" alt="" className="invisible" /> Others
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
        <button className="bg-orange-800 text-white px-4 py-2 shadow-md rounded-md font-bold tracking-wider cursor-pointer" onClick={()=>dispatch(toggle())}>CLOSE</button>
      </div>
    </div>
  );
};

export default SidebarMenu;
