import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-logo">
        <img src="/assets/loader.png" alt="Loading..." />
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default Loader;
