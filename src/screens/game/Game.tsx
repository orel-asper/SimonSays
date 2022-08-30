import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AwesomeButton from '../../AwesomeButton/src/AwesomeButton'
import Box from '../../components/Box'
import Text from '../../components/Text'
import GlobalStyle from '../../theme/GlobalStyle'
import { Buttons } from './game_config'

const Game: React.FC = () => {
    const dispatch = useDispatch()


    return (
        <Box style={GlobalStyle.pageContainer}>
            {/* 4 buttons colors green, red ,yellow */}
            <Box style={GlobalStyle.MiddleOfScreen}>
                <Box style={GlobalStyle.Row}>
                    <Box>
                        <AwesomeButton
                            {...Buttons.green}
                            onPress={() => { }}
                            style={GlobalStyle.AwesomeButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                        <AwesomeButton
                            {...Buttons.red}
                            onPress={() => { }}
                            style={GlobalStyle.AwesomeButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                    </Box>
                    <Box>
                        <AwesomeButton
                            {...Buttons.yellow}
                            onPress={() => { }}
                            style={GlobalStyle.AwesomeButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                        <AwesomeButton
                            {...Buttons.blue}
                            onPress={() => { }}
                            style={GlobalStyle.AwesomeButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Game

