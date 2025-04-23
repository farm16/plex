import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  Workspaces,
  NetworkCheck,
  Bolt,
  Chair,
  SpaceDashboard,
  Thermostat,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";

const MobileOfficeVanFeatures = () => {
  const t = useTranslations("components.mobileOfficeVanFeatures");

  const features = [
    {
      title: t("features.ergonomicWorkspace.title"),
      description: t("features.ergonomicWorkspace.description"),
      icon: <Workspaces />,
    },
    {
      title: t("features.highSpeedInternet.title"),
      description: t("features.highSpeedInternet.description"),
      icon: <NetworkCheck />,
    },
    {
      title: t("features.powerSupply.title"),
      description: t("features.powerSupply.description"),
      icon: <Bolt />,
    },
    {
      title: t("features.comfortableSeating.title"),
      description: t("features.comfortableSeating.description"),
      icon: <Chair />,
    },
    {
      title: t("features.storageSolutions.title"),
      description: t("features.storageSolutions.description"),
      icon: <SpaceDashboard />,
    },
    {
      title: t("features.climateControl.title"),
      description: t("features.climateControl.description"),
      icon: <Thermostat />,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fff", py: 6, mb: 6 }}>
      <Container maxWidth="lg">
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
                {feature.icon}
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
