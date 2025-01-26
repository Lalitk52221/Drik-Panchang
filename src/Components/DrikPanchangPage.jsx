import { Outlet } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

const DrikPanchangPage = () => {
  return (
    <div className="bg-orange-100 min-h-screen w-screen">
      {/* <HomePage /> */}

      <Outlet/>
      
    </div>
  );
};

export default DrikPanchangPage;
