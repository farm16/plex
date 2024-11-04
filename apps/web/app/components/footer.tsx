// components/Footer.js
import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

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
            <Link
              color="inherit"
              href="/contact"
              sx={{ display: "block", mb: 1 }}
            >
              Contact
            </Link>
            <Link color="inherit" href="/faq" sx={{ display: "block", mb: 1 }}>
              FAQ
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Link color="inherit" href="/blog" sx={{ display: "block", mb: 1 }}>
              Blog
            </Link>
            <Link color="inherit" href="/news" sx={{ display: "block", mb: 1 }}>
              News
            </Link>
            <Box sx={{ display: "flex", mt: 1 }}>
              <Link color="inherit" href="#" sx={{ mr: 2 }}>
                <Facebook />
              </Link>
              <Link color="inherit" href="#" sx={{ mr: 2 }}>
                <Instagram />
              </Link>
              <Link color="inherit" href="#" sx={{ mr: 2 }}>
                <Twitter />
              </Link>
              <Link color="inherit" href="#">
                <YouTube />
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
              City, State 12345
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@loftvans.com
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="body2" color="inherit">
            {"© "}
            {new Date().getFullYear()} Loft Vans. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
