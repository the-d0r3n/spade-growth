'use client'
import React, {useState} from 'react';
import {Image} from "next/dist/client/image-component";
import album from "../images/album.png";
import ReactCardFlip from "react-card-flip";

const AlbumCard = () => {
    const [hover, setHover] = useState(false)
    const onMouseEnter = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }

    const redirectToSpotify = () => {
        const spotifyUrl = 'https://www.tiktok.com/music/Florida-Water-feat-Luh-Tyler-7202507652059006978?is_from_webapp=1&sender_device=pc';
        window.open(spotifyUrl, '_blank');
    };
    return (
        <div
            className='absolute left-0 right-0 bottom-60 m-auto flex flex-col justify-center items-center z-20'
        >
            <div  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
            >
                <ReactCardFlip isFlipped={hover} flipDirection="horizontal">
                    <Image
                        src={album}
                        alt="album"
                    />

                    <div
                        className="px-20 py-24 border bg-black-color flex flex-col justify-center items-center"

                        style={{maxWidth: '480px', maxHeight: "479px"}}
                    >
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
                </ReactCardFlip>
            </div>


            <div className='mt-12 underline cursor-pointer text-center'
                 style={{maxWidth: '490px'}}
                onClick={redirectToSpotify}>
                Danny Towers, DJ Scheme, Ski Mask The Slump God - Florida Water (ft. Luh Tyler)
            </div>
        </div>
    );
};

export default AlbumCard;