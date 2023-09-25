import React, {useEffect, useState} from 'react';
import {setTimeout} from "timers";

const Loading = ({isLoading}: {isLoading: boolean}) => {
    const [showSpinner, setShowSpinner] = useState(false);
    const visibility = isLoading ? 'visible' : 'hidden'
    useEffect(() => {
        setTimeout(() => {
            setShowSpinner(true);
        }, 200);
    }, []);
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black-color z-50 loading"
             style={{visibility: visibility}} >
            {showSpinner && <div className="loader"></div>}
        </div>
    );
};

export default Loading;