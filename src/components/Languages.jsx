import React from "react";
import { Typography} from '@mui/material';
import "../styles/Languages.css";

const Languages = () => {
  const languages = ["English", "Telugu", "Hindi",];

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
      Languages Known
    </Typography>
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
