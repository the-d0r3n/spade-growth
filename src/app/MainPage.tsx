'use client'
import React, {useEffect, useState} from 'react';
import RootLayout from "./layout";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Welcome from "../components/Welcome/Welcome";
import SoldItems from "../components/SoldItems/SoldItems";
import CircleDivider from "../components/CircleDivider";
import OurPartners from "../components/OurPartners/OurPartners";
import OurProduct from "../components/OurProduct/OurProduct";
import AlbumCard from "../components/AlbumCard";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import {setTimeout} from "timers";
import Loading from "../components/Loading";

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <RootLayout>
            <Loading isLoading={isLoading} />
            <Navbar />
            <div className="mx-auto">
                <Header />
                <div className='mt-16'>
                    <Banner />
                </div>

                <Welcome />
                <div className='relative flex flex-row z-10'>
                    <div className='w-screen'>
                        <div className='absolute w-full  ' style={{transform: 'rotate(-3deg)', left: '0', right: '0'}} >
                            <Banner withBorder reverse />
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
    );
};

export default MainPage;