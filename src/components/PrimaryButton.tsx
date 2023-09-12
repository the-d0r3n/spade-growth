import React from 'react';
type Props = {
    text: string;
    onClick: ()=>void
}
const PrimaryButton = ({ text, onClick }: Props) => {
    const buttonStyle = {
        fontFamily: 'Syncopate, sans-serif'
    };
    return (
        <button
            style={buttonStyle}
            className="mt-1 border border-white font-bold bg-black uppercase text-black py-2 px-4 cursor-pointer hover:bg-main-yellow hover:text-dark-bg transition duration-300"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;