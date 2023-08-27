import React from 'react';
import {Image} from "next/dist/client/image-component";
import img3 from "../../images/img3.png";
import img2 from "../../images/img2.png";

const Welcome = () => {
    return (
        <div className="relative my-14 flex flex-row justify-between" style={{height: '50vh'}}>
            <div className="w-8/12 flex flex-col justify-start items-start gap-4 uppercase">

                <div className="font-light text-white text-5xl italic flex flex-col justify-items-stretch items-start z-10 gap-8">
                    <div className="flex flex-row  justify-items-stretch  items-start gap-4 whitespace-nowrap">
                        <p>Welcome to</p>
                        <div className='border rounded-full text-4xl -rotate-3 uppercase z-10  px-6' style={{backgroundColor: '#212121'}}>
                            SPADE GROWTH
                        </div>
                    </div>

                    <p className='leading-loose'> An influencer marketing agency Specialising in viral music campaigns</p>


                </div>
                <div className='absolute bottom-25 right-0'>
                    <Image
                        src={img3}
                        alt="img3"
                    />
                </div>
            </div>


        </div>
    );
};

export default Welcome;