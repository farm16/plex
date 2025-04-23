"use client";

import { TextField, Button, Select, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { sendMail as sendEmailLib } from "@/lib/send-mail";
import { useTranslations } from "next-intl";

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
      if (emailResponse?.accepted) {
        setSuccess(true);
      } else {
        setError("Error sending email");
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
  "B2B Sales & HR",
];

export const ContactUsForm = () => {
  const t = useTranslations("components.contactUs");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    descriptionSelection: "",
    message: "",
  });
  const { sendMail, loading, success, error } = useSendMail();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name as string]: value }));
  };

  if (loading) return <div>{t("loading")}</div>;
  if (error)
    return (
      <div>
        {t("error")}: {error}
      </div>
    );
  if (success) return <div>{t("success")}</div>;

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
          label={t("name")}
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
          label={t("email")}
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
          label={t("companyName")}
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
          label={t("phone")}
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
          name="descriptionSelection"
          value={formData.descriptionSelection}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            {t("descriptionPrompt")}
          </MenuItem>
          {descriptionSelections.map((selection, index) => (
            <MenuItem key={index} value={selection}>
              {t(`descriptions.${selection}`)}
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
          label={t("message")}
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
          onClick={() =>
            sendMail({
              subject: "Contact Us Form Submission",
              text: JSON.stringify(formData, null, 2),
            })
          }
        >
          {t("submit")}
        </Button>
      </Grid>
    </Grid>
  );
};
