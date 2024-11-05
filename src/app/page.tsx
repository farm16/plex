import { Fragment } from "react";
import Hero from "./components/hero";
import MobileOfficeVanFeatures from "./components/mobileOfficeVanFeatures";
import { ContactUsForm } from "./components/contactUsForm";
import { Box, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <MobileOfficeVanFeatures />
      <Box
        sx={{
          backgroundImage: 'url("/city.jpg")',
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={4}
      >
        <Box
          width={{
            xs: "100%",
            sm: 400,
          }}
          borderRadius={2}
          bgcolor="white"
        >
          <Typography
            variant="h4"
            fontWeight={400}
            color="#000000"
            p={4}
            pb={1}
          >
            Work, anywhere
          </Typography>
          <Typography variant="body1" color="textSecondary" px={4} pb={1}>
            Connect with a member of our team to learn more about our mobile
            office van conversions, process, and available build spots.
          </Typography>

          <Paper sx={{ p: 4, pt: 2 }}>
            <ContactUsForm />
          </Paper>
        </Box>
      </Box>
    </Fragment>
  );
}
