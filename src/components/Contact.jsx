import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Contact = () => (
  <Box sx={{ mt: 5, px: 3 }}>
    <Typography variant="h4" sx={{ mb: 3 }}>
      Contact Me
    </Typography>
    <form>
      <TextField label="Name" fullWidth sx={{ mb: 2 }} />
      <TextField label="Email" fullWidth sx={{ mb: 2 }} />
      <TextField label="Message" multiline rows={4} fullWidth sx={{ mb: 2 }} />
      <Button variant="contained" color="primary">
        Send Message
      </Button>
    </form>
  </Box>
);

export default Contact;
