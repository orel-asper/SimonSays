import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AwesomeButton from '../../AwesomeButton/src/AwesomeButton'
import Box from '../../components/Box'
import Text from '../../components/Text'
import { add_color_array, clear_color_array, clear_score, add_score } from '../../Redux/actions/main.actions'
import GlobalStyle from '../../theme/GlobalStyle'
import { Buttons, GenerateRandomColor } from './game_config'

type Player = {
    name: string
    score: number
    mainReducer: any
}

const Game: React.FC = () => {
    //global
    const dispatch = useDispatch()
    const player = useSelector((state: Player) => state.mainReducer.player)
    const colorArray = useSelector((state: any) => state.mainReducer.color_array)
    //local state
    const [lightColor, setLightColor] = useState<any>({
        green: false,
        red: false,
        yellow: false,
        blue: false
    })
    const [userColorArray, setUserColorArray] = useState<any[]>([])


    // ------------ add color to the array ------------
    const addColor = (color: string) => {
        dispatch(add_color_array(color))
    }
    // ------------ clear the array ------------
    const clearArray = () => {
        dispatch(clear_color_array())
    }
    // ------------ user add color ------------
    const addUserColor = (color: string) => {
        setUserColorArray([...userColorArray, color])
        // match the user array with the colorArray
        if (userColorArray.length === colorArray.length) {
            if (userColorArray.every((item, index) => item === colorArray[index])) {
                dispatch(add_score(1))
                setUserColorArray([])
            } else {
                dispatch(clear_score())
                setUserColorArray([])
            }
        }
    }
    // ------------ main function ------------
    const main = useCallback(async () => {
        // generate random color
        const color = GenerateRandomColor()
        // add color to the array
        addColor(color)
        // clear the array
        // clearArray()
    }, [addUserColor])


    useEffect(() => {
        let timeout: number;
        (async () => {
            try {
                await main();
                console.log(colorArray)
                await new Promise((resolve: any) => setTimeout(resolve, 2000))
                for (let i = 0; i < colorArray.length; i++) {
                    setLightColor({ ...lightColor, [colorArray[i]]: true })
                    // wait(1000)
                    await new Promise((resolve: any) => {
                        timeout = setTimeout(() => {
                            resolve()
                        }, 1500)
                    })
                    // if its the same color turn off the light then turn on the light
                    if (colorArray[i - 1] || colorArray[i + 1] === colorArray[i]) {
                        setLightColor({ ...lightColor, [colorArray[i]]: false })
                        await new Promise((resolve: any) => setTimeout(resolve, 500))
                        setLightColor({ ...lightColor, [colorArray[i]]: true })
                    }
                    setLightColor({ ...lightColor, [colorArray[i]]: false })
                }
            }
            catch (error) {
                console.log(error)
            }
        })()

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <Box style={GlobalStyle.pageContainer}>
            {/* 4 buttons colors green, red ,yellow */}
            <Box style={GlobalStyle.MiddleOfScreen}>
                <Box style={GlobalStyle.SpacingBox}>
                    <Text style={GlobalStyle.TextBig}
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}>
                        {player.name} - your score: {player.score}
                    </Text>
                </Box>
                <Box style={GlobalStyle.Row}>
                    <Box>
                        <AwesomeButton
                            {...Buttons.green}
                            backgroundColor={lightColor.green ? Buttons.green.backgroundDarker : Buttons.green.backgroundColor}
                            onPress={() => addUserColor('green')}
                            style={GlobalStyle.AwesomeButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                        <AwesomeButton
                            {...Buttons.red}
                            backgroundColor={lightColor.red ? Buttons.red.backgroundDarker : Buttons.red.backgroundColor}
                            onPress={() => addUserColor('red')}
                            style={GlobalStyle.AwesomeButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                    </Box>
                    <Box>
                        <AwesomeButton
                            {...Buttons.yellow}
                            backgroundColor={lightColor.yellow ? Buttons.yellow.backgroundDarker : Buttons.yellow.backgroundColor}
                            onPress={() => addUserColor('yellow')}
                            style={GlobalStyle.AwesomeButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                        <AwesomeButton
                            {...Buttons.blue}
                            backgroundColor={lightColor.blue ? Buttons.blue.backgroundDarker : Buttons.blue.backgroundColor}
                            onPress={() => addUserColor('blue')}
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

