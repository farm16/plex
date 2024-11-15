// components/WhyChooseUs.js

import React from "react";
import { Container, Typography, Box, Stack, Divider } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const features = [
  {
    icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
    title: "Avoid Parking Violations",
    description:
      "Our mobile office vans are designed to comply with local regulations, helping you avoid costly parking tickets and fines.",
  },
  {
    icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
    title: "Fully Insured Vehicle",
    description:
      "Comprehensive insurance coverage protects your business by minimizing risks, giving you peace of mind with every trip.",
  },
  {
    icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
    title: "Increased Mobility",
    description:
      "Access more customers by taking your services directly to high-traffic areas or underserved locations.",
  },
  {
    icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
    title: "Real-Time Vehicle Location Tracking",
    description:
      "Monitor van locations in real-time to optimize route planning, reduce fuel costs, and enhance service efficiency. Keep customers informed and improve logistics management for your business.",
  },
  {
    icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
    title: "Cost-Effective Solution",
    description:
      "Eliminate the need for brick-and-mortar setups while maintaining a high level of service and accessibility.",
  },
  {
    icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
    title: "Convenience on the Go",
    description:
      "Our vans offer a fully-equipped, flexible workspace, allowing you to bring services directly to customers.",
  },
  {
    icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
    title: "Eco-Friendly Design",
    description:
      "Our vans are equipped with sustainable features, reducing your environmental footprint while delivering top-notch services.",
  },

  {
    icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
    title: "Customizable Interiors",
    description:
      "Tailor the van's interior to suit your business requirements, ensuring a functional and professional workspace.",
  },
];

export const WhyChooseUs = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md" id="why-choose-us">
      <Typography variant="h4" align="center" gutterBottom>
        Why Choose Our Mobile Office Vans?
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        paragraph
      >
        With Plex Vans, you can enjoy a range of benefits that make your
        business more efficient, accessible, and eco-friendly.
      </Typography>
      <Stack spacing={3} divider={<Divider flexItem />} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            sx={{
              p: 3,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            {feature.icon}
            <Box ml={2}>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">
                {feature.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};
