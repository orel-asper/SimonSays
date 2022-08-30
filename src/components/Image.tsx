import React, { useState } from 'react'
import FastImage, { FastImageProps } from 'react-native-fast-image';
import GetLottie from './GetLottie';


const Image: React.FC<FastImageProps | any> = ({ ...rest }) => {
    // loading image till it is loaded
    const [loaded, setLoaded] = useState(false)
    const onLoad = () => {
        setLoaded(true)
    }
    // if image is loaded, render it
    return (
        <>
            <FastImage
                source={{
                    uri: rest.source,
                    priority: FastImage.priority.high,
                    cache: FastImage.cacheControl.immutable
                }}
                style={[rest.style, { display: (loaded ? 'flex' : 'none') }]}
                {...rest} onLoad={onLoad} />
            <GetLottie source={'imageloader'} style={[rest.style, { display: (loaded ? 'none' : 'flex') }]} autoPlay loop />
        </>
    )
}

export default Image
