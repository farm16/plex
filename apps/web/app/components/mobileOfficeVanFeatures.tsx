// components/MobileOfficeVanFeatures.js
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const features = [
  {
    title: "Ergonomic Workspace",
    description:
      "Designed for comfort and efficiency, ensuring optimal productivity.",
  },
  {
    title: "High-Speed Internet",
    description: "Stay connected with reliable high-speed internet access.",
  },
  {
    title: "Power Supply",
    description:
      "Equipped with solar panels and backup generators for uninterrupted power.",
  },
  {
    title: "Comfortable Seating",
    description: "Spacious seating designed for long hours on the road.",
  },
  {
    title: "Storage Solutions",
    description:
      "Ample storage space for all your office supplies and equipment.",
  },
  {
    title: "Climate Control",
    description:
      "Maintain the perfect temperature with efficient heating and cooling systems.",
  },
];

const MobileOfficeVanFeatures = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Mobile Office Van Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  border: "1px solid #ddd",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2">{feature.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MobileOfficeVanFeatures;
