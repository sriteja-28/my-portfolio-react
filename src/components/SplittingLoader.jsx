import React from 'react';
import '../styles/SplittingLoader.css'; 

const SplittingLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="split-piece"></div>
        <div className="split-piece"></div>
        <div className="split-piece"></div>
        <div className="split-piece"></div>
      </div>
    </div>
  );
};

export default SplittingLoader;
