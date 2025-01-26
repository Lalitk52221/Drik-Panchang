import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedDate, updatedTime } from "./Redux/dateSlicer";

const Timer = () => {
  const [time, setTime] = useState(moment().format("HH:mm:ss"));
  const [date, setDate] = useState(moment().format("MMMM Do YYYY"));

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = moment().format("HH:mm:ss");
      const currentDate = moment().format('ddd MMM DD, yyyy')
      setTime(currentTime);
      dispatch(updatedTime(currentTime));
      setDate(currentDate);
      dispatch(updatedDate(currentDate))
    }, 1000);

    return () => clearInterval(interval);
  },[dispatch] );

  return (
    <div className="p-1.5">
      <p className="font-bold text-lg leading-5">{time}</p>
      <p className="text-sm leading-5">{date}</p>
    </div>
  );
};

export default Timer;
