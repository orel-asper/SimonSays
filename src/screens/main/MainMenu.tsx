import React, { useState } from 'react'
import Box from '../../components/Box'
import Text from '../../components/Text'
import GlobalStyle from '../../theme/GlobalStyle'
import AwesomeButton from '../../AwesomeButton/src/AwesomeButton';
import { letsplaybutton } from './main_config';
import TextInput from '../../components/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { add_player, clear_color_array } from '../../Redux/actions/main.actions';

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
    const highescore = useSelector((state: Player) => state.mainReducer.highescore)
    const player = useSelector((state: Player) => state.mainReducer.player)
    //local state
    const [name, setName] = useState('')

    // ------------ clear the array ------------
    const clearColorsArray = () => {
        dispatch(clear_color_array())
    }
    // ------------ add player------------
    const addPlayer = (name: string) => {
        dispatch(add_player(name))
    }

    const Continue = () => {
        clearColorsArray()
        addPlayer(player.name !== '' ? player.name : name)
        setName('')
        navigation.navigate('Game')
    }

    return (
        <Box style={GlobalStyle.pageContainer}>
            <Box style={GlobalStyle.MiddleOfScreen}>
                {/* get user name  */}
                <Box style={GlobalStyle.SpacingBox}>
                    {!(highescore > 0) &&
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
                    disabled={name.length === 0 && highescore < 0}
                    onPress={Continue}
                >
                    <Text style={GlobalStyle.AwesomeButtonTextBig}>Let's Play</Text>
                </AwesomeButton>
            </Box>
        </Box >
    )
}

export default MainMenu

