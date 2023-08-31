import React from 'react';
import Banner from "../Banner/Banner";
import {Image} from "next/dist/client/image-component";
import star from "../../images/star.svg";
import flower from "../../images/flower.svg";

const OurProduct = () => {
    return (
        <div className='relative' style={{height: '600px'}}>
            <div className='relative flex flex-row z-10'>
                <div className='absolute left-56 ' style={{top: '-23vh'}}>
                    <Image
                        src={star}
                        alt="star"
                    />
                </div>

                <div className='w-screen'>
                    <div className='absolute w-full rotate-10 z-40'>
                        <Banner withBorder />
                    </div>
                </div>
                <div className='absolute right-56' style={{top: '16vh'}}>
                    <Image
                        src={flower}
                        alt="flower"
                    />
                </div>


            </div>
        </div>
    );
};

export default OurProduct;