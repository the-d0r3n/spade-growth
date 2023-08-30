'use client'
import React, {useState} from 'react';
import {Image} from "next/dist/client/image-component";
import album from "../images/album.png";
import {Counter} from "./Counter";
const AlbumCard = () => {
    const [hover, setHover] = useState(false)
    const onMouseEnter = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }
    return (
        <div
            className='absolute bottom-72 flex flex-col justify-center items-center z-20'
        >
            {!hover ? <Image
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                src={album}
                alt="album"
            /> : <div
                    className="px-20 py-24 border bg-black-color flex flex-col justify-center items-center"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                <p className="text-xl uppercase" >Impressions Generated</p>
                <h1 className="text-6xl font-bold mb-4 flex flex-row justify-center text-main-yellow">
                    7M+
                </h1>

                <p className="text-xl uppercase" >CPM</p>
                <h1 className="text-4xl font-bold mb-4 flex flex-row justify-center text-main-yellow">
                    $1
                </h1>

                <p className="text-xl uppercase" >Overall TikTok Sound Creates</p>
                <h1 className="text-4xl font-bold mb-4 flex flex-row justify-center text-main-yellow">
                    500 → 200K
                </h1>
                </div>
            }
            <div className='mt-12 underline cursor-pointer'
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>
                Danny Towers, DJ Scheme, Ski Mask The Slump God - Florida Water (ft. Luh Tyler)
            </div>
        </div>
    );
};

export default AlbumCard;