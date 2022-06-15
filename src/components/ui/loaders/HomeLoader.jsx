import React from 'react';
import Lottie from 'react-lottie';
import * as loadingAnimation from '../../../assets/animations/loadingAnimation.json';
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export const HomeLoader = () => {
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    )
}
