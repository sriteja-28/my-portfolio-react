import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'cadetblue', width: '100%', top: 0, left: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <a href='#' style={{ textDecoration: 'none', color: 'white' }}>My Portfolio</a>
          </Typography>

          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, overflowX: 'auto' }}>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#skills">Skills</Button>
            <Button color="inherit" href="#education">Education</Button>
            <Button color="inherit" href="#certifications">Certifications</Button>
            <Button color="inherit" href="#internships">Internships</Button>
            <Button color="inherit" href="#projects">Projects</Button>
            <Button color="inherit" href="#my-essence">My Essence</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </Box>

          
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          {['About', 'Skills', 'Education', 'Certifications','Internships','Projects','My Essence', 'Contact'].map((text) => (
            <ListItem button={String(true)} key={text} onClick={toggleDrawer}>
              <ListItemText>
                <a 
                  href={`#${text.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}>
                  {text}
                </a>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
