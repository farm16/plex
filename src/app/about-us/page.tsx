"use client";

import { Container, Typography, Box, Button, Paper } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Drive Your Brand Forward
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Comprehensive Mobile Marketing Solutions for Modern Brands
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
            alt="Mobile Office Van"
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
            In today&apos;s fast-paced digital landscape, capturing attention
            demands more than conventional strategies. Your audience is always
            on the move—and that&apos;s where Plex Marketing Solutions comes in.
            We specialize in crafting tailored mobile marketing experiences that
            connect with your customers wherever they are, whenever they&apos;re
            ready to engage. With Plex, your brand travels with your audience,
            making impressions that matter.
          </Typography>
        </Box>
      </Paper>

      {/* Why Mobile Marketing Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Why Mobile Marketing?
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ lineHeight: 1.7 }}
        >
          Today&apos;s consumers are increasingly mobile and connected, so
          brands need to meet them where they live—on the go. Plex Marketing’s
          mobile experiences go beyond presenting a product; they create
          memorable, interactive journeys that captivate and engage. With our
          services, every stop becomes a valuable connection point.
        </Typography>
      </Box>

      {/* Our Solution Section */}
      <Box sx={{ mb: 8, p: 4, bgcolor: "#f5f5f5", borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Our Complete Solution
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ lineHeight: 1.7 }}
        >
          Plex Marketing is a leader in mobile marketing innovation, providing
          everything from cutting-edge promotional vehicles to fully customized
          brand experiences on the road. We bring your marketing vision to life,
          connecting with customers and elevating your brand every step of the
          journey.
        </Typography>
      </Box>

      {/* Renting Benefits Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Why Rent Instead of Buy?
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ lineHeight: 1.7 }}
        >
          Renting with Plex Marketing offers a cost-effective solution for
          maximizing impact without ownership hassles. Avoid the costs of
          insurance, upkeep, and repairs while focusing on what truly matters:
          engaging your audience and growing your brand. Let us handle the
          logistics while you drive results.
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
          Contact Our Team
        </Button>
      </Box>
    </Container>
  );
}
