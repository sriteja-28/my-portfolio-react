import React from "react";
<<<<<<< HEAD
=======
import { Typography} from '@mui/material';
>>>>>>> gh-pages
import "../styles/Languages.css";

const Languages = () => {
  const languages = ["English", "Telugu", "Hindi",];

  return (
    <div>
<<<<<<< HEAD
      <h1>Languages Known</h1>
=======
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
      Languages Known
    </Typography>
>>>>>>> gh-pages
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
