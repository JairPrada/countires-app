import React from 'react'
import Lottie from 'react-lottie';
import * as detailAnimation from '../../assets/animations/noFound.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: detailAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export const NoFoundPage = () => {
    return (
        <div
            className="max-w-full h-screen flex justify-center items-center flex-col"
        >
            <Lottie
                className="w-screen h-screen"
                options={defaultOptions}
                height={400}
                width={400}
            />
            <Link to="/">
                <button className="mr-2 mb-2 w-auto px-8 py-2 card bg-elements-lt dark:bg-elements-dk rounded-md shadow-lg overflow-hidden">
                    <FontAwesomeIcon icon={faHouse} className="pr-4" />
                    Go To Home
                </button>
            </Link>
        </div>
    )
}
