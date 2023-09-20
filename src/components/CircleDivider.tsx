'use client'
import React from 'react';
import CircleArrow from "./CircleArrow";
import useMediaQuery from "../hooks/useMediaQuery";

const CircleDivider = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <div>
            {!isMobile && <div className="absolute" style={{bottom: '-85px', left: '74px'}}>
                <CircleArrow/>
            </div>}
            {isMobile && <div className="absolute" style={{bottom: '-85px', left: '5px'}}>
                <CircleArrow/>
            </div>}
        </div>
    );
};

export default CircleDivider;