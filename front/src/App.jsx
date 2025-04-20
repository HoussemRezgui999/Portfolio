import React from "react";
import { Anchor, Avatar, Typography, ConfigProvider } from "antd";
import img from "../src/assets/0-Photoroom.png";
import Home from "./component/Home";
import Snowfall from "react-snowfall";
import Features from "./component/Features";
import Portfolio from "./component/Portfolio";
import { Grid } from "antd";
import Resume from "./component/Resume";
import ContactForm from "./component/Contact";
const { useBreakpoint } = Grid;

const App = () => {
  const { Link } = Anchor;
  const screens = useBreakpoint();
  const isMobile = screens.xs;
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
            // padding: "10px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            width: "100%",
            zIndex: 9999,
            backgroundColor: "rgba(33, 36, 40, 0.87)",
            boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
            backdropFilter: "blur(5px)",
            // top: 0,
            boxSizing: "border-box",
            // marginBottom: isMobile ? "12%" : "0%",
            // gap: isMobile ? "0" : "75%",
          }}
        >
          <Avatar
            size={isMobile ? 60 : 60}
            src={img}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.hash = "#part-1";

              window.location.reload();
            }}
          />

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
                title: <Typography.Text style={navStyle}>Home</Typography.Text>,
              },
              {
                key: "part-2",
                href: "#part-2",
                title: (
                  <Typography.Text style={navStyle}>Features</Typography.Text>
                ),
              },
              {
                key: "part-3",
                href: "#part-3",
                title: (
                  <Typography.Text style={navStyle}>Portfolio</Typography.Text>
                ),
              },
              {
                key: "part-4",
                href: "#part-4",
                title: (
                  <Typography.Text style={navStyle}>Resume</Typography.Text>
                ),
              },
              {
                key: "part-5",
                href: "#part-5",
                title: (
                  <Typography.Text style={navStyle}>Contact</Typography.Text>
                ),
              },
            ]}
          />
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

const Section = ({ children, id }) => (
  <div
    id={id}
    style={{
      width: "auto",
      minHeight: "100vh",
      padding: "10px",
      background: "#212428",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

const navStyle = {
  color: "#f4f5f6",
  fontSize: "16px",
  fontWeight: 300,
};

export default App;
