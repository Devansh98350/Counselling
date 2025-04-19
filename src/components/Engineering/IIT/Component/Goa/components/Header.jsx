import React, { useState, useEffect } from "react";
import Goa from "../../../../../../assests/components/IIT/banner/goa.jpeg";
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
          backgroundImage: `url(${Goa})`,
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
                link: { color: "#FFB30B" },
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
              src="data:image/jpeg;base64,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"
              alt="IIT Goa Logo"
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
                IIT Goa: Admission 2024, Cutoff, Courses,
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
                Goa | Autonomous University | Estd 2016
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
              4.1 ★
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
