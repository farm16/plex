import { Box, Button, Link, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/hero.jpg")',
        backgroundSize: "cover",
        height: "60vh",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* background white background */}
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
              backgroundColor: "black",
              textTransform: "none",
            }}
          >
            Reserve yours
          </Button>
          <Link href="#" underline="hover" sx={{ color: "primary.main" }}>
            Download overview
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
