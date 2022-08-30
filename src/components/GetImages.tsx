import React from 'react';
import { Image } from 'react-native';
import { findImgByName } from '../assets/png/findimg';

type GetImagessProps = {
    id: string,
    width?: number | string,
    height?: number | string,
    style?: object,
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center',
}


const GetImages: React.FC<GetImagessProps> = ({ id, width, height, style, ...props }) => {
    const src = findImgByName(id);
    if (src === undefined) return <></>
    return <Image source={src} style={{ width, height, ...style }}  {...props} />
}

export default GetImages;