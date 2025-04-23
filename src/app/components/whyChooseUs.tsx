"use client";

import React from "react";
import { Container, Typography, Box, Stack, Divider } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTranslations } from "next-intl";

export const WhyChooseUs = () => {
  const t = useTranslations("components.whyChooseUs");

  const features = [
    {
      icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
      title: t("features.avoidParkingViolations.title"),
      description: t("features.avoidParkingViolations.description"),
    },
    {
      icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
      title: t("features.fullyInsuredVehicle.title"),
      description: t("features.fullyInsuredVehicle.description"),
    },
    {
      icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
      title: t("features.increasedMobility.title"),
      description: t("features.increasedMobility.description"),
    },
    {
      icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
      title: t("features.realTimeTracking.title"),
      description: t("features.realTimeTracking.description"),
    },
    {
      icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
      title: t("features.costEffective.title"),
      description: t("features.costEffective.description"),
    },
    {
      icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
      title: t("features.convenienceOnTheGo.title"),
      description: t("features.convenienceOnTheGo.description"),
    },
    {
      icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
      title: t("features.ecoFriendly.title"),
      description: t("features.ecoFriendly.description"),
    },
    {
      icon: <CheckCircleOutlineIcon color="primary" fontSize="large" />,
      title: t("features.customizableInteriors.title"),
      description: t("features.customizableInteriors.description"),
    },
  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="md" id="why-choose-us">
      <Typography variant="h4" align="center" gutterBottom>
        {t("heading")}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        paragraph
      >
        {t("subheading")}
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
