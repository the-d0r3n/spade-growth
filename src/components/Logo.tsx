import React from 'react';
import logo from '../images/logo.png'
import {Image} from "next/dist/client/image-component";
const Logo = () => {
    return (
        <Image
            className=" ml-3"
            src={logo}
            alt="Logo"
            width={84}
        />
    );
};

export default Logo;