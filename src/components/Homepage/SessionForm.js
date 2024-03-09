import React, { useState } from "react";
import "./SessionForm.css";

function SessionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    try {
      const response = await fetch("YOUR_WEB_APP_URL", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setIsSubmitting(false);
  };
  return (
    <>
      <div className="container-form">
        <div className="container-left">
          <p className="grey">We Care About You</p>
          <h1>Welcome to Careerkick Platform</h1>
          <div>
            <p>India's premier online consulting platform.</p>
            <p>
              As the first and largest trusted source, we offer comprehensive
              insights into educational institutions and universities across the
              country.
            </p>
          </div>
          <div>
            <h2>
              <i className="bi bi-shield-check blue"></i> Best Security Services
            </h2>
            <p>
              Discussion on the measures taken to ensure user privacy. Security
              Protocols for sensitive information.
            </p>
          </div>
          <div>
            <h2>
              <i className="bi bi-cloud-check blue"></i> Online info Services
            </h2>
            <p>
              "India's leading IIT-JEE Counselling Services Provider - Your
              Pathway to success starts with us."
            </p>
          </div>
          <button className="form-btn">
            Learn More <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div className="container-right">
          <form onSubmit={handleSubmit}>
            <p className="title">Name:</p>
            <input
              placeholder="First Name"
              className="value-area"
              type="text"
              name="firstName"
              required
            />
            <p className="title">Email ID:</p>
            <input
              placeholder="Email ID"
              className="value-area"
              type="text"
              name="emailid"
              required
            />
            <p className="title">Mobile Number:</p>
            <input
              placeholder="Mobile Number"
              className="value-area"
              type="tel"
              name="mobile"
              required
            />
            <p className="title">Your Query:</p>
            <textarea
              placeholder="Your Query"
              className="text-area"
              type="text"
              name="query"
              required
            />
            {/* Add similar inputs for other form fields */}
            <input disabled={isSubmitting} type="submit" className="form-btn" />
            {isSubmitting && (
              <div className="spinner-grow text-success ml" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default SessionForm;
