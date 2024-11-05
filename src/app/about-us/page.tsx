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
              In today&apos;s fast-paced, connected world, standing out requires
              more than just traditional marketing. Your customers are always on
              the go—and that&apos;s where we come in. At Creative Coach
              Solutions, we provide custom mobile marketing solutions designed
              to reach audiences wherever they are, whenever they&apos;re ready
              to engage.
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
          As consumers spend more time on the go and connected to their devices,
          brands must create experiences that captivate them where they are.
          With mobile marketing, it&apos;s not just about showcasing a
          product—it&apos;s about delivering a memorable, engaging journey. Let
          your audience step inside your brand with a unique, interactive
          experience on wheels.
        </Typography>
      </Box>

      {/* Our Solution Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Our Complete Solution
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Creative Coach Solutions is a leader in mobile marketing innovation,
          offering everything from state-of-the-art promotional vehicles to
          personalized, on-the-road experiences. We&apos;re here to help you
          build lasting connections with customers, elevate your brand, and
          achieve your marketing goals—wherever the road takes you.
        </Typography>
      </Box>

      {/* Renting Benefits Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Why Rent Instead of Buy?
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Renting a mobile marketing vehicle can be a smart, cost-effective
          choice for brands looking to reduce overhead and liability. Owning and
          maintaining a specialized vehicle involves ongoing costs and
          risks—from insurance and upkeep to unexpected repairs. With our rental
          options, you gain access to top-tier promotional vehicles without the
          long-term commitment or the hassle of ownership. Focus on what matters
          most: connecting with your audience, while we handle the logistics.
        </Typography>
      </Box>

      {/* Call to Action */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "black",
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
