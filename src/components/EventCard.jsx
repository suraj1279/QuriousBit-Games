import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event, onClick }) => (
  <div
    onClick={() => onClick(event)}
    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1 cursor-pointer hover:shadow-xl"
  >
    <img
      src={event.image}
      alt={event.name}
      className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
    />
    <div className="p-4">
      <h2 className="text-2xl font-semibold">
        <strong>Event Name:</strong> {event.name}
      </h2>
      <p className="event-date">
        <strong>Event Date:</strong> {event.date}
      </p>
      <p>
        <strong>Event Place:</strong> {event.location}
      </p>
    </div>
  </div>
);

export default EventCard;
