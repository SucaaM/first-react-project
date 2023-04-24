import React from "react";
import '../App.css';
import '../style.css';


const BookingTimeItem = ({ time, onClick, isSelected }) => {
  return (
    <li
      className={`booking-time__item ${isSelected ? "active" : ""}`}
      onClick={onClick}
      aria-label="On Click"
    >
      {time}
    </li>
  );
};

export default BookingTimeItem;