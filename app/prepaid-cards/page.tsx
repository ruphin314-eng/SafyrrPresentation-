// app/contact/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import PrepaidCards from "./PrepaidCards";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";

export default function PrepaidCardPage() {
  return (
    <>
      <Navbar/>
      <PrepaidCards/>
      <GetStarted/>
      <Footer/>
    </>
  );
}