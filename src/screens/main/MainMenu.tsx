import React from 'react'
import Box from '../../components/Box'
import Text from '../../components/Text'
import GlobalStyle from '../../theme/GlobalStyle'
import AwesomeButton from '../../AwesomeButton/src/AwesomeButton';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

type MainMenuProps = {
    navigation: any
}

const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
    return (
        <Box style={GlobalStyle.pageContainer}>
            <Box style={GlobalStyle.MiddleOfScreen}>
                <AwesomeButton
                    onPress={() => navigation.navigate('Game')}
                    type="primary"
                    activityColor="#ffc107"
                    activeOpacity={0.5}
                    backgroundActive="#ffc300"
                    backgroundColor="#ffb900"
                    backgroundDarker="#ff7e00"
                    backgroundShadow="#ff7e00"
                    backgroundPlaceholder="#ff8f00"
                    backgroundProgress="#ff7e00"
                    borderColor="#ff7e00"
                    borderRadius={height * .2}
                    borderWidth={1}
                    height={height * 0.4}
                    width={height * 0.4}
                    paddingHorizontal={10}
                    paddingTop={10}
                    paddingBottom={10}
                    stretch={false}
                    raiseLevel={8}
                    springRelease={true}
                >
                    <Text style={GlobalStyle.AwesomeButtonTextBig}>Let's Play</Text>
                </AwesomeButton>
            </Box>
        </Box >
    )
}

export default MainMenu

