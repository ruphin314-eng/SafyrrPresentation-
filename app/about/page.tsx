// app/about/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import AboutPage from "./AboutPage";
import Footer from "@/components/Footer";
import Valeur from "./Valeur";
import GetStarted from "@/components/GetStarted";

export default function About() {
  return (
    <>
     <Navbar/>
     <AboutPage/>
     <Valeur/>
     <GetStarted/>
     <Footer/>
    </>
  );
}