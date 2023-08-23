import React from 'react';
import Logo from "../Logo";
import PrimaryButton from "../PrimaryButton";
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import {Image} from "next/dist/client/image-component";

const Header = () => {
    return (
        <section className='relative h-screen'>
            <div className='absolute -top-1'>
                <Image
                    className=" mr-2"
                    src={img1}
                    alt="img1"
                />
            </div>
            <div className='flex flex-row justify-between backdrop-blur z-10'>
                <Logo />
                <PrimaryButton text='Let’s Chat!'  onClick={()=>console.log('click')}/>
            </div>

            <div className='absolute bottom-0 right-0'>
                <Image
                    className=" mr-2"
                    src={img2}
                    alt="img2"
                />
            </div>

            <div className="flex flex-col justify-center items-center h-screen gap-1 ">
                <div className="text-main-yellow text-8xl font-bold rounded z-20">
                    World Class
                </div>
                <div className="font-light text-white text-8xl italic flex flex-row justify-center items-center z-10">
                    Viral Marketing
                    <div className='border px-3 py-6 rounded-full text-xl -rotate-20 uppercase z-10 mt-8' style={{backgroundColor: '#212121'}}>
                        for
                    </div>
                </div>
                <div className="bg-gray-800 text-main-yellow text-8xl font-bold z-20 ">
                    World Class Music
                </div>
            </div>
        </section>

    );
};

export default Header;