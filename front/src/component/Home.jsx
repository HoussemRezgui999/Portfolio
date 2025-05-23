import { Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FacebookFilled,
  StarFilled,
  StarTwoTone,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Snowfall } from "react-snowfall";
import banner from "../assets/0-Photoroom.png";
import { useTranslation } from "react-i18next";

function IconReact(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height={"85%"} {...props}>
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
    </svg>
  );
}

function IconMysql(props) {
  return (
    <svg viewBox="0 0 24 24" height={"85%"} {...props}>
      <defs>
        <linearGradient id="mysqlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#00758F", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#F29111", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#mysqlGradient)"
        d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"
      />
    </svg>
  );
}

function IconLogoJavascript(props) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" height={"85%"} {...props}>
      <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
    </svg>
  );
}
function IconNodejs(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" height={"85%"} {...props}>
      <path
        fill="currentColor"
        d="M5.304 16.563a.265.265 0 00-.132-.23L2.98 15.072a.26.26 0 00-.121-.035h-.023a.264.264 0 00-.121.035L.524 16.333a.265.265 0 00-.133.23l.005 3.396a.13.13 0 00.066.114.13.13 0 00.132 0l1.302-.746a.267.267 0 00.132-.23V17.51c0-.094.05-.182.132-.229l.555-.319a.272.272 0 01.265 0l.554.319a.264.264 0 01.132.229v1.587c0 .095.051.181.133.23l1.302.746a.13.13 0 00.132 0 .133.133 0 00.066-.114l.004-3.396zm11.702-4.669c-.041-.023-.091-.022-.131.002s-.065.067-.065.114v3.363a.093.093 0 01-.139.08l-.549-.316a.267.267 0 00-.265 0l-2.192 1.265a.265.265 0 00-.133.229v2.531c0 .095.05.182.132.229l2.192 1.266a.267.267 0 00.265 0l2.193-1.266a.265.265 0 00.132-.229v-6.309a.265.265 0 00-.136-.231l-1.305-.728zm-.203 6.437a.063.063 0 01-.033.057l-.753.434a.065.065 0 01-.066 0l-.753-.434a.065.065 0 01-.033-.057v-.869c0-.024.013-.046.033-.057l.753-.435a.065.065 0 01.066 0l.753.435c.02.012.033.034.033.057v.869zm8.047-.892a.265.265 0 00.132-.229v-.613a.264.264 0 00-.132-.229l-2.178-1.265a.262.262 0 00-.265 0l-2.192 1.265a.264.264 0 00-.132.229v2.53c0 .095.051.183.134.23l2.178 1.241c.08.046.179.046.26.001l1.317-.732c.041-.023.067-.067.068-.115s-.025-.092-.066-.116l-2.206-1.266a.131.131 0 01-.066-.115v-.793c0-.047.025-.091.066-.115l.687-.395a.135.135 0 01.132 0l.687.395a.132.132 0 01.066.115v.624c0 .047.025.091.066.115s.092.023.133 0l1.312-.763zM9.291 15.09a.267.267 0 01.265 0l2.192 1.265a.263.263 0 01.132.229v2.532a.265.265 0 01-.132.229l-2.192 1.266a.267.267 0 01-.265 0l-2.192-1.266a.264.264 0 01-.132-.229v-2.532c0-.095.05-.182.132-.229l2.192-1.265zm19.815 5.557a.438.438 0 01-.217-.058l-.69-.408c-.103-.058-.052-.078-.019-.09.137-.048.165-.059.312-.142.015-.009.036-.005.052.004l.53.315a.066.066 0 00.064 0l2.067-1.193a.065.065 0 00.031-.056v-2.386a.067.067 0 00-.032-.057l-2.066-1.192a.066.066 0 00-.064 0l-2.066 1.192a.066.066 0 00-.033.057v2.386c0 .023.013.044.032.055l.566.327c.307.154.495-.027.495-.209v-2.355a.06.06 0 01.06-.059h.262a.06.06 0 01.06.059v2.355c0 .41-.223.645-.612.645-.119 0-.214 0-.476-.129l-.542-.312a.436.436 0 01-.217-.377v-2.386c0-.155.083-.3.217-.377l2.067-1.194a.452.452 0 01.434 0l2.067 1.194a.436.436 0 01.217.377v2.386a.437.437 0 01-.217.377l-2.067 1.193a.436.436 0 01-.218.058zm.639-1.643c-.905 0-1.094-.415-1.094-.764 0-.033.026-.059.06-.059h.267a.06.06 0 01.059.051c.04.272.16.41.708.41.435 0 .621-.099.621-.329 0-.133-.052-.232-.729-.298-.565-.056-.915-.181-.915-.633 0-.417.352-.666.941-.666.662 0 .99.23 1.031.723.002.017-.004.033-.016.046s-.027.019-.044.019h-.268a.06.06 0 01-.058-.047c-.064-.286-.221-.378-.645-.378-.475 0-.531.166-.531.29 0 .151.065.194.707.279.635.084.937.203.937.649 0 .45-.375.708-1.03.708zm-7.239-1.683a.052.052 0 01.051 0l.421.243a.05.05 0 01.026.044v.486a.05.05 0 01-.026.044l-.421.243a.052.052 0 01-.051 0l-.42-.243a.05.05 0 01-.025-.044v-.486c0-.018.01-.035.025-.044l.42-.243z"
      />
    </svg>
  );
}
function IconHtml5(props) {
  return (
    <svg viewBox="0 0 1024 1024" fill="currentColor" height={"85%"} {...props}>
      <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
    </svg>
  );
}
function IconCss3(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" height={"85%"} {...props}>
      <path
        fill="currentColor"
        d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
      />
    </svg>
  );
}

