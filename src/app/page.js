import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Header } from "./components/header";
import HeroVideoSection from "./components/HeroVideoSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroVideoSection />
      <ContactSection />
      <Footer />
    </>
  );
}
