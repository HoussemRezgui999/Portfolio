import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Stack, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import FeedbackForm from "./FeedBackForm";
import { PlayCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const OnePortfolio2 = ({ img, setLikes, liked, setLiked }) => {
  const [isSubbed, setIsSubbed] = useState(() => {
    const saved = localStorage.getItem("lms_feedback_submitted");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("lms_feedback_submitted", JSON.stringify(isSubbed));
  }, [isSubbed]);
  // console.log(isSubbed);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
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
      textAlign: isArabic ? "right" : "left",
    },
    title: {
      fontSize: 34,
      lineHeight: 1.3,
      fontWeight: 700,
      color: "#c4cfde",
      marginBottom: 20,
      textAlign: isArabic ? "right" : "left",
    },
    text: {
      fontSize: 18,
      lineHeight: "30px",
      color: "#878e99",
      fontWeight: 400,
      marginBottom: 20,
      textAlign: isArabic ? "right" : "left",
    },
    mediaWrapper: {
      width: "100%",
      maxWidth: "100%",
      position: "relative",
      paddingBottom: "56.25%",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      // textAlign: isArabic ? "right" : "left",
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

  return (
    <Row gutter={[24, 24]} wrap style={styles.container}>
      <Col xs={24} md={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={img} alt="Portfolio" style={styles.image} />
          {/* <h4 style={{ color: "#c4cfde", marginBottom: 8 }}>
            {t("oneportfolio.projectDemo")}{" "}
            <PlayCircleOutlined fontSize="small" />
          </h4>
          <div style={styles.mediaWrapper}>
            <iframe
              src="https://drive.google.com/file/d/1uHf0ia1GeSLqY_suJzlEgkhBhoJsaEr6/preview"
              frameBorder="0"
              allow="autoplay; fullscreen"
              style={styles.iframe}
            />
          </div> */}
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div style={{ padding: "0 16px" }}>
          <h3 style={styles.subtitle}> {t("oneportfolio.fullStackRole2")} </h3>
          <h3 style={styles.title}>{t("oneportfolio.projectTitle2")}</h3>
          <p style={styles.text}>{t("oneportfolio.projectDescription2")}</p>
          {/* <p style={styles.text}>
            Consectetur adipisicing elit. Cupiditate distinctio assumenda.
          </p> */}

          <Stack
            direction="row"
            gap={2}
            flexWrap="wrap"
            style={{ flexDirection: isArabic ? "row-reverse" : "row" }}
          >
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
                href="https://github.com/HoussemRezgui999/My-e-shop"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {t("oneportfolio.viewRepository")}
              </a>
              <CodeIcon fontSize="small" />
            </Button>
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
                href="https://mye-shop.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {t("oneportfolio.viewDemo")}{" "}
              </a>
              <OpenInNewOutlinedIcon fontSize="small" />
            </Button>
            {/* <h5 style={{ color: "#c4cfde" }}>
              {t("oneportfolio.demoUnavailable")}{" "}
            </h5> */}
          </Stack>

          <FeedbackForm setIsSubbed={setIsSubbed} isSubbed={isSubbed} />
        </div>
      </Col>
    </Row>
  );
};

export default OnePortfolio2;
