/**
 * ContactSection component for displaying contact information and form
 *
 * This component provides a complete contact section with company information
 * and a contact form for user inquiries.
 */

"use client";

import { ContactForm } from "../forms";

/**
 * Contact information data
 */
const contactInfo = {
  address: {
    line1: "110, 16th Road, Chembur,",
    line2: "Mumbai - 400071",
  },
  phone: {
    number: "+91 22 25208822",
    href: "tel:+912225208822",
  },
  email: {
    address: "info@supremegroup.co.in",
    href: "mailto:info@supremegroup.co.in",
  },
};

/**
 * ContactSection Component
 *
 * @param {Object} props - Component props
 * @param {string} [props.title] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {Object} [props.contactInfo] - Contact information object

 * @param {string} [props.className] - Additional CSS classes
 */
export function ContactSection({
  title = "Get in touch",
  subtitle = "For general enquiries",
  contactInfo: customContactInfo = contactInfo,
  className = "",
}) {
  /**
   * Handle contact form submission
   * @param {Object} formData - The form data submitted by user
   */
  const handleContactSubmit = async (formData) => {
    try {
      // Here you would typically send the data to your API
      console.log("Contact form submitted:", formData);

      // Example API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // if (!response.ok) throw new Error('Failed to submit form');

      // Show success message
      alert("Thank you for your message! We'll get back to you soon.");
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert(
        "Sorry, there was an error submitting your message. Please try again."
      );
    }
  };
  return (
    <div className={`bg-[#006CBC] sm:pt-[14%] pt-[20%] pb-[4%] ${className}`}>
      <div className="max-w-[1380px] mx-auto px-1.5 lg:w-10/12 relative -mt-[4rem] md:-mt-[6rem] lg:-mt-[8rem] xl:-mt-[10rem] 2xl:-mt-[12rem]">
        <div className="bg-[#006CBC] grid grid-cols-12 px-4 md:px-0 rounded-[10px] 2xl:grid-cols-11 py-8 md:py-10 lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 col-start-1 md:col-start-2 col-end-13 md:col-end-12 2xl:col-end-11 text-white mb-3">
            {/* Left Content - Contact Information */}
            <div>
              <span className="text-2xl lg:text-[28px] xlg:text-3xl 2xl:text-4xl font-semibold">
                {title}
              </span>
              <div className="h-[2px] w-12 bg-white my-4" />

              <span className="block font-normal text-base md:text-lg 2xl:text-2xl mt-4">
                {subtitle}
              </span>

              <ul className="list-none flex flex-col gap-5 pt-5">
                <li>
                  <span className="font-medium text-lg">Address :</span>
                  <span className="block font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
                    {customContactInfo.address.line1}
                    <br className="xl:hidden block" />
                    {customContactInfo.address.line2}
                  </span>
                </li>

                <li>
                  <span className="font-medium text-lg">Phone :</span>
                  <a
                    href={customContactInfo.phone.href}
                    className="block text-white text-opacity-90 hover:underline text-sm md:text-base 2xl:text-xl transition-all duration-200"
                  >
                    {customContactInfo.phone.number}
                  </a>
                </li>

                <li>
                  <span className="font-medium text-lg">Email :</span>
                  <a
                    href={customContactInfo.email.href}
                    className="block text-white text-opacity-90 hover:underline text-sm md:text-base 2xl:text-xl transition-all duration-200"
                  >
                    {customContactInfo.email.address}
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Content - Contact Form */}
            <ContactForm onSubmit={handleContactSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
