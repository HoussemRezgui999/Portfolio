import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Stack, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import FeedbackForm from "./FeedBackForm";
import { PlayCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";

const styles = {
  container: {
    background: "linear-gradient(145deg, #1e2024, #23272b)",
    padding: "2%",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: "30px",
    color: "#878e99",
    fontWeight: 500,
    marginBottom: 5,
  },
  title: {
    fontSize: 34,
    lineHeight: 1.3,
    fontWeight: 700,
    color: "#c4cfde",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: "30px",
    color: "#878e99",
    fontWeight: 400,
    marginBottom: 20,
  },
  mediaWrapper: {
    width: "100%",
    maxWidth: "100%",
    position: "relative",
    paddingBottom: "56.25%",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    transition: "transform .2s",
    borderRadius: "1%",
  },
};

const OnePortfolio = ({ img, setLikes, liked, setLiked }) => {
  const [isSubbed, setIsSubbed] = useState(() => {
    const saved = localStorage.getItem("lms_feedback_submitted");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("lms_feedback_submitted", JSON.stringify(isSubbed));
  }, [isSubbed]);
  // console.log(isSubbed);

  return (
    <Row gutter={[24, 24]} wrap style={styles.container}>
      <Col xs={24} md={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <img src={img} alt="Portfolio" style={styles.image} />
          <h4 style={{ color: "#c4cfde", marginBottom: 8 }}>
            Project Demo <PlayCircleOutlined fontSize="small" />
          </h4>
          <div style={styles.mediaWrapper}>
            <iframe
              src="https://drive.google.com/file/d/1uHf0ia1GeSLqY_suJzlEgkhBhoJsaEr6/preview"
              frameBorder="0"
              allow="autoplay; fullscreen"
              style={styles.iframe}
            />
          </div>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div style={{ padding: "0 16px" }}>
          <h3 style={styles.subtitle}>Full Stack Role</h3>
          <h3 style={styles.title}>Learning Management System — LMS.</h3>
          <p style={styles.text}>
            This project is a full-stack web application built with React for
            the frontend, Node.js and Express for the backend, and Sequelize for
            managing the database. The frontend uses Material-UI (MUI) for a
            modern, responsive UI. The app allows users to interact with a
            database through RESTful APIs, with Sequelize handling data models
            and database queries. Users can sign up, log in, and manage data,
            with the backend providing authentication via JWT. The frontend
            dynamically updates based on user actions and data fetched from the
            server, ensuring a seamless experience. The application is designed
            to be scalable, with efficient error handling and clean UI
            components.
          </p>
          {/* <p style={styles.text}>
            Consectetur adipisicing elit. Cupiditate distinctio assumenda.
          </p> */}

          <Stack direction="row" gap={2} flexWrap="wrap">
            <Button
              size="large"
              sx={{
                borderRadius: "6px",
                background: "linear-gradient(145deg, #1e2024, #23272b)",
                boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                transition: "0.4s",
                fontWeight: 600,
                color: "#ff014f",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: 3,
                "&:hover": {
                  boxShadow: "6px 12px 12px rgba(0,0,0,0.5)",
                  background: "#191c1e",
                },
              }}
            >
              <a
                href="https://github.com/LMS-team-RBK"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Repository
              </a>
              <CodeIcon fontSize="small" />
            </Button>
            <Button
              size="large"
              disabled
              sx={{
                borderRadius: "6px",
                background: "linear-gradient(145deg, #1e2024, #23272b)",
                boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                transition: "0.4s",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 3,
                pointerEvents: "none",
                "&:hover": {
                  boxShadow: "6px 12px 12px rgba(0,0,0,0.5)",
                  background: "",
                },
              }}
            >
              VIEW DEMO <OpenInNewOutlinedIcon fontSize="small" />
            </Button>
            <h5 style={{ color: "#c4cfde" }}>
              Live demo is no longer available. :({" "}
            </h5>
          </Stack>

          <FeedbackForm setIsSubbed={setIsSubbed} isSubbed={isSubbed} />
        </div>
      </Col>
    </Row>
  );
};

export default OnePortfolio;
