import React from "react";
import { TextField, Button, Alert } from "@mui/material";

/**
 * FeedbackForm uses the parent-managed `isSubbed` state to
 * persist submission status across mounts.
 */
function FeedbackForm({ isSubbed, setIsSubbed }) {
  console.log(isSubbed);

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
        // mark as submitted in parent state
        setIsSubbed(true);
        form.reset();
      })
      .catch((err) => console.error("Form submission error:", err));
  };

  return (
    <form
      name="feedback"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      style={{ marginTop: 32 }}
    >
      <input type="hidden" name="form-name" value="feedback" />

      <h4 style={{ color: "#c4cfde", marginBottom: 8 }}>Leave Feedback</h4>
      <TextField
        name="feedback"
        fullWidth
        multiline
        minRows={3}
        placeholder="Tell me what you think…"
        sx={{
          backgroundColor: "#2e2e2e",
          borderRadius: 1,
          input: { color: "#fff" },
          textarea: { color: "#fff" },
          marginBottom: 2,
        }}
      />

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
        }}
      >
        {isSubbed ? "Thanks for your feedback!" : "Submit Feedback"}
      </Button>

      {isSubbed && (
        <Alert
          severity="success"
          sx={{ backgroundColor: "#1e2024", color: "#c4cfde", mt: 2 }}
        >
          Feedback received!
        </Alert>
      )}
    </form>
  );
}

export default FeedbackForm;
