import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';


const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Bapatla Engineering College,Bapatla",
    duration: "2020 - 2024",
    description: "CGPA: 8.46",
  },
  {
    degree: "Intermediate",
    institution: "Sri Chaitanya Jr. College, Nellore ",
    duration: "2018 - 2020",
    description: "CGPA: 9.88",
  },
  {
    degree: "SSC",
    institution: "Little Angels EM High School, Nellore ",
    duration: "2017 - 2018",
    description: "CGPA: 9.2",
  },
];



const Timeline = styled('div')({
  position: 'relative',
  marginLeft: 20,
  marginBottom: 20,
});

const TimelineDot = styled('div')({
  width: 15,
  height: 15,
  borderRadius: '50%',
  backgroundColor: '#1976d2',
  position: 'absolute',
  left: -8,
  top: 0,
});

const TimelineContent = styled('div')({
  paddingLeft: 40,
  paddingBottom: 20,
  borderLeft: '2px solid #1976d2',
});


const Education = () => {
  return (
    <Box sx={{ width: '80%', margin: 'auto' }}>
     
      <Typography variant="h4" sx={{ mb: 4 ,fontWeight:'bold'}}>Education</Typography>
      <Box sx={{ mb: 6 }}>
        {educationData.map((item, index) => (
          <Timeline key={index}>
            <TimelineDot />
            <TimelineContent>
              <Typography variant="h6" sx={{fontWeight:'bold'}}>{item.degree}</Typography>
              <Typography variant="body2">{item.institution}</Typography>
              <Typography variant="body2" color="textSecondary">{item.duration}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </TimelineContent>
          </Timeline>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
