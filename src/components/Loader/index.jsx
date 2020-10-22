import React from'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/delivery-guy-waiting.json';

export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRatio:'xmidYMid slice'
        }
    };

    return <Lottie options={defaultOptions} />;
};