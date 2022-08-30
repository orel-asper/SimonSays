import React, { useState } from 'react'
import Box from '../../components/Box'
import Text from '../../components/Text'
import GlobalStyle from '../../theme/GlobalStyle'
import AwesomeButton from '../../AwesomeButton/src/AwesomeButton';
import { letsplaybutton } from './main_config';
import TextInput from '../../components/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { add_player } from '../../Redux/actions/main.actions';

type MainMenuProps = {
    navigation: any
}

type Player = {
    name: string
    score: number
    mainReducer: any
}

const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
    //global
    const dispatch = useDispatch();
    const player = useSelector((state: Player) => state.mainReducer.player)
    //local state
    const [name, setName] = useState('')

    const addPlayer = () => {
        dispatch(add_player(name))
        setName('')
        navigation.navigate('Game')
    }

    return (
        <Box style={GlobalStyle.pageContainer}>
            <Box style={GlobalStyle.MiddleOfScreen}>
                {/* get user name  */}
                <Box style={GlobalStyle.SpacingBox}>
                    {!(player.score > 0) &&
                        <>
                            <Text style={GlobalStyle.TextBig}>Enter player name</Text>
                            <TextInput
                                placeholder="Enter your name"
                                clearButtonMode='always'
                                onChangeText={(text) => setName(text)}
                                value={name}
                            />
                        </>}
                </Box>
                <AwesomeButton
                    {...letsplaybutton}
                    disabled={name.length === 0}
                    onPress={addPlayer}
                >
                    <Text style={GlobalStyle.AwesomeButtonTextBig}>Let's Play</Text>
                </AwesomeButton>
            </Box>
        </Box >
    )
}

export default MainMenu