const Home = ({ isMobile }) => {
  // console.log(isMobile);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  // console.log(isArabic);

  return (
    <div
      style={{
        padding: !isMobile ? "5%" : "5%",
        position: "relative",
      }}
    >
      <Snowfall speed={[0, 0.5]} snowflakeCount={30} style={{ opacity: 0.5 }} />

      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} lg={14} xl={12}>
          <div style={{ marginBottom: "40px" }}>
            <Typography.Title
              style={{
                fontSize: "clamp(12px, 3vw, 14px)",
                fontWeight: 500,
                marginBottom: "14px",
                letterSpacing: "3px",
                color: "#c4cfde",
                textTransform: "uppercase",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              {t("home.welcome")}
            </Typography.Title>

            <Typography.Text
              style={{
                fontSize: "clamp(36px, 8vw, 60px)",
                fontWeight: 750,
                lineHeight: 1.2,
                color: "#ffffff",
                display: "block",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              {t("home.hi")}

              <Typography.Text
                style={{
                  color: "#ff014f",
                  display: "inline-block",
                  fontSize: "70%",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {t("home.name")}
              </Typography.Text>
            </Typography.Text>

            <Typography.Text
              style={{
                fontSize: "clamp(24px, 6vw, 50px)",
                fontWeight: 750,
                margin: "20px 0",
                color: "#ffffff",
                display: "block",
                lineHeight: 1.3,
                textAlign: isArabic ? "right" : "left",
              }}
            >
              {t("home.a")}

              <TypeAnimation
                sequence={[
                  t("home.webDeveloper"),
                  500,
                  t("home.fullStackDeveloper"),
                  500,
                ]}
                speed={25}
                repeat={Infinity}
              />
            </Typography.Text>

            <Typography.Text
              style={{
                fontSize: "clamp(14px, 2vw, 17px)",
                color: "#c4cfde",
                lineHeight: 1.6,
                marginBottom: "40px",
                display: "block",
                textAlign: isArabic ? "right" : "left",
              }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <>
                {t("home.description1")}
                <br />
                {t("home.description2")}
              </>
            </Typography.Text>

            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Typography.Title
                  style={{
                    fontSize: "clamp(12px, 2vw, 14px)",
                    fontWeight: 300,
                    marginBottom: "15px",
                    color: "#c4cfde",
                    textTransform: "uppercase",
                  }}
                >
                  {t("home.findMe")}
                </Typography.Title>
                <Row gutter={[16, 16]}>
                  {[GithubFilled, LinkedinFilled].map((Icon, index) => {
                    const urls = [
                      "https://github.com/HoussemRezgui999",
                      "https://www.linkedin.com/in/houssem-rezgui-396164277/",
                    ];

                    return (
                      <Col key={index}>
                        <a
                          href={urls[index]}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            style={{
                              background: "#212428",
                              boxShadow:
                                "3.1px 6.2px 6.2px hsl(0deg 0% 0% / 0.40)",
                              width: "clamp(50px, 10vw, 60px)",
                              height: "clamp(50px, 10vw, 60px)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              borderRadius: "20%",
                              transition: "all 0.3s ease",
                            }}
                            className="hover-effect"
                          >
                            <Icon
                              style={{
                                color: "#ffffff",
                                fontSize: "clamp(18px, 3vw, 24px)",
                              }}
                            />
                          </div>
                        </a>
                      </Col>
                    );
                  })}
                </Row>
              </Col>

              <Col xs={24} md={12}>
                <Typography.Title
                  style={{
                    fontSize: "clamp(12px, 2vw, 14px)",
                    fontWeight: 300,
                    marginBottom: "15px",
                    color: "#c4cfde",
                    textTransform: "uppercase",
                  }}
                >
                  {t("home.skills")}
                </Typography.Title>
                <Row gutter={[16, 16]}>
                  {[
                    IconReact,
                    IconLogoJavascript,
                    IconNodejs,
                    IconCss3,
                    IconHtml5,
                  ].map((Icon, index) => (
                    <Col
                      key={index}
                      // xs={8} sm={6} md={4}
                    >
                      <div
                        style={{
                          background: "#212428",
                          boxShadow: "3.1px 6.2px 6.2px hsl(0deg 0% 0% / 0.40)",
                          width: "clamp(50px, 10vw, 60px)",
                          height: "clamp(50px, 10vw, 60px)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "30%",
                        }}
                        title={
                          index === 0
                            ? t("home.skill1")
                            : index === 1
                            ? t("home.skill2")
                            : index === 2
                            ? t("home.skill3")
                            : index === 3
                            ? t("home.skill4")
                            : t("home.skill5")
                        }
                      >
                        <Icon
                          style={{
                            fontSize: "clamp(18px, 3vw, 24px)",
                            color:
                              index === 0
                                ? "#61dafb"
                                : index === 1
                                ? "#F0DB4F"
                                : index === 2
                                ? "#3c873a"
                                : index === 3
                                ? "#264de4"
                                : "#FF0000",
                          }}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={24} lg={10} xl={12}>
          <div
            style={{
              background: "linear-gradient(145deg, #1e2024, #23272b)",
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
              borderRadius: "10px",
              padding: "20px",
              maxWidth: "500px",
              margin: "0 auto",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={banner}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              alt="portfolio banner"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
