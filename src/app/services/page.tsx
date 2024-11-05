// pages/services.js
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
import Link from "next/link";

export default function Services() {
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
      <Grid container spacing={4}>
        {/* Daily Rental Card */}
        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 4,
          }}
        >
          <Card
            style={{
              minHeight: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "",
            }}
            sx={{ borderRadius: 3, boxShadow: 3 }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "#000000", mb: 2 }}
              >
                Daily Rental
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                $150/
                <p
                  style={{
                    display: "inline",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  day
                </p>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                Perfect for one-day events or special promotions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 4,
          }}
        >
          <Card
            style={{
              minHeight: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "",
            }}
            sx={{ borderRadius: 3, boxShadow: 3 }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "#000000", mb: 2 }}
              >
                Weekly Rental
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                $900/
                <p
                  style={{
                    display: "inline",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  week
                </p>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                Ideal for week-long campaigns and events.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Rental Card */}
        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 4,
          }}
        >
          <Card
            style={{
              minHeight: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "",
            }}
            sx={{ borderRadius: 3, boxShadow: 3 }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "#000000", mb: 2 }}
              >
                Monthly Rental
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                $3,500/
                <p
                  style={{
                    display: "inline",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  month
                </p>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                Best for long-term promotions and sustained visibility.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Custom Rental Inquiry Section */}
      <Paper
        elevation={3}
        sx={{ mt: 6, p: 4, textAlign: "center", borderRadius: 3 }}
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
        <Link href="/contact" passHref>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#000000",
              borderRadius: "30px",
            }}
          >
            Contact Us
          </Button>
        </Link>
      </Paper>
    </Container>
  );
}
