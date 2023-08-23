import React from 'react';
import logo from '../images/logo.svg'
import {Image} from "next/dist/client/image-component";
const Logo = () => {
    return (
        <Image
            className=" ml-3"
            src={logo}
            alt="Logo"
        />
    );
};

export default Logo;