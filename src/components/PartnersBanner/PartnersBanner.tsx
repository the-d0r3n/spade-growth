'use client'
import React from 'react';
import atlantic from '../../images/logos/atlantic.png'
import def_jam from '../../images/logos/def_jam.png'
import empire  from '../../images/logos/empire.png'
import everybody from '../../images/logos/everybody.png'
import interscope from '../../images/logos/interscope.png'
import universal from '../../images/logos/universal.png'
import warner from '../../images/logos/warner.png'
import {Image} from "next/dist/client/image-component";


const partners = [
    <Image
        priority
        src={atlantic}
        alt="atlantic"
        width={400}
    />,

    <Image
        priority
        src={def_jam}
        alt="def_jam"
        width={400}

    />,

    <Image
        priority
        src={empire}
        alt="empire"
        width={400}
    />,

    <Image
        priority
        src={everybody}
        alt="everybody"
        width={400}
    />,

    <Image
        priority
        src={interscope}
        alt="interscope"
        width={300}
    />,

    <Image
        priority
        src={universal}
        alt="universal"
        width={1000}
    />,

    <Image
        priority
        src={warner}
        alt="warner"
        width={1000}
    />,




];

const PartnersBanner = () => {
    return (
        <div className='my-24' style={{height: "5vh"}}>
            <div className="flex flex-row justify-items-stretch items-stretch grow-1 overflow-hidden">
                <div
                    id="partners"
                    className='flex flex-row items-center justify-between justify-items-stretch items-stretch grow-1 '
                >
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="partner-items flex flex-row items-center justify-items-stretch grow-1  "
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnersBanner;