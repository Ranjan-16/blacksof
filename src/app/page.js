import {
  Header,
  Footer,
  HeroVideoSection,
  ContactSection,
  AutomotiveSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideoSection />
        <AutomotiveSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
