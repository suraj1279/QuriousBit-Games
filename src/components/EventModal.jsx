import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const EventModal = ({ event, isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="modal-content bg-gradient-to-r from-purple-500 to-blue-600 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto animate-fadeIn"
    overlayClassName="modal-overlay fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center"
  >
    <h2 className="text-4xl font-bold mb-4 text-yellow-300 drop-shadow-lg">{event.name}</h2>
    <p className="mb-2 text-lg">
      <strong>Event Date:</strong> <span className="text-yellow-100">{event.date}</span>
    </p>
    <p className="mb-2 text-lg">
      <strong>Event Place:</strong> <span className="text-yellow-100">{event.location}</span>
    </p>
    <p className="mb-6 text-md text-gray-200 leading-relaxed">{event.description}</p>
    <button 
      onClick={onRequestClose} 
      className="close-button mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 font-semibold py-2 px-5 rounded-full shadow-md transition-transform transform hover:scale-105"
    >
      Close
    </button>
  </Modal>
);

export default EventModal;
