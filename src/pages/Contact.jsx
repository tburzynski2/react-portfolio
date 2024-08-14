import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (
      name === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      error = "Invalid email address";
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form submission logic here
      console.log("Form submitted successfully!");
    }
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
