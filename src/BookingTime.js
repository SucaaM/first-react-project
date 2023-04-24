import React from "react";

const BookingTime = ({ time, selected, onClick }) => {
    return (
        <button
            className={`booking-time ${selected ? "selected" : ""}`}
            onClick={onClick}
            aria-label={`On Click, select booking time ${time}`}
        >
            {time}
        </button>
    );
};

export default BookingTime;
