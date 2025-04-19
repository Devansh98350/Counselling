import React, { useState, useEffect } from "react";
import Jodhpur from "../../../../../../assests/components/IIT/banner/jodhpur.png";
import Breadcrumbs from "../../../../../Breadcrumb";
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
          backgroundImage: `url(${Jodhpur})`,
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
              src="data:image/png;base64,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"
              alt="IIT Jodhpur Logo"
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
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                IIT Jodhpur: Admission 2025, Cutoff, Courses,
              </h3>
              <h3
                style={{
                  fontSize: "2rem",
                  margin: "0",
                  padding: "0",
                  color: "white",
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
                Rajasthan | Autonomous University | Estd 2008
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
