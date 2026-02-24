// app/blog/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import FAQBlogs from "./FaqBlogs";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <> 
      <Navbar/>
      <FAQBlogs/>
      <Footer/>
    </>
  );
}