// app/services/page.tsx
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceSafyrr from "./ServiceSafyrr";
import GetStarted from "@/components/GetStarted";

export default function ServicesPage() {
  return (
    <>
      <Navbar/>
      <ServiceSafyrr/>
      <GetStarted/>
      <Footer/>
    </>
  );
}