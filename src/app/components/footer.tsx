"use client";

import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
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
              onClick={() => router.push("/about-us")}
              sx={{ display: "block", mb: 1 }}
            >
              About Us
            </Link>
            <Link
              color="inherit"
              onClick={() => router.push("/services")}
              sx={{ display: "block", mb: 1 }}
            >
              Services
            </Link>
            <Link
              color="inherit"
              onClick={() => router.push("/faq")}
              sx={{ display: "block", mb: 1 }}
            >
              FAQ
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Coming soon
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
              235 Starr St.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Brooklyn, NY 11237
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@plexvans.com
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
