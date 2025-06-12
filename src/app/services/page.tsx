"use client";

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("components.services");
  const router = useRouter();

  // Retrieve the rental options from the translations
  const rentalOptions = [
    {
      title: t("rentalOptions.dailyRental.title"),
      price: t("rentalOptions.dailyRental.price"),
      duration: t("rentalOptions.dailyRental.duration"),
      warning: "",
      description: t("rentalOptions.dailyRental.description"),
      descriptionWarning: t("rentalOptions.dailyRental.descriptionWarning"),
    },
    {
      title: t("rentalOptions.monthlyRental.title"),
      price: t("rentalOptions.monthlyRental.price"),
      duration: t("rentalOptions.monthlyRental.duration"),
      warning: t("rentalOptions.monthlyRental.warning"),
      description: t("rentalOptions.monthlyRental.description"),
      descriptionWarning: "",
    },
  ] as const;

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 5 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: 700, color: "#000000" }}
        >
          {t("header.title")}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {t("header.subtitle")}
        </Typography>
      </Box>

      {/* Pricing Cards */}
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        {rentalOptions.map((option, index) => (
          <Grid size={{ xs: 12, sm: 4 }} key={index}>
            <Card
              sx={{
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Center vertically
                alignItems: "center",
                textAlign: "center",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 5,
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: "#000000", mb: 1 }}
                >
                  {option.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {option.price}
                  <Typography
                    component="span"
                    sx={{ fontSize: "1.25rem", fontWeight: 700 }}
                  >
                    /{option.duration}
                  </Typography>
                  {option.warning && (
                    <Typography variant="body2" color="error">
                      {option.warning}
                    </Typography>
                  )}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {option.description}
                </Typography>

                {option.descriptionWarning && (
                  <Typography
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    * {option.descriptionWarning}
                  </Typography>
                )}
              </CardContent>

              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push("/contact-us")}
                sx={{
                  mb: 2,
                  px: 4,
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "30px",
                }}
              >
                {t("ctaButton")}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Custom Rental Inquiry Section */}
      <Paper
        elevation={3}
        sx={{
          mt: 6,
          p: 4,
          textAlign: "center",
          borderRadius: 3,
          boxShadow: 3,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 5,
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "#000000", mb: 2 }}
        >
          {t("customRentalInquiry.title")}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {t("customRentalInquiry.text")}
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/contact-us")}
          sx={{
            textTransform: "none",
            borderRadius: "30px",
          }}
        >
          {t("customRentalInquiry.button")}
        </Button>
      </Paper>
    </Container>
  );
}
