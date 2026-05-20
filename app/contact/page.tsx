// app/contact/page.tsx
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactSection from "./ContactSection";
import GetStarted from "@/components/GetStarted";

export default function ContactPage() {
  return (
    <>
      <Navbar/>
      <ContactSection/>
      <GetStarted/>
      <Footer/>
    </>
  );
}