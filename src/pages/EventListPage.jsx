import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import eventsData from '../data/events';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import '../styles/EventListPage.css';

const EventListPage = () => {
  const location = useLocation();
  const message = location.state?.message || '';

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (!term) {
      setFilteredEvents(eventsData); 
    } else {
      const matchedEvents = eventsData.filter((event) =>
        event.name.toLowerCase().includes(term)
      );
      setFilteredEvents(matchedEvents);
    }
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      {message && <p className="error-message">{message}</p>}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for events..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <h2 className="animated-heading">Upcoming Events</h2>

      <div className="events-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
          ))
        ) : (
          <p className="no-events-message">No matching events found.</p>
        )}
      </div>

      {selectedEvent && (
        <EventModal 
          event={selectedEvent}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default EventListPage;
