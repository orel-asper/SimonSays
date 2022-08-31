import React from 'react'
import Box from '../../components/Box'
import Text from '../../components/Text'
import GlobalStyle from '../../theme/GlobalStyle'
import { useDispatch, useSelector } from 'react-redux'


const Scoreboard: React.FC = () => {
    const { player, highescore } = useSelector((state: any) => state.mainReducer)
    return (
        <Box style={GlobalStyle.pageContainer}>
            <Box style={GlobalStyle.MiddleOfScreen}>
                <Text style={GlobalStyle.TextBigest}>Scoreboard</Text>

                <Box style={GlobalStyle.SpacingBox}>
                    <Text style={GlobalStyle.TextBig}>{player.name} Your Highest Score is {highescore}</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Scoreboard

