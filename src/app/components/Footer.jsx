import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const linkClass =
    "xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100";

  const sectionClass = "grid sm:gap-5 gap-3 text-black list-none";

  const footerSections = [
    {
      title: "Applications",
      links: [
        { href: "/applications/apparel", label: "Apparel" },
        { href: "/applications/automotive", label: "Automotive" },
        { href: "/applications/filtration", label: "Filtration" },
        {
          href: "/applications/customised-nonwoven",
          label: "Customised Nonwoven",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/who-we-are", label: "Who We Are" },
        { href: "/global-competency", label: "Global Compentency" },
        { href: "/innovation", label: "Innovation" },
        { href: "/esg-impact", label: "ESG Impact" },
      ],
    },
    {
      title: "More",
      links: [
        { href: "/contact-us", label: "Contact Us" },
        { href: "/careers", label: "Careers" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        {
          href: "https://www.linkedin.com/company/supreme-group-company/",
          label: "LinkedIn",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="text-black bg-[url('/footer.dbe7db48d54962232591.jpg')] bg-no-repeat bg-cover bg-right-bottom pt-10 pb-10 border-t border-opacity-10 border-gray">
      <div className=" max-w-screen-lg w-container mx-auto px-3 pt-10 pb-10">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Supreme logo"
              title="logo"
              height={40}
              width={145}
              className="h-full !cursor-pointer"
            />
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 2xl:mt-10 mt-8">
            {footerSections.map((section, index) => (
              <ul className={sectionClass} key={index}>
                <li
                  className={`mb-2 ${
                    section.title === "Company" ? "font-bold" : "font-semibold"
                  } uppercase text-opacity-90`}
                >
                  {section.title}
                </li>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={linkClass}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-3 px-3">
            <h6 className="text-sm text-black whitespace-nowrap">
              ©2024. All Rights Reserved.
            </h6>
            <h6 className="text-sm text-black whitespace-nowrap hidden md:block">
              Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
