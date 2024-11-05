"use client";

import { Container, Typography, Box, Alert, Link, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AlertIcon from "@mui/icons-material/Warning";
import { ContactUsForm } from "@/components/contactUsForm";

export default function ContactUs() {
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
              Ready to get on the road?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Connect with a member of our team to learn more about our mobile
              office van conversions, process, and available build spots.
            </Typography>

            <Typography fontWeight={500} variant="body1">
              Sales
            </Typography>
            <Typography variant="body1">
              <Link href="tel:555-555-5555">555-555-5555</Link>
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:sales@plexmktg.com">sales@plexmktg.com</Link>
            </Typography>
            <Alert
              icon={<AlertIcon fontSize="inherit" />}
              severity="warning"
              sx={{ mt: 2 }}
            >
              Please note that we are not able to offer mobile office
              conversions for residents outside of the United States.{" "}
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
