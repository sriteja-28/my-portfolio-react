import React from 'react';
import { Container, Typography, Avatar } from '@mui/material';
import { ReactTyped as Typed} from "react-typed";

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
    <Typography
      variant="h4"
      sx={{ mt: 3, color: 'black', fontWeight: 'bold' }}
    >
       Hello, I'm Muthangi Sri Teja
    </Typography>
    <Typography variant="h6" sx={{ mt: 2, color: 'black', fontStyle: 'italic' }}>
      <Typed
           strings={[
            "A passionate Fullstack Developer.",
            "An Innovator.",
            "A Technology Enthusiast.",
          ]}
        typeSpeed={150}
        backSpeed={80}
        backDelay={1500}
        loop
      />
    </Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      Seeking a dynamic role to leverage my skills and passion for innovation, aiming to achieve strategic goals and deliver exceptional results.
    </Typography>

  </Container>
);

export default About;
