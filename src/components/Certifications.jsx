import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

import googleImage from '../assets/images/googlecloud.png';

const certificationData = [
  {
    title: "NPTEL Online Certification in Cloud Computing ",
    institution: "NPTEL",
    year: "2023",
    link: "https://coursera.org/certificate-link",
    logo: googleImage, 
  },
  {
    title: "Google Cloud Career Readiness Associate Cloud Engineer Track ",
    institution: "L4g",
    year: "2023",
    link: "https://udemy.com/certificate-link",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
  },
  {
    title: "Online Internship Programme on Machine Learning with Python ",
    institution: "sri",
    year: "2023",
    link: "https://awsacademy.com/certificate-link",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    title: "Programming with Python ",
    institution: "Internshala",
    year: "2022",
    link: "https://coursera.org/certificate-link",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Johns_Hopkins_University_seal.svg",
  },
  {
    title: "Internship & Job Preparation ",
    institution: "Internshala",
    year: "2022",
    link: "https://coursera.org/certificate-link",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Cloud_logo.svg",
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
