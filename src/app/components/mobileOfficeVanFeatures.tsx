// components/MobileOfficeVanFeatures.js
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Workspaces,
  NetworkCheck,
  Bolt,
  Chair,
  SpaceDashboard,
  Thermostat,
} from "@mui/icons-material";

const features = [
  {
    title: "Ergonomic Workspace",
    description:
      "Designed for comfort and efficiency, ensuring optimal productivity.",
    icon: <Workspaces />,
  },
  {
    title: "High-Speed Internet",
    description: "Stay connected with reliable high-speed internet access.",
    icon: <NetworkCheck />,
  },
  {
    title: "Power Supply",
    description:
      "Equipped with solar panels and backup generators for uninterrupted power.",
    icon: <Bolt />,
  },
  {
    title: "Comfortable Seating",
    description: "Spacious seating designed for long hours on the road.",
    icon: <Chair />,
  },
  {
    title: "Storage Solutions",
    description:
      "Ample storage space for all your office supplies and equipment.",
    icon: <SpaceDashboard />,
  },
  {
    title: "Climate Control",
    description:
      "Maintain the perfect temperature with efficient heating and cooling systems.",
    icon: <Thermostat />,
  },
];

const MobileOfficeVanFeatures = () => {
  return (
    <Box sx={{ bgcolor: "#ffff", py: 6, mb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Explore Our Van Features
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
        >
          Discover the features that make our mobile office vans the perfect
          workspace on wheels.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={index}
            >
              <Box
                sx={{
                  p: 3,
                  backgroundColor: "rgba(246, 247, 250, 1)",
                  borderRadius: 2,
                }}
              >
                {feature?.icon}
                <Typography variant="h6" gutterBottom>
                  {feature?.title ?? ""}
                </Typography>
                <Typography variant="body2">
                  {feature?.description ?? ""}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MobileOfficeVanFeatures;
