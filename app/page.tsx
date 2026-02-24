import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesSection from "@/components/ServicesSection";
import WhySafyrr from "@/components/WhySafyrr";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <ServicesSection/>
      <WhySafyrr/>
      <GetStarted />
      <Footer />
    </>
  );
}