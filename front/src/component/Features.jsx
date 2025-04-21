import {
  ArrowUpOutlined,
  MobileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Grid, Row, Typography } from "antd";
import React, { useState } from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const { useBreakpoint } = Grid;

const FeatureCard = ({
  icon,
  title,
  index,
  activeIndex,
  setActiveIndex,
  description,
}) => {
  const isActive = activeIndex === index;
  const screens = useBreakpoint();
  // console.log(title);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Col
      xs={24}
      sm={24}
      md={12}
      lg={8}
      xl={6}
      style={{
        padding: screens.xs ? "16px" : "24px",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          background: "linear-gradient(145deg, #1e2024, #23272b)",
          boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
          borderRadius: "6px",
          padding: isActive ? "40px" : "60px 40px",
          transition: "all 0.3s ease",
          height: "90%",
        }}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
      >
        <div style={{ textAlign: "left" }}>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                display: "flex",
                justifyContent: isArabic ? "flex-end" : "flex-start",
              }}
            >
              {React.cloneElement(icon, {
                style: {
                  fontSize: screens.xs ? "40px" : "50px",
                  color: "#ff014f",
                },
              })}
            </div>
          </div>
          <Typography.Title
            level={3}
            style={{
              fontWeight: 300,
              color: "#c4cfde",
              marginBottom: 16,
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Paragraph
            style={{
              color: "#878e99",
              marginBottom: 40,
              minHeight: screens.md ? null : "auto",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {description}
          </Typography.Paragraph>
          <ArrowUpOutlined
            style={{
              opacity: isActive ? 1 : 0,
              transition: "all 0.3s ease",
              fontSize: "30px",
              color: "#ff014f",
            }}
          />
        </div>
      </div>
    </Col>
  );
};

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const screens = useBreakpoint();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const features = [
    {
      icon: <LanguageOutlinedIcon />,
      title: t("feature.cards.0.title"),
      description: t("feature.cards.0.description"),
    },
    {
      icon: <MobileOutlined />,
      title: t("feature.cards.1.title"),
      description: t("feature.cards.1.description"),
    },
    {
      icon: <SettingOutlined />,
      title: t("feature.cards.2.title"),
      description: t("feature.cards.2.description"),
    },
    {
      icon: <LanguageOutlinedIcon />,
      title: t("feature.cards.3.title"),
      description: t("feature.cards.3.description"),
    },
  ];

  return (
    <div style={{ padding: screens.xs ? "24px 16px" : "5% 7%" }}>
      {/* <Divider style={{ background: "black" }} variant="middle" /> */}
      <div
        style={{ marginTop: screens.xs ? "32px" : "48px", textAlign: "center" }}
      >
        <Typography.Text
          style={{
            // fontSize: screens.xs ? "12px" : "14px",
            fontSize: isArabic
              ? "clamp(24px, 4vw, 32px)"
              : "clamp(14px, 2.5vw, 18px)",

            letterSpacing: "3px",
            color: "#ff014f",
            textTransform: "uppercase",
            display: "block",
            marginBottom: 16,
          }}
        >
          {t("feature.sectionTitle")}
        </Typography.Text>
        <Typography.Title
          style={{
            fontSize: screens.xs ? "36px" : "50px",
            color: "#c4cfde",
            marginBottom: screens.xs ? "24px" : "48px",
          }}
        >
          {t("feature.title")}
        </Typography.Title>
        <Row
          gutter={[screens.xs ? 16 : 32, screens.xs ? 16 : 32]}
          justify="center"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              activeIndex={activeIndex}
              description={feature.description}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Features;
