import {
  ArrowUpOutlined,
  MobileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Grid, Row, Typography } from "antd";
import React, { useState } from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Divider } from "@mui/material";

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
  console.log(title);

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
            {React.cloneElement(icon, {
              style: {
                fontSize: screens.xs ? "40px" : "50px",
                color: "#ff014f",
              },
            })}
          </div>
          <Typography.Title
            level={3}
            style={{
              fontWeight: 300,
              color: "#c4cfde",
              marginBottom: 16,
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Paragraph
            style={{
              color: "#878e99",
              marginBottom: 40,
              minHeight: screens.md ? null : "auto",
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

  const features = [
    {
      icon: <LanguageOutlinedIcon />,
      title: "Web App Development",
      description:
        "I build modern, responsive web applications using React for the frontend, and manage data through RESTful APIs connected to MongoDB or MySQL. I focus on clean UI, smooth user experience, and efficient full-stack integration.",
    },
    {
      icon: <MobileOutlined />,
      title: "Mobile App Development",
      description:
        "I develop cross-platform mobile apps with React Native, focusing on smooth performance and native-like UI. I use Firebase for real-time data, authentication, and backend services to ensure fast and scalable app functionality.",
    },
    {
      icon: <SettingOutlined />,
      title: "DevOps/Security",
      description:
        "I implement basic DevOps practices for deploying and maintaining web apps, using tools like Git, GitHub Actions, and Vercel. I follow security best practices for authentication, data validation, and securing APIs.",
    },
    {
      icon: <LanguageOutlinedIcon />,
      title: "API Design",
      description:
        "I design and build RESTful APIs that are clean, scalable, and easy to integrate. I focus on structured data flow, secure endpoints, and clear documentation to support seamless frontend-backend communication.",
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
            fontSize: screens.xs ? "12px" : "14px",
            letterSpacing: "3px",
            color: "#ff014f",
            textTransform: "uppercase",
            display: "block",
            marginBottom: 16,
          }}
        >
          Features
        </Typography.Text>
        <Typography.Title
          style={{
            fontSize: screens.xs ? "36px" : "50px",
            color: "#c4cfde",
            marginBottom: screens.xs ? "24px" : "48px",
          }}
        >
          What I Do
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
