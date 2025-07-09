import {
  Header,
  Footer,
  HeroVideoSection,
  ContactSection,
  AutomotiveSection,
} from "@/components";
import MotionTabs from "@/components/Tabs";

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
