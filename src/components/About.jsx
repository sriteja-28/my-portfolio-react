import React from 'react';
import { Container, Typography, Avatar } from '@mui/material';

import teImage from '../assets/images/tej.jpg';

const About = () => (
  <Container sx={{ mt: 5, textAlign: 'center' }}>
    <Avatar
      src={teImage}
      alt="Profile"
      sx={{
        width: 150,
        height: 150,
        margin: 'auto',
        border: '3px solid cadetblue',
      }}
    />
    <Typography variant="h4" sx={{ mt: 3 }}>
      Hello, I'm Muthangi  Sri Teja
    </Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      A passionate Fullstack developer.
    </Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
    Seeking a dynamic role to leverage my skills and passion for innovation, aiming to achieve strategic goals and deliver exceptional results.
    </Typography>

  </Container>
);

export default About;
