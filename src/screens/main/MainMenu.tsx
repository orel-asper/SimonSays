import React from 'react'
import Box from '../../components/Box'
import Text from '../../components/Text'
import GlobalStyle from '../../theme/GlobalStyle'
import AwesomeButton from '../../AwesomeButton/src/AwesomeButton';
import { letsplaybutton } from './main_config';
import TextInput from '../../components/TextInput';

type MainMenuProps = {
    navigation: any
}

const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
    return (
        <Box style={GlobalStyle.pageContainer}>
            <Box style={GlobalStyle.MiddleOfScreen}>
                <AwesomeButton
                    {...letsplaybutton}
                    onPress={() => navigation.navigate('Game')}
                >
                    <Text style={GlobalStyle.AwesomeButtonTextBig}>Let's Play</Text>
                </AwesomeButton>
                {/* get user name  */}
                <Box style={GlobalStyle.SpacingBox}>
                    <TextInput
                        placeholder="Enter your name"
                        clearButtonMode='always'
                        onChangeText={(text) => { }}
                    />
                </Box>
            </Box>
        </Box >
    )
}

export default MainMenu

