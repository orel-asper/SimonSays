import React from 'react';
import { findLottieByName } from '../assets/lottie/findlottie';
import LottieView from 'lottie-react-native';

type lottieProps = {
    source: string,
    style?: object,
    loop?: boolean,
    autoPlay?: boolean,
    width?: number | string,
    height?: number | string,
}


const GetLottie: React.FC<lottieProps> = ({ source, style, loop, autoPlay, width, height }) => {
    const lottie = findLottieByName(source);
    if (!lottie) {
        return null;
    }
    return <LottieView source={lottie} style={[style, { width, height }]} loop={loop} autoPlay={autoPlay} />
}

export default GetLottie;