import React from 'react';
import { Box, Typography, ButtonBase, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import crudImage from '../assets/images/crud.png';
import dashboardImage from '../assets/images/dashboard.png';

const images = [
  {
    url: crudImage,
    title: 'ReactCRUD-MUI',
    width: '100%',
    githubLink: 'https://react-crud-mui-two.vercel.app/',
  },
  {
    url: dashboardImage,
    title: 'ReactMUIDashboardWithAuth ',
    width: '100%',
    githubLink: 'https://react-mui-dashboard-with-auth.vercel.app/login',
  },
  {
    url: './src/assets/images/camera.png',
    title: 'Loan Eligibility Prediction Using Ensemble Learning I',
    width: '100%',
    githubLink: 'https://github.com/project3',
  },
  {
    url: './src/assets/images/burger.png',
    title: 'Cyber Security Scanning Project ',
    width: '100%',
    githubLink: 'https://github.com/project4',
  },
  // {
  //   url: './src/assets/images/camera.png',
  //   title: 'Project 5',
  //   width: '100%',
  //   githubLink: 'https://github.com/project5',
  // },
  
  
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Projects = () => (
  <>
    <Typography variant="h4" sx={{ mb: 3 }}>
      Projects
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={3} key={image.title} sx={{ display: 'flex', justifyContent: 'center' }}>
          <ImageButton style={{ width: '100%' }}>
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <div>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                <a
                  href={image.githubLink}
                  target='_blank'
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {image.title}
                </a>
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </div>
          </ImageButton>
        </Grid>
      ))}
    </Grid>
  </>
);

export default Projects;
