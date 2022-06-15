import React from 'react'
import Lottie from 'react-lottie';
import * as detailAnimation from '../../../assets/animations/detailAnimation.json';
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: detailAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export const CountryDetailLoader = () => {
    return (

        <div
            className="w-11/12 h-screen flex justify-center items-center"
        >
            <Lottie
                className="w-4/5 h-auto"
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    )
}
