// app/contact/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoneyTransfert from "./MoneyTransfers";

export default function PrepaidCardPage() {
  return (
    <>
      <Navbar/>
      <MoneyTransfert/>
      <Footer/>
    </>
  );
}