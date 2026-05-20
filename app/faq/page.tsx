// app/blog/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import FAQBlogs from "./FaqBlogs";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";

export default function BlogPage() {
  return (
    <> 
      <Navbar/>
      <FAQBlogs/>
      <GetStarted/>
      <Footer/>
    </>
  );
}