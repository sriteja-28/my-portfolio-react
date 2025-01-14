import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

import googleImage from '../assets/images/googlecloud.png';
import nptelImage from '../assets/images/nptellogo.png';
import srishashaImage from '../assets/images/srishasha.png';
import internshalaImage from '../assets/images/internshala.png';
import be10xImage from '../assets/images/be10x.png';
import cybersecurityImage from '../assets/images/cybersecurity.png';
import pythonImage from '../assets/images/python.png';

const certificationData = [
  {
    title: "NPTEL Online Certification in Cloud Computing ",
    institution: "NPTEL",
    year: "2023",
    link: "https://drive.google.com/file/d/1fi9IseHPhINgjONg4cN3c2OXLnISREqi/view?usp=sharing",
    logo: nptelImage, 
  },
  {
    title: "Google Cloud Career Readiness Associate Cloud Engineer Track ",
    institution: "L4g",
    year: "2023",
    link: "https://drive.google.com/file/d/1qEr4AYKHNF010Z_v86yaieSTrpc1alxQ/view?usp=sharing",
    logo: googleImage,
  },
  {
    title: "Online Internship Programme on Machine Learning with Python ",
    institution: "sri shasha",
    year: "2023",
    link: "https://drive.google.com/file/d/1lZU7Y7AiJjds7mn37lMg3Am36ANRmV_W/view?usp=sharing",
    logo: srishashaImage,
  },
  {
    title: "Programming with Python ",
    institution: "Internshala",
    year: "2022",
    link: "https://drive.google.com/file/d/1prG6zeivga3dK4_B1EbHGqOv6X-kYPpQ/view?usp=sharing",
    logo: internshalaImage ,
  },
  {
    title: "Internship & Job Preparation ",
    institution: "Internshala",
    year: "2022",
    link: "https://drive.google.com/file/d/1YMdttn4ngeK_VHvRAAbRNmYLIPR69y3a/view?usp=sharing",
    logo: internshalaImage,
  },
  {
    title: "Cyber Security (Scanning)",
    institution: "Spypro Security solutions Pvt. Ltd.",
    year: "2022",
    link: "https://drive.google.com/file/d/1qXrKDwuD_eIaXENBsw9PnJQ1uLqGT5If/view?usp=sharing",
    logo: cybersecurityImage,
  },
  {
    title: "AI Tools Workshop",
    institution: "be10x",
    year: "2024",
    link: "https://drive.google.com/file/d/1l7l-b9cLZbFpW3XwoX2IfnCMvO_46Ep9/view?usp=sharing",
    logo: be10xImage,
  },
  {
    title: "Power Python Workshop",
    institution: "LUDIFU",
    year: "2023",
    link: "https://drive.google.com/file/d/18-ytUeoPT0v7i1SJB7FZwnn6Hzb7FuoC/view?usp=sharing",
    logo: pythonImage,
  },
];

const Certifications = () => {
  return (
    <Box sx={{ width: '80%', margin: 'auto', paddingTop: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Certifications
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {certificationData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                width: '100%',
                height: '250px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                marginTop: index >= 4 ? '20px' : '0',
              }}
            >
              <Paper
                elevation={4}
                sx={{
                  position: 'relative', // To position the logo
                  padding: 3,
                  textAlign: 'center',
                  borderRadius: 2,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg,rgb(52, 198, 214) 0%,rgb(59, 113, 207) 100%)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {/* Logo at the top-right corner */}
                <img
                  src={item.logo}
                  alt={`${item.title} logo`}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '40px',
                    height: '40px',
                    objectFit: 'contain',
                    borderRadius:'50%',
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#fff' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: '#e3e3e3' }}>
                  {item.institution}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: '#e3e3e3' }}>
                  {item.year}
                </Typography>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Typography variant="body2" sx={{ color: '#ffeb3b' }}>
                    View Certificate
                  </Typography>
                </a>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;
