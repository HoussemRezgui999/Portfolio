import React, { useEffect } from "react";
import { Anchor, Avatar, Typography, ConfigProvider, Select } from "antd";
import img from "../src/assets/0-Photoroom.png";
import Home from "./component/Home";
import Features from "./component/Features";
import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";
import ContactForm from "./component/Contact";
import { Grid } from "antd";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

const { useBreakpoint } = Grid;

const App = () => {
  const { Link } = Anchor;
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const { t, i18n } = useTranslation();
  const isDeutsch = i18n.language === "de";

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const navStyle = {
    color: "#f4f5f6",
    fontSize: isMobile ? "12px" : "16px",
    fontWeight: isMobile ? 250 : 300,
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff014f",
        },
      }}
    >
      <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "space-between",
            position: "fixed",
            width: "100%",
            zIndex: 9999,
            backgroundColor: "rgba(33, 36, 40, 0.87)",
            boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
            backdropFilter: "blur(5px)",
            boxSizing: "border-box",
            padding: "10px",
          }}
        >
          {!isMobile && (
            <Avatar
              size={60}
              src={img}
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.hash = "#part-1";
                window.location.reload();
              }}
            />
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2%",
              maxWidth: isMobile ? "90%" : null,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Anchor
              direction="horizontal"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                left: isMobile ? "0%" : "-10%",
              }}
              items={[
                {
                  key: "part-1",
                  href: "#part-1",
                  title: (
                    <Typography.Text style={navStyle}>
                      {t("nav.home")}
                    </Typography.Text>
                  ),
                },
                {
                  key: "part-2",
                  href: "#part-2",
                  title: (
                    <Typography.Text style={navStyle}>
                      {t("nav.features")}
                    </Typography.Text>
                  ),
                },
                {
                  key: "part-3",
                  href: "#part-3",
                  title: (
                    <Typography.Text style={navStyle}>
                      {t("nav.portfolio")}
                    </Typography.Text>
                  ),
                },
                {
                  key: "part-4",
                  href: "#part-4",
                  title: (
                    <Typography.Text style={navStyle}>
                      {t("nav.resume")}
                    </Typography.Text>
                  ),
                },
                {
                  key: "part-5",
                  href: "#part-5",
                  title: (
                    <Typography.Text style={navStyle}>
                      {t("nav.contact")}
                    </Typography.Text>
                  ),
                },
              ]}
            />
            <Select
              value={i18n.language}
              size={isMobile ? "small" : undefined}
              style={{ zIndex: 999, display: "flex", marginLeft: 2 }}
              onChange={changeLanguage}
              dropdownStyle={{ zIndex: 10000 }}
              options={[
                {
                  value: "en",
                  label: <Flag code="GB" style={{ width: 20 }} />,
                },
                {
                  value: "fr",
                  label: <Flag code="FR" style={{ width: 20 }} />,
                },
                {
                  value: "ar",
                  label: <Flag code="SA" style={{ width: 20 }} />,
                },
                {
                  value: "de",
                  label: <Flag code="DE" style={{ width: 20 }} />,
                },
              ]}
            />
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <Section id="part-1">
            <Home img={img} isMobile={isMobile} />
          </Section>
          <Section id="part-2">
            <Features />
          </Section>
          <Section id="part-3">
            <Portfolio />
          </Section>
          <Section id="part-4">
            <Resume />
          </Section>
          <Section id="part-5">
            <ContactForm />
          </Section>
        </div>
      </>
    </ConfigProvider>
  );
};

const Section = ({ children, id }) => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;
  const isMed = screens.md;

  return (
    <div
      id={id}
      style={{
        width: "100%",
        minHeight: "100vh",
        paddingTop: isMobile ? "15%" : "0%",
        background: "#212428",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default App;
