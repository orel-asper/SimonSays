import React from 'react'
import { View } from 'react-native'

type BoxProps = {
    style?: object,
    children?: React.ReactNode,
    onLayout?: (e: any) => void,
}

const Box: React.FC<BoxProps> = ({ ...rest }) => {
    return (<View {...rest} />)
}

export default Box
