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

export default function FAQ() {
  const faqs = [
    {
      question: "What is Plex Marketing Solutions?",
      answer:
        "Plex Marketing Solutions is a leader in mobile marketing innovation, specializing in creating tailored, on-the-go brand experiences for modern businesses. We offer cutting-edge promotional vehicles and fully customized mobile marketing solutions.",
    },
    {
      question: "Why is mobile marketing so effective?",
      answer:
        "Mobile marketing reaches your audience where they spend most of their time: on the go. By utilizing promotional vehicles and interactive brand experiences, we create memorable and engaging moments that drive results and brand loyalty.",
    },
    {
      question: "What kind of vehicles do you offer?",
      answer:
        "We offer a range of custom promotional vehicles, from high-tech vans to fully equipped mobile showrooms, designed to fit your brand's specific needs and campaign goals.",
    },
    {
      question: "Is mobile marketing rental a good option for my business?",
      answer:
        "Yes! Renting a mobile marketing vehicle with Plex is a cost-effective solution. It allows you to access high-quality, fully insured vehicles without the ongoing costs and responsibilities of ownership. You can focus on your campaign while we manage the logistics.",
    },
    {
      question: "How do I rent a promotional vehicle?",
      answer:
        "Simply reach out to our team through the contact page, and we'll work with you to select the perfect vehicle for your needs, customize it for your brand, and set up a schedule for your campaign.",
    },
    {
      question: "How much does renting a promotional vehicle cost?",
      answer:
        "The cost of renting a vehicle depends on the duration of the campaign, the type of vehicle, and any customizations required. Contact us for a tailored quote that meets your needs and budget.",
    },
    {
      question: "Can I customize the inside of the vehicle?",
      answer:
        "Absolutely! We provide full customization options to ensure the vehicle aligns with your branding. From interior layouts to promotional displays, we ensure your vehicle provides a fully branded experience for your customers.",
    },
    {
      question: "How do I ensure the safety of my team and equipment?",
      answer:
        "Our vehicles are fully insured, reducing the risk to your business. In addition, we follow strict maintenance schedules and provide reliable support during your campaign to ensure everything runs smoothly.",
    },
    {
      question: "Do you offer nationwide service?",
      answer:
        "Yes, we offer nationwide coverage. Whether you're running a campaign in one city or multiple locations across the country, we can support you with our fleet of vehicles and expert logistics management.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple. Reach out to our team through the contact page, and we'll walk you through the process, helping you select the right vehicle and customize your campaign. Let's make your marketing experience unforgettable!",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Everything you need to know about Plex Marketing Solutions and our
          mobile marketing services.
        </Typography>
      </Box>

      {/* FAQ List */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
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
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 6, paddingLeft: { xs: 0, md: 4 } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              More About Our Services
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We specialize in creating impactful mobile marketing experiences
              that bring your brand directly to your audience. Learn more about
              our services and how we can help you engage customers on the go.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
