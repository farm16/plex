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
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";

const rentalOptions = [
  {
    title: "Daily Rental",
    price: "$385",
    duration: "day",
    description:
      "A convenient solution for short-term events or special one-day promotions, ensuring maximum brand exposure without long-term commitment.",
  },
  // {
  //   title: "Weekly Rental",
  //   price: "$900",
  //   duration: "week",
  //   description:
  //     "An excellent choice for week-long campaigns and events, providing flexibility and extended brand presence to engage your audience.",
  // },
  {
    title: "Monthly Rental",
    price: "$350",
    warning: "3 months min requirement",
    duration: "day",
    description:
      "Ideal for sustained, impactful marketing efforts, allowing your brand to build lasting impressions over an entire month with continuous visibility.",
  },
];

export default function Services() {
  const router = useRouter();

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 5 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: 700, color: "#000000" }}
        >
          Our Rental Services
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Choose from flexible rental options tailored to meet your promotional
          needs, whether it’s a day, a week, or a month.
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
                Book Now
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
          Need More Flexibility?
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Contact us for custom rental options for extended campaigns or
          specific requirements.
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/contact-us")}
          sx={{
            textTransform: "none",
            borderRadius: "30px",
          }}
        >
          Contact Us
        </Button>
      </Paper>
    </Container>
  );
}
