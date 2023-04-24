import { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import Timeslots from "./Timeslots";

function Main() {
    const [formData, setFormData] = useState({});
    const [availableTimes, setAvailableTimes] = useState([]);
    const location = useLocation();

    const submitAPI = (formData) => {
        // Your implementation of submitting data to API
    };

    const fetchAPI = (date) => {
        // Your implementation of fetching data from API
    };

    const initializeTimes = async () => {
        const date = new Date().toISOString().slice(0, 10);
        const timeslots = await fetchAPI(date);
        setAvailableTimes(timeslots);
    };

    const updateTimes = async (date) => {
        const timeslots = await fetchAPI(date);
        setAvailableTimes(timeslots);
    };

    const handleSubmit = (data) => {
        setFormData(data);
        if (submitAPI(data)) {
            location.pathname = "/confirmed-booking";
        }
    };

    return (
        <main>
            <Switch>
                <Route path="/booking-form">
                    <BookingForm
                        availableTimes={availableTimes}
                        onSubmit={handleSubmit}
                    />
                </Route>
                <Route path="/confirmed-booking">
                    <ConfirmedBooking formData={formData} />
                </Route>
                <Route path="/">
                    <Timeslots
                        availableTimes={availableTimes}
                        onUpdate={updateTimes}
                        onInit={initializeTimes}
                    />
                </Route>
            </Switch>
        </main>
    );
}

export default Main;
