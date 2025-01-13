import React from "react";
import "../styles/Languages.css";

const Languages = () => {
  const languages = ["English", "Telugu", "Hindi",];

  return (
    <div>
      <h1>Languages Known</h1>
      <div className="grid-container">
        {languages.map((language, index) => (
          <div key={index} className="grid-item">
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
