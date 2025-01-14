import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    emailjs
      .send(
        'service_91y98ae',
        'template_xn66kl4',
        {
          subject: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'Mh0KYJud25838q2FT'
      )
      .then(
        () => {
          setAlertMessage('Message sent successfully!');
          setAlertSeverity('success');
          setAlertOpen(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setAlertMessage('Failed to send the message. Please try again later.');
          setAlertSeverity('error');
          setAlertOpen(true);
          console.error(error);
        }
      );
  };

  return (
    <Box sx={{ mt: 5, px: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          fullWidth
          sx={{ mb: 2 }}
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          sx={{ mb: 2 }}
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="message"
          label="Message"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={() => setAlertOpen(false)}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity={alertSeverity}
          sx={{ width: '100%' }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
