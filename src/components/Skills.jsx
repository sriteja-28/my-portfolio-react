import React from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';

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
      Skills
    </Typography>
    <Grid container spacing={3}>
      {skills.map((skill) => (
        <Grid item xs={12} sm={6} md={4} key={skill.name}>
          <Typography variant="h6">{skill.name}</Typography>
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
