'use client'
import Header from "../components/Header/Header";
import SoldItems from "../components/SoldItems/SoldItems";
import Welcome from "../components/Welcome/Welcome";
import OurPartners from "../components/OurPartners/OurPartners";
import OurProduct from "../components/OurProduct/OurProduct";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import RootLayout from "./layout";
import React from "react";

export default function Home() {
  return (
      <RootLayout>
          <div className="container mx-auto px-4">
              <Header />
              <Welcome />
              <SoldItems />
              <OurPartners />
              <OurProduct />
              <TalkToUs />
          </div>
      </RootLayout>
  )
}
