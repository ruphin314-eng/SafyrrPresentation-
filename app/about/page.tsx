// app/about/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import AboutPage from "./AboutPage";
import Footer from "@/components/Footer";
import Valeur from "./Valeur";

export default function About() {
  return (
    <>
     <Navbar/>
     <AboutPage/>
     <Valeur/>
     <Footer/>
    </>
  );
}