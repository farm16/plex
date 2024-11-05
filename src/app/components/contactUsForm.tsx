"use client";

import { TextField, Button, Paper, Select, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

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
            backgroundColor: "#000000",
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
