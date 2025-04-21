import React from "react";
import { TextField, Button, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";

function FeedbackForm({ isSubbed, setIsSubbed }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Convert form data to URLSearchParams
    const searchParams = new URLSearchParams(formData);
    searchParams.append("form-name", "feedback"); // Ensure form-name is included

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: searchParams.toString(),
    })
      .then(() => {
        setIsSubbed(true);
        form.reset();
      })
      .catch((err) => console.error("Form submission error:", err));
  };
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <form
      name="feedback"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      style={{ marginTop: 32 }}
    >
      <input type="hidden" name="form-name" value="feedback" />

      {/* Add honeypot field for spam protection */}
      <div style={{ display: "none" }}>
        <input name="bot-field" />
      </div>

      <h4
        style={{
          color: "#c4cfde",
          marginBottom: 8,
          textAlign: isArabic ? "right" : "left",
        }}
      >
        {" "}
        {t("feedback.title")}
      </h4>
      <TextField
        name="feedback"
        fullWidth
        multiline
        minRows={3}
        placeholder={t("feedback.placeholder")}
        required
        sx={{
          backgroundColor: "#2e2e2e",
          borderRadius: 1,
          input: { color: "#fff" },
          textarea: { color: "#fff" },
          marginBottom: 2,
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#444" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
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
          disabled={isSubbed}
          sx={{
            background: "linear-gradient(145deg, #1e2024, #23272b)",
            color: "#ff014f",
            "&:hover": {
              boxShadow: "6px 12px 12px rgba(0,0,0,0.5)",
              background: "#191c1e",
            },
            "&.Mui-disabled": {
              color: isSubbed ? "#fff" : "#ff014f",
              flexDirection: isArabic ? "row-reverse" : "row",
            },
            flexDirection: isArabic ? "row-reverse" : "row",
          }}
        >
          {isSubbed ? t("feedback.thankYou") : t("feedback.submitButton")}
        </Button>
      </div>

      {isSubbed && (
        <Alert
          severity="success"
          sx={{
            backgroundColor: "#1e2024",
            color: "#c4cfde",
            mt: 2,
            flexDirection: isArabic ? "row-reverse" : "row",
          }}
        >
          {t("feedback.receivedAlert")}
        </Alert>
      )}
    </form>
  );
}

export default FeedbackForm;
