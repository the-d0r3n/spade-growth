'use client'
import React from 'react';
import PartnersBanner from "../PartnersBanner/PartnersBanner";


const OurPartners = () => {

    return (
        <div className='flex flex-col w-max-screen mt-36' style={{height: '50vh'}}>
            <div className='flex flex-row justify-center relative'>
                <h2 className="text-8xl font-semibold mb-4 text-main-yellow">Our Partners</h2>
                <div className='absolute right-48 mr-8 mt-12'>
                    <svg width="107" height="128" viewBox="0 0 107 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.8735 112.768C86.1223 94.3909 94.0895 28.6241 58.5982 2.89398" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M44.5335 91.9463C42.2258 105.405 34.7453 113.254 34.7453 113.254C34.7453 113.254 47.5016 114.603 57.2452 119.592" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

            </div>
            <PartnersBanner />
        </div>
    );
};

export default OurPartners;