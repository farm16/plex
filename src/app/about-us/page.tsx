// pages/about.js
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 5 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Drive Your Brand Forward
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Comprehensive Mobile Marketing Solutions for Modern Brands
        </Typography>
      </Box>

      {/* Image with Intro Text */}
      <Paper
        elevation={3}
        sx={{
          // py: 2,
          p: 4,
          mb: 6,
          borderRadius: 3,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12 }}>
            <Image
              src="/van_1.jpg"
              alt="Mobile Office Van"
              width={500}
              height={300}
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1">
              In today&apos;s fast-paced digital landscape, capturing attention
              demands more than conventional strategies. Your audience is always
              on the move—and that&apos; s where Plex Marketing Solutions comes
              in. We specialize in crafting tailored mobile marketing
              experiences that connect with your customers wherever they are,
              whenever they&apos;re ready to engage. With Plex, your brand
              travels with your audience, making impressions that matter.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Why Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Why Mobile Marketing?
        </Typography>
        <Typography variant="body1" color="textSecondary">
          As today&apos;s consumers become increasingly mobile and connected,
          brands need to meet them where they live—on the go. With Plex
          Marketing&apos;s mobile experiences, it&apos;s not just about
          presenting a product; it&apos;s about crafting an unforgettable
          journey that captivates and engages. Invite your audience to step
          inside your brand with a one-of-a-kind, interactive experience on
          wheels, transforming every stop into a memorable connection.
        </Typography>
      </Box>

      {/* Our Solution Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Our Complete Solution
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Plex Marketing is a leader in mobile marketing innovation, delivering
          everything from cutting-edge promotional vehicles to fully customized,
          on-the-road brand experiences. We drive impactful connections with
          your customers, elevating your brand and bringing your marketing
          vision to life—wherever the journey leads. With Plex, your brand is
          always in motion, ready to captivate and inspire at every stop.
        </Typography>
      </Box>

      {/* Renting Benefits Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Why Rent Instead of Buy?
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Renting a mobile marketing vehicle with Plex Marketing is a savvy,
          cost-effective solution for brands aiming to maximize impact without
          the burdens of ownership. Owning and maintaining a specialized vehicle
          involves ongoing expenses and risks—insurance, upkeep, and unexpected
          repairs. With our rental options, you access high-quality promotional
          vehicles minus the long-term commitment and logistical concerns. Focus
          entirely on what truly matters: engaging your audience and growing
          your brand, while we expertly manage the rest.
        </Typography>
      </Box>

      {/* Call to Action */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            px: 4,
          }}
        >
          Contact Our Team
        </Button>
      </Box>
    </Container>
  );
}
