import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { Col } from "antd";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new URLSearchParams(new FormData(form)).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((err) => console.error("Form submission error:", err));
  };

  return (
    <Col style={{ gap: 5 }}>
      <div
        style={{
          color: "#ff014f",
          letterSpacing: "3px",
          fontFamily: "sans-serif",
          fontSize: "clamp(12px, 2vw, 16px)",
          textAlign: "center",
        }}
      >
        HAVE QUESTIONS OR OPPORTUNITIES? I’D LOVE TO HEAR FROM YOU
      </div>
      <div
        style={{
          fontWeight: 600,
          fontSize: "clamp(2rem, 8vw, 3.75rem)",
          textAlign: "center",
          margin: "16px 0",
        }}
      >
        CONTACT ME
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        style={{ marginTop: 32 }}
        netlify
      >
        {/* Hidden input required by Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <h4 style={{ color: "#c4cfde", marginBottom: 12 }}>E-Mail Me</h4>

        <TextField
          name="name"
          label="Your Name"
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
          label="Your Email"
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
          label="Message"
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
          }}
        />

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
          }}
        >
          {submitted ? "Thanks, I'll be in touch!" : "Send Message"}
        </Button>

        {submitted && (
          <Alert
            severity="success"
            sx={{ backgroundColor: "#1e2024", color: "#c4cfde", mt: 2 }}
          >
            Your message has been sent!
          </Alert>
        )}
      </form>
    </Col>
  );
}
