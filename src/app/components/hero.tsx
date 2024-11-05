import { Box, Button, Container, Link, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      height={{
        xs: "calc(70vh - 64px)",
        sm: "calc(70vh - 64px)",
        md: "calc(70vh - 64px)",
        lg: "calc(70vh - 64px)",
      }}
      sx={{
        backgroundImage: 'url("/hero.jpg")',
        backgroundSize: "cover",

        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* background white background */}
      <Container maxWidth="lg">
        <Box
          maxWidth="md"
          mx={3}
          style={{
            maxWidth: "30rem",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
          <Typography
            variant="h2"
            fontSize={{
              xs: "2.5rem",
              sm: "3rem",
              md: "3.5rem",
              lg: "4rem",
            }}
            sx={{
              lineHeight: 0.9,
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Fast, Flexible Event Vehicle Solutions
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: "400px" }}>
            Simple, spacious mobile office van conversions that help you do your
            best work, anywhere.
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              style={{
                textTransform: "none",
                borderRadius: "30px",
              }}
            >
              Reserve yours
            </Button>
            <Link href="#" underline="hover" sx={{ color: "primary.main" }}>
              Download overview
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
