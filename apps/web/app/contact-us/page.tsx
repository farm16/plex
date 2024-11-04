"use client";

import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { ChangeEventHandler, useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here, you would typically handle form submission, e.g., sending data to an API
    console.log("Form data submitted:", formData);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 5 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: 700, color: "#2C3E50" }}
        >
          Contact Us
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Have questions about our services or ready to book your mobile
          marketing solution? Reach out, and we’ll get back to you promptly!
        </Typography>
      </Box>

      {/* Contact Form */}
      <Paper elevation={3} sx={{ p: 4, mb: 6, borderRadius: 3 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#34495E", mb: 2 }}
        >
          Send Us a Message
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ borderRadius: "30px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
