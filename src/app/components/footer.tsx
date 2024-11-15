import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1A1A1A", // Dark background color
        color: "#FFFFFF", // White text color
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link
              color="inherit"
              href="/about"
              sx={{ display: "block", mb: 1 }}
            >
              About Us
            </Link>
            <Link
              color="inherit"
              href="/services"
              sx={{ display: "block", mb: 1 }}
            >
              Services
            </Link>
            <Link color="inherit" href="/faq" sx={{ display: "block", mb: 1 }}>
              FAQ
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ display: "flex", mt: 1 }}>
              <Link color="inherit" href="#" sx={{ mr: 2 }}>
                <Facebook />
              </Link>
              <Link color="inherit" href="#" sx={{ mr: 2 }}>
                <Instagram />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              1234 Van Life St, Suite 100
            </Typography>
            <Typography variant="body2" gutterBottom>
              New York, NY 10001
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@plexvans.com
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: (347) 433-7602
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="body2" color="inherit">
            {"© "}
            {new Date().getFullYear()} Plex Vans. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
