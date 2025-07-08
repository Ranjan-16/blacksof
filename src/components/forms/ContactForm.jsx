"use client";

/**
 * ContactForm component for handling contact form submissions
 *
 * This component provides a complete contact form with validation
 * and submission handling.
 */

import React, { useState } from "react";
import { Input, TextArea, Button } from "../ui";

/**
 * ContactForm Component
 *
 * @param {Object} props - Component props
 * @param {function} [props.onSubmit] - Custom submit handler
 * @param {string} [props.className] - Additional CSS classes
 */
export function ContactForm({ onSubmit, className = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  /**
   * Handle input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /**
   * Validate form data
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission logic
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your API
      }

      // Reset form on successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full grid gap-4 xl:gap-6 2xl:gap-9 ${className}`}
    >
      <div>
        <Input
          id="name"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && (
          <span className="text-red-300 text-sm mt-1 block">{errors.name}</span>
        )}
      </div>

      <div>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <span className="text-red-300 text-sm mt-1 block">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <Input
          id="company"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextArea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && (
          <span className="text-red-300 text-sm mt-1 block">
            {errors.message}
          </span>
        )}
      </div>

      <div className="flex justify-center md:justify-start">
        <Button
          type="submit"
          variant="primary"
          size="md"
          loading={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
