import React from 'react'
import { TextInput as RNtextInput, TextInputProps } from 'react-native'
import GlobalStyle from '../theme/GlobalStyle'

const TextInput: React.FC<TextInputProps> = ({ style, ...rest }) => {
    return (<RNtextInput style={[GlobalStyle.TextInput, style]} {...rest} />)
}

export default TextInput;