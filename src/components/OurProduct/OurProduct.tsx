'use client'
import React from 'react';
import Banner from "../Banner/Banner";
import {Image} from "next/dist/client/image-component";
import star from "../../images/star.svg";
import flower from "../../images/flower.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const OurProduct = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const starClass = isMobile ? 'absolute left-4 bottom-24' :'absolute left-56 '
    return (
        <div className='relative' style={{height: '600px'}}>
            <div className='relative flex flex-row z-10'>
                <div className={starClass} style={{top: isMobile ? "" : '-23vh'}}>
                    <Image
                        src={star}
                        alt="star"
                    />
                </div>

                <div className='w-screen'>
                    <div className='absolute w-full rotate-10 z-20' >

                        {!isMobile && <Banner withBorder/>}
                        {!isMobile && <svg style={{zIndex: -4}} className='absolute -top-20 left-0 right-0 m-auto ' width="734"
                                height="236" viewBox="0 0 734 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M732.161 27.2089C733.391 32.1495 732.138 37.6413 728.51 43.6096C724.881 49.5792 718.904 55.9793 710.78 62.6968C694.533 76.1301 669.793 90.7592 638.398 105.695C575.616 135.562 486.316 166.609 385.381 191.748C284.447 216.887 191.016 231.352 121.559 234.421C86.8267 235.956 58.1155 234.639 37.4664 230.395C27.1405 228.273 18.8593 225.424 12.8547 221.854C6.85146 218.284 3.16841 214.022 1.93787 209.081C0.70733 204.141 1.96099 198.649 5.58872 192.681C9.21726 186.711 15.1949 180.311 23.3191 173.593C39.5655 160.16 64.3052 145.531 95.7002 130.596C158.483 100.728 247.783 69.6815 348.717 44.5423C449.652 19.4031 543.082 4.93834 612.539 1.86941C647.272 0.33475 675.983 1.65113 696.632 5.8951C706.958 8.01735 715.239 10.8661 721.244 14.4364C727.247 18.0059 730.93 22.2682 732.161 27.2089Z"
                                stroke="#FFFF00"/>
                            </svg>
                        }
                        {isMobile && <svg width='100%'  viewBox="0 0 375 136" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M396.583 15.6661C397.271 18.4301 396.577 21.5256 394.511 24.9252C392.443 28.326 389.029 31.9849 384.372 35.8359C375.059 43.5361 360.866 51.9307 342.839 60.5068C306.791 77.6556 255.509 95.4856 197.539 109.924C139.569 124.362 85.9145 132.668 46.0346 134.43C26.0904 135.311 9.61801 134.555 -2.21846 132.122C-8.13797 130.905 -12.8693 129.275 -16.2901 127.241C-19.7096 125.208 -21.7749 122.8 -22.4633 120.036C-23.1517 117.272 -22.4572 114.176 -20.3908 110.777C-18.3237 107.376 -14.9096 103.717 -10.2523 99.8659C-0.939565 92.1656 13.2536 83.7711 31.2812 75.1949C67.3288 58.0462 118.611 40.2162 176.581 25.7779C234.551 11.3397 288.205 3.03369 328.085 1.2716C348.029 0.390378 364.502 1.1472 376.338 3.57992C382.258 4.79654 386.989 6.42673 390.41 8.46075C393.829 10.494 395.895 12.9021 396.583 15.6661Z"
                                stroke="#FFFF00"/>
                        </svg>}


                    </div>
                </div>
                <div className='absolute right-56' style={{top: '16vh'}}>
                    {!isMobile && <Image
                        src={flower}
                        alt="flower"
                    />}
                </div>
                {isMobile && <div className='absolute w-full rotate-10 z-20' style={{top: '-120px'}}>
                    <Banner withBorder/>
                </div>}

            </div>
        </div>
    );
};

export default OurProduct;