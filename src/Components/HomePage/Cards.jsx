import React from "react";
import { HomepageCardsData } from "../../Data/HomepageCardData";

const Cards = () => {
  return (
    <div className="w-full title-color flex flex-wrap p-2 gap-1 lg:gap-2 justify-center ">
      {HomepageCardsData.map((data, index) => (
        <div
          key={index}
          className="w-full lg:w-90 border-red-900/80 border-1 rounded-md shadow-md"
        >
          <div className="text-red-950">
            <h1 className="bg-amber-600 rounded-t-md px-2 py-1 text-lg font-semibold">
              {data.title}
            </h1>
            <div className="flex items-center  p-1 ">
              <div className="w-20 flex items-center justify-center">
                <img src={data.image} alt="image" />
              </div>
              <div>
                {data.items.map((dataItem, index) => (
                  <div key={index}>
                    <a href="#" className="hover:border-b-1 transition-all ">
                      {dataItem}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-right px-3 py-1 border-t-1 border-red-900/30">
              <a href="#" className="border-b-1">
                MORE
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
