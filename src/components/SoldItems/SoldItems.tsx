'use client'
import React, {useRef} from 'react';
import img4 from "../../images/img4.png";
import {Image} from "next/dist/client/image-component";
import {Counter} from "../Counter";
import useIsElementOnScreen from "../useIsElementOnScreen";

const SoldItems = () => {
    const targetRef = useRef(null);
    const isOnScreen = useIsElementOnScreen(targetRef);
    return (
        <section className="relative" style={{height: '45vh'}}>
            <div className="absolute inset-0">
                <Image
                    src={img4}
                    alt="img4"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

            </div>
            <div className="flex items-center justify-center h-full relative z-10" >

                    <div className="flex items-center justify-center w-6/12">
                        <div className="text-white text-center">
                            <p className="text-xl uppercase" ref={targetRef}>Total Impressions Generated</p>
                            <h1 className="text-8xl font-bold mb-4 flex flex-row justify-center text-main-yellow">
                                {isOnScreen &&  <><Counter from={0} to={200} />M+</>}
                            </h1>

                        </div>
                    </div>
                    <div className="flex items-center justify-center w-6/12">
                        <div className="text-white text-center">
                            <p className="text-xl uppercase" ref={targetRef}>Our Influencer Roster</p>
                            <h1 className="text-8xl font-bold mb-4 flex flex-row justify-center text-main-yellow">
                                {isOnScreen && <><Counter from={0} to={700} />M</>}
                            </h1>

                        </div>
                    </div>
            </div>
        </section>

    );
};

export default SoldItems;