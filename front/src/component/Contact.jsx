import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { Col } from "antd";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t, i18n } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Use FormData directly with URLSearchParams
    const searchParams = new URLSearchParams(formData).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: searchParams,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((err) => console.error("Form submission error:", err));
  };
  const isArabic = i18n.language === "ar";

  return (
    <Col style={{ gap: 5 }}>
      <div
        style={{
          color: "#ff014f",
          letterSpacing: "3px",
          fontFamily: "sans-serif",
          fontSize: isArabic
            ? "clamp(24px, 4vw, 32px)"
            : "clamp(14px, 2.5vw, 18px)",

          textAlign: "center",
        }}
      >
        {t("contact.sectionSubtitle")}
      </div>
      <div
        style={{
          fontWeight: 600,
          fontSize: "clamp(2rem, 8vw, 3.75rem)",
          textAlign: "center",
          margin: "16px 0",
        }}
      >
        {t("contact.sectionTitle")}
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        style={{ marginTop: 32 }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <h4
          style={{
            color: "#c4cfde",
            marginBottom: 12,
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {" "}
          {t("contact.emailSectionTitle")}
        </h4>

        <TextField
          name="name"
          label={t("contact.form.nameLabel")}
          fullWidth
          variant="outlined"
          required
          sx={{
            backgroundColor: "#2e2e2e",
            borderRadius: 1,
            input: { color: "#fff" },
            label: { color: "#878e99" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#444" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
          }}
        />

        <TextField
          name="email"
          label={t("contact.form.emailLabel")}
          type="email"
          fullWidth
          variant="outlined"
          required
          sx={{
            backgroundColor: "#2e2e2e",
            borderRadius: 1,
            input: { color: "#fff" },
            label: { color: "#878e99" },
            mt: 2,
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#444" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
          }}
        />

        <TextField
          name="message"
          label={t("contact.form.messageLabel")}
          fullWidth
          multiline
          minRows={4}
          variant="outlined"
          required
          sx={{
            backgroundColor: "#2e2e2e",
            borderRadius: 1,
            input: { color: "#fff" },
            label: { color: "#878e99" },
            mt: 2,
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#444" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
            "& .MuiInputBase-input": { color: "#fff" },
            "& textarea": { color: "#fff" },
            "& .MuiInputLabel-root": { color: "#878e99" },
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: isArabic ? "row-reverse" : "row",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            disabled={submitted}
            sx={{
              mt: 2,
              background: "linear-gradient(145deg, #1e2024, #23272b)",
              color: "#ff014f",
              fontWeight: 600,
              "&:hover": { background: "#191c1e" },
              "&.Mui-disabled": {
                color: submitted ? "#fff" : "#ff014f",
              },
            }}
          >
            {submitted
              ? t("contact.form.thankYou")
              : t("contact.form.sendButton")}
          </Button>
        </div>
        {submitted && (
          <Alert
            severity="success"
            sx={{
              backgroundColor: "#1e2024",
              color: "#c4cfde",
              mt: 2,
              flexDirection: isArabic ? "row-reverse" : "row",
            }}
          >
            {t("contact.form.sentAlert")}
          </Alert>
        )}
      </form>
    </Col>
  );
}
