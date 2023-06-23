import React from "react";
import "./EventsStyles.css";
import EventsCard from "./EventsCard";

const Events = () => {
    return (
        <>
            <h2>E-sports Events</h2>

            <h3>Upcomming Events</h3>
            <EventsCard />
            {/* <h3>Past Events</h3>
            <EventsCard />

            <h2>Game Dev Events</h2>

            <h3>Upcomming Events</h3>
            <EventsCard />
            <h3>Past Events</h3>
            <EventsCard /> */}

        </>
    );
};

export default Events;