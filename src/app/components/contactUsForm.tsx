"use client";

import { TextField, Button, Select, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { sendMail as sendEmailLib } from "@/lib/send-mail";

export function useSendMail() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMail = async (data: {
    subject: string;
    text: string;
    html?: string;
  }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const emailResponse = await sendEmailLib(data);
      console.log("Email response", emailResponse);
      if (emailResponse?.accepted) {
        setSuccess(true);
        console.log("Email sent successfully");
      } else {
        setError("Error sending email");
        console.log("Error sending email");
      }
    } catch (error) {
      console.log("Error sending email", error);
      setError("Error sending email");
    } finally {
      setLoading(false);
    }
  };

  return { sendMail, loading, error, success };
}

const descriptionSelections = [
  "Remote worker",
  "Nonprofit",
  "Real estate agent",
  "Personal trainer",
  "Legal service",
  "General contractor",
  "Financial services",
  "Photographer",
  "Interior designer",
  "Event planner",
  "B2B Sales &amp; HR",
];

export const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    descriptionSelection: "",
    message: "",
  });
  const { sendMail, loading, success, error } = useSendMail();

  console.log(loading, error);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (success) {
    return <div>Success!</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid
        size={{
          xs: 12,
        }}
      >
        <TextField
          fullWidth
          required
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Grid>
      <Grid
        size={{
          xs: 12,
        }}
      >
        <TextField
          fullWidth
          required
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid
        size={{
          xs: 12,
        }}
      >
        <TextField
          fullWidth
          required
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </Grid>
      <Grid
        size={{
          xs: 12,
        }}
      >
        <TextField
          fullWidth
          required
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
      </Grid>

      <Grid
        size={{
          xs: 12,
        }}
      >
        <Select
          fullWidth
          required
          value={formData.descriptionSelection}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Which best describes you?
          </MenuItem>
          {descriptionSelections.map((selection, index) => (
            <MenuItem key={index} value={selection}>
              {selection}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid
        size={{
          xs: 12,
        }}
      >
        <TextField
          fullWidth
          required
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
      </Grid>
      <Grid
        size={{
          xs: 12,
        }}
        textAlign="center"
      >
        <Button
          type="submit"
          variant="contained"
          sx={{
            borderRadius: "30px",
            width: "100%",
            textTransform: "none",
          }}
          onClick={() => {
            sendMail({
              subject: "Contact Us Form Submission",
              text: JSON.stringify(formData, null, 2),
            });
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
