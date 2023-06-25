import React from "react";
import "./EventsCardStyles.css";

const EventsCard = (props) => {
    return (
        <div id="event-card">
            <img className="event-img" src="https://i.imgur.com/gI6TlDt.jpg" alt="" loading="lazy" />
            <div className="event-card-info">
                <p className="event-name">Arena-4</p>
                <p className="event-date">02-06-2002</p>
                <button>Register Now!</button>
            </div>
        </div>
    );
};

export default EventsCard;