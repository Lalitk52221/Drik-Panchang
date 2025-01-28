import { Outlet } from "react-router-dom";
import SidebarMenu from "./HomePage/SidebarMenu";
import { useSelector } from "react-redux";

const DrikPanchangPage = () => {
  const hideMenu = useSelector(state=>state.hideMenu.value)
  return (
    <div className="bg-orange-100 min-h-screen w-screen relative">
       {hideMenu&&
       
        <SidebarMenu/>
       }
      <Outlet/>
      
    </div>
  );
};

export default DrikPanchangPage;
