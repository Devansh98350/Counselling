import React, { useState } from "react";
import "./Newsletter.css";

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    domain: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmissionStatus("waiting");
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzYmeUUehOMv_LevyTNRLrEcbW_KunQqtqHS5KPbw7UGT41ODhEYCebFu7sHY4xk8MX/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Sending form data as JSON
          redirect: "follow",
        }
      );

      if (response.ok) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setFormData({
          email: "",
          mobile: "",
          domain: "",
        });
        setSubmissionStatus("success");
      } else {
        console.error("Error!", response.statusText);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error!", error.message);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmissionStatus("error");
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="newsletter-container">
      <h1>Subscribe To Our Newsletter</h1>
      <p>Get College Notifications, Exam Notifications, and News Updates</p>
      <div className="newsform">
        <form
          method="post"
          onSubmit={handleSubmit}
          id="newsletter"
          name="newsletter"
        >
          <label className="label1">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email Id*"
              onChange={handleChange}
              value={formData.email}
              className="newsform-input"
              required
            />
          </label>
          <label className="label2">
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Mobile No.*"
              onChange={handleChange}
              value={formData.mobile}
              className="newsform-input"
              required
            />
          </label>
          <label className="label3">
            <select
              id="domain"
              name="domain"
              value={formData.domain}
              className="newsform-input"
              onChange={handleChange}
              required
            >
              <option value="">Choose your domain</option>
              <option value="Engineering">Engineering</option>
              <option value="Medical">Medical</option>
              <option value="MBA">MBA</option>
              <option value="Law">Law</option>
              <option value="Design">Design</option>
              <option value="Aviation">Aviation</option>
              <option value="Hospitality & Travel">Hospitality & Travel</option>
              <option value="Mass Communication">Mass Communication</option>
              <option value="Architecture & Planning">
                Architecture & Planning
              </option>
            </select>
          </label>

          <button
            type="submit"
            className="newsform-input news-btn"
            style={{
              backgroundColor: isHovered ? "green" : "orange",
              color: "white",
              fontSize: "20px",
              fontWeight: isHovered ? "bold" : "normal",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              borderRadius: "8px",
              marginTop: "20px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disabled={isButtonDisabled}
          >
            Submit Now
          </button>
          {submissionStatus === "waiting" && (
            <div
              style={{ marginTop: "10px", textAlign: "center", color: "blue" }}
            >
              Please wait! We are submitting your details...
            </div>
          )}

          {submissionStatus === "success" && (
            <div
              style={{ marginTop: "10px", textAlign: "center", color: "blue" }}
            >
              Thanks! We will contact you soon to resolve your query.
            </div>
          )}
          {submissionStatus === "error" && (
            <div
              style={{ marginTop: "10px", textAlign: "center", color: "red" }}
            >
              An error occurred. Please try again later.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
