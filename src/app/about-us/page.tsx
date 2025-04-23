"use client";

import { Container, Typography, Box, Button, Paper } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function About() {
  const router = useRouter();
  const t = useTranslations("components.about");

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          {t("header.title")}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {t("header.subtitle")}
        </Typography>
      </Box>

      {/* Intro Section with Image */}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          p: 4,
          mb: 8,
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRadius: "8px",
            overflow: "hidden",
            mb: { xs: 3, md: 0 },
            mr: { md: 3 },
          }}
        >
          <Image
            src="/van-outside.jpg"
            alt={t("intro.imageAlt")}
            width={500}
            height={500}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box flex={2}>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            {t("intro.text")}
          </Typography>
        </Box>
      </Paper>

      {/* Why Mobile Marketing Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          {t("whyMobileMarketing.title")}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ lineHeight: 1.7 }}
        >
          {t("whyMobileMarketing.text")}
        </Typography>
      </Box>

      {/* Our Solution Section */}
      <Box sx={{ mb: 8, p: 4, bgcolor: "#f5f5f5", borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          {t("ourSolution.title")}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ lineHeight: 1.7 }}
        >
          {t("ourSolution.text")}
        </Typography>
      </Box>

      {/* Renting Benefits Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          {t("rentingBenefits.title")}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ lineHeight: 1.7 }}
        >
          {t("rentingBenefits.text")}
        </Typography>
      </Box>

      {/* Call to Action */}
      <Box textAlign="center" sx={{ mt: 10 }}>
        <Button
          onClick={() => router.push("/contact-us")}
          variant="contained"
          size="large"
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            px: 4,
            fontSize: "1.2rem",
          }}
        >
          {t("ctaButton")}
        </Button>
      </Box>
    </Container>
  );
}
