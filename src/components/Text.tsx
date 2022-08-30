import React from 'react'
import { Text as RNtext, TextProps } from 'react-native'
import GlobalStyle from '../theme/GlobalStyle'

let maxLengthName = 30

type AdditionalProps = {
    style?: any;
    useAdjustFontSizeToFit?: string;
}

const Text: React.FC<TextProps & AdditionalProps> = ({ style, useAdjustFontSizeToFit, ...rest }) => {
    return (<RNtext allowFontScaling={false} style={[GlobalStyle.text, style]} {...rest}
        adjustsFontSizeToFit={(useAdjustFontSizeToFit && useAdjustFontSizeToFit.length > maxLengthName) ? true : false}
    />)
}

export default Text
