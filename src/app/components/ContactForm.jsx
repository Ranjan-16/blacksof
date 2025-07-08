import React from "react";
import { InputField } from "./common/InputField";
import { TextArea } from "./common/TextArea";

const ContactForm = () => {
  return (
    <form className="w-full grid gap-4 xl:gap-6 2xl:gap-9">
      <InputField id="name" name="name" placeholder="Full name" />
      <InputField id="email" name="email" type="email" placeholder="Email" />
      <InputField id="company" name="company" placeholder="Company" />
      <TextArea id="message" name="message" placeholder="Message" />

      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          className="flex justify-center gap-1 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:bg-white focus:bg-white text-white border border-white text-sm lg:text-base px-8 md:px-12 py-3"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
