import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Newsletter.css";

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      // Assuming `YOUR_GOOGLE_APPS_SCRIPT_URL` is the endpoint to handle form submission
      const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError("Failed to submit data. Please try again later.");
      }
    } catch (error) {
      setError("Failed to submit data. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="newsletter-container">
      <h1>Subscribe To Our News Letter</h1>
      <p>Get College Notifications, Exam Notifications and News Updates</p>
      <div className="newsform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label1">
            <input
              placeholder="Enter your email id"
              className="newsform-input"
              type="text"
              {...register("emailid", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </label>
          <label className="label2">
            <input
              placeholder="Enter your mobile no"
              className="newsform-input"
              type="text"
              {...register("mobileno", { required: true, maxLength: 10 })}
            />
          </label>
          <label className="label3">
            <select
              className="newsform-input"
              {...register("coursename", { required: true })}
            >
              <option disabled>Choose your course</option>
              <option value="JEE Mains">JEE Mains</option>
              <option value="JEE Advance">JEE Advance</option>
              <option value="NEET">NEET</option>
              <option value="NTSE">NTSE</option>
            </select>
          </label>
          <input
            disabled={isSubmitting}
            type="submit"
            className="newsform-input news-btn"
          />
          {isSubmitting && (
            <div className="spinner-grow text-success ml" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {errors.emailid && <p className="red">Email Id is required.</p>}
          {errors.mobileno && <p className="red">Mobile no is required.</p>}
          {errors.coursename && <p className="red">Course is required.</p>}
          {success && <p className="green">Submitted successfully!</p>}
          {error && <p className="red">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
