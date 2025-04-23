import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("components.faq");

  const faqs = [
    {
      question: t("q1.question"),
      answer: t("q1.answer"),
    },
    {
      question: t("q2.question"),
      answer: t("q2.answer"),
    },
    {
      question: t("q3.question"),
      answer: t("q3.answer"),
    },
    {
      question: t("q4.question"),
      answer: t("q4.answer"),
    },
    {
      question: t("q5.question"),
      answer: t("q5.answer"),
    },
    {
      question: t("q6.question"),
      answer: t("q6.answer"),
    },
    {
      question: t("q7.question"),
      answer: t("q7.answer"),
    },
    {
      question: t("q8.question"),
      answer: t("q8.answer"),
    },
    {
      question: t("q9.question"),
      answer: t("q9.answer"),
    },
    {
      question: t("q10.question"),
      answer: t("q10.answer"),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          {t("heading")}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {t("subheading")}
        </Typography>
      </Box>

      {/* FAQ List */}
      <Grid container spacing={4}>
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
            {faqs.map((faq, index) => (
              <Accordion key={index} sx={{ mb: 2, borderRadius: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: "#f9f9f9",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Box sx={{ mb: 6, paddingLeft: { xs: 0, md: 4 } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {t("sidebarTitle")}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {t("sidebarText")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
