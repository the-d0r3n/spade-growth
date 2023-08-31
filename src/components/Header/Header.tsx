'use client'
import React from 'react';
import Logo from "../Logo";
import PrimaryButton from "../PrimaryButton";
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import {Image} from "next/dist/client/image-component";

const Header = () => {
    const handleScrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
    return (
        <section className='relative h-screen'>
            <div className='absolute -top-1'>
                <Image
                    className="mr-2"
                    src={img1}
                    alt="img1"
                    style={{height: '50vh', width: '42vw'}}
                />
            </div>
            <div className='flex flex-row justify-between backdrop-blur z-10 p-2'>
                <Logo />
                <div className='pr-4'>
                    <PrimaryButton text='Let’s Chat!'  onClick={handleScrollToBottom}/>
                </div>

            </div>

            <div className='absolute bottom-0 right-0 '>
                <Image
                    className=' object-fit'
                    src={img2}
                    alt="img2"
                    style={{height: '40vh', width: '40vw'}}
                />
            </div>

            <div className="flex flex-col justify-center items-center h-screen gap-1 ">
                <div className="text-main-yellow text-9xl font-bold rounded z-20 font-extrabold">
                    World Class
                </div>
                <div className="font-light text-white text-9xl italic flex flex-row justify-center items-center z-10 relative">
                    Viral Marketing
                    <div className='absolute border px-3 py-6 rounded-full text-xl -rotate-10 uppercase z-10 mt-8' style={{backgroundColor: '#212121', right: '-55px'}}>
                        for
                    </div>
                </div>
                <div className="bg-gray-800 text-main-yellow text-9xl font-bold z-20 font-extrabold">
                    World Class Music
                </div>
            </div>
        </section>

    );
};

export default Header;