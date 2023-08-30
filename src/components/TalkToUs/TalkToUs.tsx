'use client'
import React, {useState} from 'react';
import {Image} from "next/dist/client/image-component";
import talkToUs from "../../images/talkToUs.png";

const TalkToUs = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Message:', message);
        // Clear form fields after submission
        setEmail('');
        setMessage('');
    };
    return (
        <section className="relative" style={{height: '80vh'}}>
            <div className="absolute inset-0">
                <Image
                    src={talkToUs}
                    alt="talkToUs"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

            </div>
            <div className="flex h-full relative z-10" >

                <div className="mt-8 flex items-start justify-center w-6/12">
                    <h1 className="text-8xl font-bold mb-4 flex flex-row justify-center text-main-yellow">
                        Talk to us
                    </h1>
                </div>
                <div className=" w-6/12 flex flex-col items-stretch justify-center">
                    <div className="text-white ">
                        <form onSubmit={handleSubmit} className="w-6/12 mx-auto">
                            <div className="mb-12">
                                <label htmlFor="email" className="block text-2xl mb-1">Your e-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e?.target?.value)}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 bg-trsprnt"
                                    required
                                />
                            </div>
                            <div className="mb-10">
                                <label htmlFor="message" className="block text-2xl mb-1">How can we help you?</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 bg-trsprnt py-8"
                                    required
                                />
                            </div>
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="px-4 py-2 border text-xl uppercase text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='absolute bottom-0 uppercase mb-4 italic opacity-20' style={{right: '35%'}}>Copyright © 2023 Spade growth. All rights reserved.</div>
            </div>

        </section>
    );
};

export default TalkToUs;