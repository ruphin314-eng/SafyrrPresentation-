"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscriptions from "./Subscriptions";
import GetStarted from "@/components/GetStarted";

export default function PrepaidCardPage() {
  return (
    <>
      <Navbar/>
      <Subscriptions/>
      <GetStarted/>
      <Footer/>
    </>
  );
}