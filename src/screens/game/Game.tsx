import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '../../components/Box'
import Text from '../../components/Text'
import useSound from "react-native-use-sound";
import GlobalStyle from '../../theme/GlobalStyle'
import GrowingAnimation from '../../components/GrowingAnimation'
import AwesomeButton from '../../AwesomeButton/src/AwesomeButton'
import { Buttons, GenerateRandomColor, GenerateRandomAchivementText } from './game_config'
import { add_color_array, clear_color_array, clear_score, add_score } from '../../Redux/actions/main.actions'
//sounds
const sounds = {
    green: 'a_sharp.mp3',
    red: 'c_sharp.mp3',
    blue: 'd_sharp.mp3',
    yellow: 'g_sharp.mp3',
    lose: 'aww.mp3',
}

type Player = {
    name: string
    score: number
    mainReducer: any
}

const Game: React.FC = () => {
    //global
    const dispatch = useDispatch()
    const player = useSelector((state: Player) => state.mainReducer.player)
    const color_array = useSelector((state: Player) => state.mainReducer.color_array)
    //local state
    const [lightColor, setLightColor] = useState<any>({
        green: false,
        red: false,
        yellow: false,
        blue: false
    })
    const [userColorArray, setUserColorArray] = useState<any[]>([])
    const [popText, setPopText] = useState<any>({
        pop: false,
        text: ''
    })
    const [disabledButton, setDisabledButton] = useState<boolean>((true))
    // hooks
    const [playGreen, pauseGreen, stopGreen, dataGreen] = useSound(sounds.green, { volume: 1 });
    const [playRed, pauseRed, stopRed, dataRed] = useSound(sounds.red, { volume: 1 });
    const [playBlue, pauseBlue, stopBlue, dataBlue] = useSound(sounds.blue, { volume: 1 });
    const [playYellow, pauseYellow, stopYellow, dataYellow] = useSound(sounds.yellow, { volume: 1 });
    const [playLose, pauseLose, stopLose, dataLose] = useSound(sounds.lose, { volume: 1 });

    const handlePlay = (name: string) => {
        switch (name) {
            case 'green':
                playGreen();
                break;
            case 'red':
                playRed();
                break;
            case 'blue':
                playBlue();
                break;
            case 'yellow':
                playYellow();
                break;
            case 'lose':
                playLose();
                break;
            default:
                break;
        }
    }

    // ------------ add color to the array ------------
    const addColorToTheArray = (color: string) => {
        dispatch(add_color_array(color))
    }
    // ------------ clear the array ------------
    const clearColorsArray = () => {
        dispatch(clear_color_array())
    }
    // ------------ clear score ------------
    const clearScore = () => {
        dispatch(clear_score())
    }
    // ------------ add score ------------
    const addScore = () => {
        dispatch(add_score(1))
    }
    // ------------ main function ------------
    const main = async () => {
        // generate random color
        const color = GenerateRandomColor()
        // add color to the array
        addColorToTheArray(color)
    }
    // ------------ animation ------------
    const startAnimation = async (callback: Function, type: string) => {
        new Promise((resolve: any) => setTimeout(resolve, 500)).then(() => {
            setPopText({ pop: true, text: type })
            setTimeout(() => {
                setPopText({ pop: false, text: '' })
            }, 1500)
        }).then(() => {
            callback()
        }).catch(err => {
            console.log(err)
        })
    }
    // ------------ user add color ------------
    const addUserColor = (color: string) => {
        //sound
        handlePlay(color)
        // add color to the array
        setUserColorArray(colors => [...colors, color])
        let currentUserColorArray = [...userColorArray, color]
        // if user array in position x is not as the color_array in position x the game is over
        if (currentUserColorArray[currentUserColorArray.length - 1] !== color_array[currentUserColorArray.length - 1]) {
            // game over
            startAnimation(() => {
                clearScore()
                clearColorsArray()
                setUserColorArray([])
                handlePlay('lose')
            }, 'lose')
        }
        // game continue
        if (currentUserColorArray.length === color_array.length) {
            if (currentUserColorArray.every((item, index) => item === color_array[index])) {
                // game continue
                addScore()
                setUserColorArray([]);
                // main
                startAnimation(main, 'win')
            } else {
                clearScore()
                setUserColorArray([])
            }
        }
    }

    useEffect(() => {
        let timeout: number;
        (async () => {
            try {
                await new Promise((resolve: any) => timeout = setTimeout(resolve, 1500))
                for (let i = 0; i < color_array.length; i++) {
                    setDisabledButton(true)
                    setLightColor({ ...lightColor, [color_array[i]]: true })
                    handlePlay(color_array[i])
                    // wait for 1.5 seconds
                    await new Promise((resolve: any) => timeout = setTimeout(resolve, 1000))
                    // if its the same color turn off the light then turn on the light
                    if (color_array[i - 1] || color_array[i + 1] === color_array[i]) {
                        setLightColor({ ...lightColor, [color_array[i]]: false })
                        await new Promise((resolve: any) => setTimeout(resolve, 500))
                        setLightColor({ ...lightColor, [color_array[i]]: true })
                    }
                    setLightColor({ ...lightColor, [color_array[i]]: false })
                }
                setDisabledButton(color_array.length === 0)
            }
            catch (error) {
                console.log(error);
                clearColorsArray();
            }
        })()

        return () => {
            clearTimeout(timeout)
        }
    }, [color_array])

    return (
        <Box style={GlobalStyle.pageContainer}>
            {popText.pop && <GrowingAnimation text={GenerateRandomAchivementText(popText.text)} duration={1000} />}
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
                            disabled={disabledButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                        <AwesomeButton
                            {...Buttons.red}
                            backgroundColor={lightColor.red ? Buttons.red.backgroundDarker : Buttons.red.backgroundColor}
                            onPress={() => addUserColor('red')}
                            style={GlobalStyle.AwesomeButton}
                            disabled={disabledButton}
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
                            disabled={disabledButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                        <AwesomeButton
                            {...Buttons.blue}
                            backgroundColor={lightColor.blue ? Buttons.blue.backgroundDarker : Buttons.blue.backgroundColor}
                            onPress={() => addUserColor('blue')}
                            style={GlobalStyle.AwesomeButton}
                            disabled={disabledButton}
                        >
                            <Text style={GlobalStyle.AwesomeButtonText}>{ }</Text>
                        </AwesomeButton>
                    </Box>
                </Box>
                <Box style={GlobalStyle.StartButton}>
                    <AwesomeButton
                        {...Buttons.start}
                        onPress={() => main()}
                        disabled={color_array.length > 0}
                        style={GlobalStyle.AwesomeButton}>
                        <Text style={GlobalStyle.AwesomeButtonText}>START</Text>
                    </AwesomeButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Game

