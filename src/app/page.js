/**
 * Home page component
 *
 * This is the main landing page that combines all the major sections
 * of the website including header, hero video, contact section, and footer.
 */

import AutomotiveSection from "@/components/sections/AutomotiveSection";
import {
  Header,
  Footer,
  HeroVideoSection,
  ContactSection,
} from "../components";

/**
 * Home Page Component
 *
 * @returns {JSX.Element} The complete home page
 */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideoSection />
        <ContactSection />
        <AutomotiveSection />
      </main>
      <Footer />
    </>
  );
}
