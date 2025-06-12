"use client";

import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
  const router = useRouter();
  const t = useTranslations("components.footer");

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1A1A1A",
        color: "#FFFFFF",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {t("companyTitle")}
            </Typography>
            <Link
              color="inherit"
              onClick={() => router.push("/about-us")}
              sx={{ display: "block", mb: 1 }}
            >
              {t("aboutUs")}
            </Link>
            <Link
              color="inherit"
              onClick={() => router.push("/services")}
              sx={{ display: "block", mb: 1 }}
            >
              {t("services")}
            </Link>
            <Link
              color="inherit"
              onClick={() => router.push("/faq")}
              sx={{ display: "block", mb: 1 }}
            >
              {t("faq")}
            </Link>
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {t("comingSoon")}
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
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {t("contactTitle")}
            </Typography>

            <Typography variant="body2" gutterBottom>
              {t("email")}
              <a href={t("emailHref")} style={{ color: "inherit" }}>
                {t("emailValue")}
              </a>
            </Typography>

            <Typography variant="body2" gutterBottom>
              {t("phone")}
              <a href={t("phoneHref")} style={{ color: "inherit" }}>
                {t("phoneValue")}
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Plex Vans. {t("rights")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
