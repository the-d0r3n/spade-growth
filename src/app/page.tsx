import Header from "../components/Header/Header";
import SoldItems from "../components/SoldItems/SoldItems";
import Banner from "../components/Banner/Banner";
import OurPartners from "../components/OurPartners/OurPartners";
import OurProduct from "../components/OurProduct/OurProduct";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import RootLayout from "./layout";
import React from "react";
import Welcome from "../components/Welcome/Welcome";
import AlbumCard from "../components/AlbumCard";
import Navbar from "../components/Navbar";
import CircleDivider from "../components/CircleDivider";

export default function Home() {
  return (
      <RootLayout>
          <Navbar />
          <div className="mx-auto">
              <Header />
              <div className='mt-16'>
                  <Banner />
              </div>

              <Welcome />
              <div className='relative  flex flex-row z-10'  >
                  <div className='w-screen'>
                      <div className='absolute w-full -rotate-3 ' >
                          <Banner withBorder  reverse />
                      </div>
                      <div className='absolute w-full rotate-3'>
                          <Banner withBorder  />
                      </div>
                  </div>
              </div>
                <div className='relative'>
                    <SoldItems />
                    <CircleDivider/>
                </div>
              <OurPartners />
              <div className='relative'>
                  <OurProduct />
                  <AlbumCard />
              </div>

              <TalkToUs />
          </div>
      </RootLayout>
  )
}
