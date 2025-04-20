import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import { Col, Row, Typography } from "antd";
import { Grid } from "@mui/material";

import {
  ArrowRightOutlined,
  FacebookFilled,
  MobileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import resumePDF from "../assets/resume2.pdf";
import { Document } from "react-pdf";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import React, { useState, useEffect } from "react";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function ResumePage() {
  return (
    <>
      {" "}
      <Divider style={{ background: "black" }} variant="middle" />
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
          VIEW MY RESUME AND FEEL FREE TO REACH OUT
        </div>
        <div
          style={{
            fontWeight: 600,
            fontSize: "clamp(2rem, 8vw, 3.75rem)",
            textAlign: "center",
            margin: "16px 0",
          }}
        >
          My Resume
        </div>

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{ width: "100%", maxWidth: "800px", aspectRatio: "21/22" }}
          >
            <iframe
              src={resumePDF}
              frameBorder="0"
              style={{ width: "100%", height: "110%", borderRadius: "12px" }}
              allowFullScreen
            />
          </div>
        </div>
      </Col>
    </>
  );
}
