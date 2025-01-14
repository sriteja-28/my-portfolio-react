import React from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';
<<<<<<< HEAD

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'Javascript', level: 85 },
  { name: 'Bootstrap and TailwindCSS', level: 90 },
  { name: 'React JS', level: 85 },
  { name: 'Node JS', level: 80 },
  { name: 'Express Js', level: 80 },
  { name: 'Material UI', level: 90 },
  { name: 'Java', level: 85 },
  { name: 'SQL', level: 85 },
  { name: 'Git', level: 90 },
];

const Skills = () => (
  <Box sx={{ mt: 5, px: 3 }}>
    <Typography variant="h4" sx={{ mb: 3 }}>
=======
import htmlImg from '../assets/skillimages/html.png';
import cssImg from '../assets/skillimages/css.png';
import javascriptImg from '../assets/skillimages/javascript.png';
import bootailImg from '../assets/skillimages/bootail.png';
import reactImg from '../assets/skillimages/react.png';
import nodejsImg from '../assets/skillimages/nodejs.png';
import expressImg from '../assets/skillimages/express.png';
import muiImg from '../assets/skillimages/mui.png';
import javaImg from '../assets/skillimages/java.png';
import sqlImg from '../assets/skillimages/sqlplus.png';
import mongodbImg from '../assets/skillimages/mongodb.png';
import gitImg from '../assets/skillimages/git.png';

const skills = [
  { name: 'HTML5', level: 95, logo: htmlImg},
  { name: 'CSS3', level: 90, logo: cssImg },
  { name: 'Javascript', level: 85, logo: javascriptImg},
  { name: 'Bootstrap and TailwindCSS', level: 90, logo: bootailImg },
  { name: 'React JS', level: 85, logo: reactImg  },
  { name: 'Node JS', level: 80, logo: nodejsImg },
  { name: 'Express Js', level: 80, logo: expressImg },
  { name: 'Material UI', level: 90, logo: muiImg },
  { name: 'Java', level: 85, logo: javaImg },
  { name: 'SQL', level: 85, logo: sqlImg },
  { name: 'MongoDB', level: 85, logo: mongodbImg },
  { name: 'Git', level: 90, logo: gitImg },
];

const Skills = () => (
  <Box sx={{ mt: 5, px: 3, color: 'black', fontWeight: 'bold' }}>
    <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
>>>>>>> gh-pages
      Skills
    </Typography>
    <Grid container spacing={3}>
      {skills.map((skill) => (
        <Grid item xs={12} sm={6} md={4} key={skill.name}>
<<<<<<< HEAD
          <Typography variant="h6">{skill.name}</Typography>
=======
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={skill.logo} 
              alt={`${skill.name} logo`} 
              style={{ width: 24, height: 24, marginRight: 8,borderRadius:'50%' }} 
            />
            <Typography variant="h6">{skill.name}</Typography>
          </Box>
>>>>>>> gh-pages
          <LinearProgress
            variant="determinate"
            value={skill.level}
            sx={{ mt: 1 }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills;
