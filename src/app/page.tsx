import Header from "../components/Header/Header";
import SoldItems from "../components/SoldItems/SoldItems";
import Banner from "../components/Banner/Banner";
import OurPartners from "../components/OurPartners/OurPartners";
import OurProduct from "../components/OurProduct/OurProduct";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import RootLayout from "./layout";
import React from "react";
import Welcome from "../components/Welcome/Welcome";
import CircleArrow from "../components/CircleArrow";
import AlbumCard from "../components/AlbumCard";

export default function Home() {
  return (
      <RootLayout>
          <div className="mx-auto">
              <Header />
              <div className='mt-16'>
                  <Banner />
              </div>

              <Welcome />
              <div className='relative  flex flex-row z-10'  >
                  <div className='w-screen'>
                      <div className='absolute w-full -rotate-3 ' >
                          <Banner withBorder />
                      </div>
                      <div className='absolute w-full rotate-3'>
                          <Banner withBorder />
                      </div>
                  </div>
              </div>
                <div className='relative'>
                    <SoldItems />
                    <div className="absolute" style={{bottom: '-55px', left: '74px'}}>
                        <CircleArrow />
                    </div>
                </div>
              <OurPartners />
              <div className='relative flex flex-col justify-center items-center'>
                  <OurProduct />
                  <AlbumCard />
              </div>

              <TalkToUs />
          </div>
      </RootLayout>
  )
}
