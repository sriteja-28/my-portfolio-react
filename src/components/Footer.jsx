import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        py: 1,
        px: 1,
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <IconButton
            href="https://github.com/sriteja-28"
            target="_blank"
            sx={{ color: "#fff", "&:hover": { color: "#f39c12" } }}
          >
            <GitHub />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://www.linkedin.com/in/sritejamuthangi/"
            target="_blank"
            sx={{ color: "#fff", "&:hover": { color: "#0e76a8" } }}
          >
            <LinkedIn />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://twitter.com/sriteja_1128"
            target="_blank"
            sx={{ color: "#fff", "&:hover": { color: "#1DA1F2" } }}
          >
            <XIcon/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="mailto:sritejamuthangi336@gmail.com"
            sx={{ color: "#fff", "&:hover": { color: "#d63031" } }}
          >
            <Email />
          </IconButton>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        sx={{ mt: 2, fontSize: "14px", color: "#bbb" }}
      >
        &copy; {new Date().getFullYear()} Muthangi  Sri Teja. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
