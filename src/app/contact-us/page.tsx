"use client";

import { Container, Typography, Box, Alert, Link, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import AlertIcon from "@mui/icons-material/Warning";
import { ContactUsForm } from "@/components/contactUsForm";
import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations("components.contactUsPage");

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
      <Grid container spacing={4}>
        <Grid
          size={{
            sm: 6,
            xs: 12,
          }}
        >
          <Box textAlign="left" sx={{ mb: 5 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 400, color: "#000000" }}
            >
              {t("title")}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              {t("subtitle")}
            </Typography>

            <Typography fontWeight={500} variant="body1">
              {t("emailPrompt")}
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:info@plexvans.com">{t("email")}</Link>
            </Typography>
            <Alert
              icon={<AlertIcon fontSize="inherit" />}
              severity="warning"
              sx={{ mt: 2 }}
            >
              {t("alert")}
            </Alert>
          </Box>
        </Grid>
        <Grid size={{ sm: 6 }}>
          <Paper sx={{ p: 4 }}>
            <ContactUsForm />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
