'use client'
import React from 'react';
import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
    const handleScrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
    return (
        <div className='sticky top-0 z-40 w-full  flex flex-row justify-between backdrop-blur z-10 p-2'>
            <Logo />
            <div className='pr-4'>
                <PrimaryButton text='Let’s Chat!'  onClick={handleScrollToBottom}/>
            </div>
        </div>
    );
};

export default Navbar;