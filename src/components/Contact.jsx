import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertSeverity, setAlertSeverity] = React.useState('success');
  const [progress, setProgress] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  // Formik form initialization and validation schema
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      setProgress(0);

      try {
        await simulateProgress();

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            subject: values.name,
            email: values.email,
            message: values.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setAlertMessage('Message sent successfully!');
        setAlertSeverity('success');
        formik.resetForm();
      } catch (error) {
        setAlertMessage('Failed to send the message. Please try again later.');
        setAlertSeverity('error');
        console.error(error);
      } finally {
        setIsLoading(false);
        setAlertOpen(true);
        setProgress(0);
      }
    },
  });

  const simulateProgress = () => {
    return new Promise((resolve) => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);
        if (currentProgress === 100) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  };

  return (
    <Box sx={{ mt: 5, px: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Contact Me
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="name"
          label="Name"
          fullWidth
          sx={{ mb: 2 }}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          sx={{ mb: 2 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="message"
          label="Message"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            sx={{
              px: 3,
              py: 1,
              fontSize: '1.0rem',
              minWidth: '150px',
            }}
          >
            {isLoading ? `...Sending ${progress}%` : 'Send Message'}
          </Button>
        </Box>
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
