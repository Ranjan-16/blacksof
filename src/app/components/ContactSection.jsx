import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="bg-[#006CBC] sm:pt-[14%] pt-[20%] pb-[4%]">
      <div className="max-w-[1380px] mx-auto px-1.5 lg:w-10/12 relative -mt-[4rem] md:-mt-[6rem] lg:-mt-[8rem] xl:-mt-[10rem] 2xl:-mt-[12rem]">
        <div className=" bg-[#006CBC] grid grid-cols-12 px-4  md:px-0 rounded-[10px] 2xl:grid-cols-11 py-8 md:py-10 lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 col-start-1 md:col-start-2 col-end-13 md:col-end-12 2xl:col-end-11 text-white mb-3">
            {/* Left Content */}
            <div>
              <span className="text-2xl lg:text-[28px] xlg:text-3xl 2xl:text-4xl font-semibold">
                Get in touch
              </span>
              <div className="h-[2px] w-12 bg-white my-4" />

              <span className="block font-normal text-base md:text-lg 2xl:text-2xl mt-4">
                For general enquiries
              </span>

              <ul className="list-none flex flex-col gap-5 pt-5">
                <li>
                  <span className="font-medium text-lg">Address :</span>
                  <span className="block font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
                    110, 16th Road, Chembur,
                    <br className="xl:hidden block" />
                    Mumbai - 400071
                  </span>
                </li>
                <li>
                  <span className="font-medium text-lg">Phone :</span>
                  <a
                    href="tel:+912225208822"
                    className="block text-white text-opacity-90 hover:underline text-sm md:text-base 2xl:text-xl"
                  >
                    +91 22 25208822
                  </a>
                </li>
                <li>
                  <span className="font-medium text-lg">Email :</span>
                  <a
                    href="mailto:info@supremegroup.co.in"
                    className="block text-white text-opacity-90 hover:underline text-sm md:text-base 2xl:text-xl"
                  >
                    info@supremegroup.co.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Single Shared Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
