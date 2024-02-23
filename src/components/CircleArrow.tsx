'use client'
import React from 'react';
import {Image} from "next/dist/client/image-component";
import circle from "../images/circle.svg";
import {motion, useMotionValue, useTransform, useAnimation, animate} from "framer-motion";
const CircleArrow = () => {
    const controls = useAnimation();
    const spinTransition = {
        loop: Infinity,
        duration: 1,
        ease: "linear"
    }
    return (
        <div className=" relative">
            <div className='spiningSvg'>
                <Image
                    src={circle}
                    alt="circle"
                />
            </div>
            <div className="absolute top-7 left-12">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1378 1.93018V29.1713" stroke="white" strokeWidth="2"/>
                    <path d="M0.834534 15.3827L15.9841 30.5323L31.1337 15.3827" stroke="white" strokeWidth="2"/>
                </svg>
            </div>


        </div>
    );
};

export default CircleArrow;