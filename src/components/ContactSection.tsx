"use client";

import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmissionStatus("");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          setSubmissionStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setSubmissionStatus(data.message || "Something went wrong.");
        }
      } catch (error) {
        console.error(error);
        setSubmissionStatus("Something went wrong.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="bg-black py-16">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold">GET IN TOUCH</h2>
        <p className="mb-8 text-center text-gray-400">
          For Business Enquiries Only
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border bg-white px-4 py-3 text-black ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border bg-white px-4 py-3 text-black ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full border bg-white px-4 py-3 text-black ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none`}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full border bg-white px-4 py-3 text-black ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-gray-700 py-3 font-bold text-white transition-colors hover:bg-gray-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>
          {submissionStatus && (
            <p className="mt-4 text-center">{submissionStatus}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
