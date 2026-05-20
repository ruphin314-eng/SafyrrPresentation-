// app/contact/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoneyTransfert from "./MoneyTransfers";
import GetStarted from "@/components/GetStarted";

export default function PrepaidCardPage() {
  return (
    <>
      <Navbar/>
      <MoneyTransfert/>
      <GetStarted/>
      <Footer/>
    </>
  );
}