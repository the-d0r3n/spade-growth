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
                    <div className='absolute w-full rotate-10 z-20'>

                            <Banner withBorder />


                        <svg style={{zIndex: -4}} className='absolute -top-20 left-0 right-0 m-auto ' width="734" height="236" viewBox="0 0 734 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M732.161 27.2089C733.391 32.1495 732.138 37.6413 728.51 43.6096C724.881 49.5792 718.904 55.9793 710.78 62.6968C694.533 76.1301 669.793 90.7592 638.398 105.695C575.616 135.562 486.316 166.609 385.381 191.748C284.447 216.887 191.016 231.352 121.559 234.421C86.8267 235.956 58.1155 234.639 37.4664 230.395C27.1405 228.273 18.8593 225.424 12.8547 221.854C6.85146 218.284 3.16841 214.022 1.93787 209.081C0.70733 204.141 1.96099 198.649 5.58872 192.681C9.21726 186.711 15.1949 180.311 23.3191 173.593C39.5655 160.16 64.3052 145.531 95.7002 130.596C158.483 100.728 247.783 69.6815 348.717 44.5423C449.652 19.4031 543.082 4.93834 612.539 1.86941C647.272 0.33475 675.983 1.65113 696.632 5.8951C706.958 8.01735 715.239 10.8661 721.244 14.4364C727.247 18.0059 730.93 22.2682 732.161 27.2089Z" stroke="#FFFF00"/>
                        </svg>


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