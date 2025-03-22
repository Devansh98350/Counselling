import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../../../../Breadcrumb";
import roorkee from "../../../../../../assests/components/IIT/banner/roorkee.webp";

function Header() {
  const [isCutoffDropdownOpen, setIsCutoffDropdownOpen] = useState(false);
  const [isPlacementDropdownOpen, setIsPlacementDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const scrollHeight = window.scrollY;
      const pageHeight = document.body.offsetHeight;
      const triggerHeight = pageHeight * 0.01;

      if (navbar) {
        if (scrollHeight > triggerHeight) {
          navbar.style.position = "fixed";
          navbar.style.top = "0";
          navbar.style.left = "0";
          navbar.style.zIndex = "100";
          navbar.style.width = "100%";
        } else {
          navbar.style.position = "relative";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        style={{
          background: "#1d2f52",
          color: "#fff",
          padding: "3rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundImage: `url(${roorkee})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "0",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              marginTop: "-3rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              color: "white",
            }}
          >
            <Breadcrumbs
              customStyles={{
                link: { color: "blue" },
                breadcrumbs: {
                  marginLeft: "0%",
                },
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "0rem",
              marginBottom: "-1rem",
            }}
          >
            <img
              src="https://iitr.ac.in/space2023/assets/iitr_logo.png"
              alt="IIT Delhi Logo"
              style={{
                height: "100px",
                marginRight: "20px",
              }}
            />
            <div
              style={{
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  margin: "0",
                  padding: "0",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                IIT Roorkee: Admission 2025, Cutoff, Courses,
              </h3>
              <h3
                style={{
                  fontSize: "2rem",
                  margin: "0",
                  padding: "0",
                  color: "black",
                }}
              >
                Fees, Placement, Ranking
              </h3>
              <div
                style={{
                  fontWeight: "bold",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                Uttarakhand | Autonomous University | Estd 1847
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                color: "#1d2f52",

                borderRadius: "5px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                height: "2rem",
                width: "4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              4.2 ★
            </div>
          </div>
        </div>
      </header>

      <style>
        {`
          .navbar a {
            position: relative;
          }

          .navbar a::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            width: 100%;
            background-color: #1d2f52;
            transform: scaleX(0);
            transition: transform 300ms ease;
          }

          .navbar a:hover::before {
            transform: scaleX(1);
          }

          @media (max-width: 600px) {
            .navbar {
              max-height: 50vh;
              overflow-y: visible;
              overflow-x: auto;
              -webkit-overflow-scrolling: touch !important;
              white-space: nowrap;
              background-color: white;
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .th3 {
              margin-left: auto !important;
            }
            .navbar a {
              flex-shrink: 0;
            }
          }
            html {
            scroll-behavior: smooth;
            scroll-padding-top: 60px;
            }
        `}
      </style>

      <div
        id="navbar"
        className="navbar"
        style={{
          display: "flex",
          background: "#e9ecef",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "0",
          width: "100%",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <a href="#about" style={linkStyle}>
          About
        </a>
        <a href="#courses" style={linkStyle}>
          Courses & Fees
        </a>
        <a href="#admission" style={linkStyle}>
          Admission
        </a>

        <div
          className="dropdown"
          style={{ position: "relative" }}
          onMouseEnter={() => setIsCutoffDropdownOpen(true)}
          onMouseLeave={() => setIsCutoffDropdownOpen(false)}
        >
          <button className="dropbtn" style={linkStyle}>
            Cutoff <i className="fa fa-caret-down"></i>
          </button>
          {isCutoffDropdownOpen && (
            <div
              className="dropdown-content"
              style={{
                position: "absolute",
                backgroundColor: "#f9f9f9",
                minWidth: "160px",
                zIndex: "100",
              }}
            >
              <a href="#gen" style={dropdownLinkStyle}>
                General
              </a>
              <a href="#obc" style={dropdownLinkStyle}>
                OBC
              </a>
            </div>
          )}
        </div>

        <div
          className="dropdown"
          style={{ position: "relative" }}
          onMouseEnter={() => setIsPlacementDropdownOpen(true)}
          onMouseLeave={() => setIsPlacementDropdownOpen(false)}
        >
          <button className="dropbtn" style={linkStyle}>
            Placement <i className="fa fa-caret-down"></i>
          </button>
          {isPlacementDropdownOpen && (
            <div
              className="dropdown-content"
              style={{
                position: "absolute",
                backgroundColor: "#f9f9f9",
                minWidth: "160px",
                zIndex: "100",
              }}
            >
              <a href="#2023" style={dropdownLinkStyle}>
                2023
              </a>
              <a href="#2024" style={dropdownLinkStyle}>
                2024
              </a>
            </div>
          )}
        </div>

        <a href="#ranking" style={linkStyle}>
          Ranking
        </a>
        <a href="#scholarship" style={linkStyle}>
          Scholarship
        </a>
        <a href="#campus" style={linkStyle}>
          Campus
        </a>
        <a href="#alumni-network" style={linkStyle}>
          Alumni
        </a>
        <a href="#faq" style={linkStyle}>
          FAQ
        </a>
      </div>
    </>
  );
}

// Common styles
const linkStyle = {
  fontSize: "16px",
  color: "#1d2f52",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
  backgroundColor: "inherit",
  fontFamily: "inherit",
  margin: "0",
  overflow: "hidden",
  border: "none",
};

// Dropdown specific styles
const dropdownLinkStyle = {
  float: "none",
  color: "black",
  padding: "12px 16px",
  textDecoration: "none",
  display: "block",
  textAlign: "left",
  border: "none",
};

export default Header;
