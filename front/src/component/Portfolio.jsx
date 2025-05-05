import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import { Col, Grid, Row, Typography } from "antd";
import {
  ArrowRightOutlined,
  FacebookFilled,
  MobileOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import React, { useState, useEffect } from "react";
import img from "../assets/rbk.png";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import OnePortfolio from "./OnePortfolio";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(null);
  const [isHoveredText, setIsHoveredText] = useState(false);
  const [index1, setIndex1] = useState(null);
  const [open, setOpen] = useState(false);
  const [portfolioData, setPortfolioData] = useState(null);

  // const [likes, setLikes] = useState(() => {
  //   const savedLikes = localStorage.getItem("portfolio-likes");
  //   return savedLikes !== null ? parseInt(savedLikes, 10) : 0;
  // });
  // const [liked, setLiked] = useState(() => {
  //   const savedLiked = localStorage.getItem("portfolio-liked");
  //   return savedLiked === 'true';
  // });

  // useEffect(() => {
  //   localStorage.setItem("portfolio-likes", likes);
  // }, [likes]);

  // useEffect(() => {
  //   localStorage.setItem("portfolio-liked", liked);
  // }, [liked]);

  const handleClose = () => {
    setOpen(false);
  };

  // const incrementLikes = () => {
  //   if (!liked) {
  //     setLikes((prevLikes) => prevLikes + 1);
  //     setLiked(true);
  //   } else {
  //     setLikes((prevLikes) => prevLikes - 1);
  //     setLiked(false);
  //   }
  // };
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    setPortfolioData({
      img: img,
      title: "Web App Development",
      description:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    });
    setOpen(true);
  };
  const isArabic = i18n.language === "ar";
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = screens.xs;
  return (
    <div style={{ padding: isMobile ? "24px 16px" : "5% 7%" }}>
      {" "}
      <Col style={{ gap: 5, padding: "0 16px", marginTop: "2%" }}>
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
          {t("portfolio.sectionSubtitle")}
        </div>
        <div
          style={{
            fontWeight: 600,
            fontSize: "clamp(2rem, 8vw, 3.75rem)",
            textAlign: "center",
            margin: "16px 0",
          }}
        >
          {t("portfolio.sectionTitle")}
        </div>
        <Row
          style={{
            marginTop: "5%",
          }}
        >
          <div
            style={{
              width: "min(100%, 100%)",
              background: "linear-gradient(145deg, #1e2024, #23272b)",
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
              borderRadius: "6px",
              cursor: "pointer",
              padding: "clamp(20px, 5vw, 60px)",
              transition: "ease-in 0.3s",
              boxSizing: "border-box",
            }}
            onMouseEnter={() => {
              setIsHovered(true);
              setIndex(1);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setIndex(null);
            }}
            onClick={handleClick}
          >
            <Col style={{ textAlign: "left" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  src={img}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "600px",
                    transition: "transform .2s",
                    transform: isHovered && index === 1 ? "scale(1.05)" : null,
                  }}
                />
              </div>
              <Row
                style={{
                  gap: "16px",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginTop: "16px",
                }}
              >
                <Col
                  span={24}
                  style={{ textAlign: isArabic ? "right" : "left" }}
                >
                  <h4
                    style={{
                      fontSize: "clamp(14px, 2vw, 18px)",
                      fontWeight: 400,
                      lineHeight: "1.25",
                      textTransform: "uppercase",
                      color: "#ff014f",
                      margin: 0,
                    }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {t("portfolio.card.category")}
                  </h4>
                </Col>
              </Row>

              <div style={{ marginTop: "16px" }}>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <h2
                    style={{
                      fontWeight: 500,
                      color: isHoveredText && index1 === 1 ? "#ff014f" : null,
                      transition: "ease-in 0.2s",
                      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                      margin: 0,
                      lineHeight: 1.4,
                      textWrap: "pretty",
                      textAlign: isArabic ? "right" : "left",
                    }}
                    onMouseEnter={() => {
                      setIsHoveredText(true), setIndex1(1);
                    }}
                    onMouseLeave={() => {
                      setIsHoveredText(false), setIndex1(null);
                    }}
                  >
                    {t("portfolio.card.description")}

                    <ArrowOutwardOutlinedIcon
                      style={{
                        visibility:
                          isHoveredText && index1 === 1 ? "visible" : "hidden",
                        transition: "ease-in 0.2s",
                        fontSize: "20px",
                        color: "#ff014f",
                        marginLeft: "1%",
                      }}
                    />
                  </h2>
                </Row>
              </div>
            </Col>
          </div>
        </Row>
      </Col>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="xl"
        sx={{
          zIndex: 99999,
          "& .MuiDialog-paper": {
            margin: "16px",
            maxWidth: "100vw",
          },
        }}
      >
        <OnePortfolio img={img} />
      </Dialog>
    </div>
  );
};

export default Portfolio;
