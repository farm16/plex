import { Box, Paper, Typography } from "@mui/material";
import { ContactUsForm } from "./contactUsForm";
import { useTranslations } from "next-intl";

export const LandingContactUsForm = () => {
  const t = useTranslations("components.landingContactUs");

  return (
    <Box
      sx={{
        backgroundImage: 'url("/city.jpg")',
        backgroundSize: "cover",
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
        <Typography variant="h4" fontWeight={400} color="#000000" p={4} pb={1}>
          {t("title")}
        </Typography>
        <Typography variant="body1" color="textSecondary" px={4} pb={1}>
          {t("subtitle")}
        </Typography>
        <Paper sx={{ p: 4, pt: 2 }}>
          <ContactUsForm />
        </Paper>
      </Box>
    </Box>
  );
};
