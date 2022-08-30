import React from 'react';
import { findSvgByName } from '../assets/svg/findsvg';

type GetSvgsProps = {
    id: string,
    width?: number | string,
    height?: number | string,
    style?: any,
    flip?: boolean,
    fill?: string,
    stroke?: string,
    colors?: string[],
}

const GetSvg: React.FC<GetSvgsProps> = ({ id, width, height, fill, stroke, style, flip, colors }) => {
    if (flip) style = { ...style, transform: [{ rotate: '180deg' }] }
    const SvgComponent = findSvgByName(id);
    if (SvgComponent) {
        return <SvgComponent width={width} height={height} fill={fill} stroke={stroke} style={style} colors={colors} />
    }
    return <></>
}

export default GetSvg;
