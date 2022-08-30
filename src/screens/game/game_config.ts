import { Dimensions } from "react-native"
import { palette } from "../../theme/theme"

const { width, height } = Dimensions.get("window")

export const Buttons = {
    green: {
        type: "primary",
        activityColor: palette.green,
        activeOpacity: 0.5,
        backgroundActive: palette.lightgreen,
        backgroundColor: palette.green,
        backgroundDarker: palette.lightgreen,
        backgroundShadow: 'transparent',
        backgroundPlaceholder: 'transparent',
        backgroundProgress: palette.darkgreen,
        borderColor: palette.darkgreen,
        borderTopLeftRadius: (height * .2),
        borderWidth: 1,
        height: (height * .2),
        width: (height * .2),
        paddingHorizontal: (width * .1),
        stretch: false,
        raiseLevel: 15,
        springRelease: true,
    },
    yellow: {
        type: "secondary",
        activityColor: palette.yellow,
        activeOpacity: 0.5,
        backgroundActive: palette.lightyellow,
        backgroundColor: palette.darkyellow,
        backgroundDarker: palette.lightyellow,
        backgroundShadow: 'transparent',
        backgroundPlaceholder: 'transparent',
        backgroundProgress: palette.darkyellow,
        borderColor: palette.darkyellow,
        borderTopRightRadius: (height * .2),
        borderWidth: 1,
        height: (height * .2),
        width: (height * .2),
        paddingHorizontal: (width * .1),
        stretch: false,
        raiseLevel: 15,
        springRelease: true,
    },
    red: {
        type: "danger",
        activityColor: palette.red,
        activeOpacity: 0.5,
        backgroundActive: palette.lightred,
        backgroundColor: palette.red,
        backgroundDarker: palette.lightred,
        backgroundShadow: 'transparent',
        backgroundPlaceholder: 'transparent',
        backgroundProgress: palette.darkred,
        borderColor: palette.darkred,
        borderBottomLeftRadius: (height * .2),
        borderWidth: 1,
        height: (height * .2),
        width: (height * .2),
        paddingHorizontal: (width * .1),
        stretch: false,
        raiseLevel: 15,
        springRelease: true,
    },
    blue: {
        type: "primary",
        activityColor: palette.blue,
        activeOpacity: 0.5,
        backgroundActive: palette.lightblue,
        backgroundColor: palette.blue,
        backgroundDarker: palette.lightblue,
        backgroundShadow: 'transparent',
        backgroundPlaceholder: 'transparent',
        backgroundProgress: palette.darkblue,
        borderColor: palette.darkblue,
        borderBottomRightRadius: (height * .2),
        borderWidth: 1,
        height: (height * .2),
        width: (height * .2),
        paddingHorizontal: (width * .1),
        stretch: false,
        raiseLevel: 15,
        springRelease: true,
    },
}

export const GenerateRandomColor = () => {
    const random = Math.floor(Math.random() * 4)
    switch (random) {
        case 0:
            return Object.keys(Buttons)[0]
        case 1:
            return Object.keys(Buttons)[1]
        case 2:
            return Object.keys(Buttons)[2]
        case 3:
            return Object.keys(Buttons)[3]
        default:
            return Object.keys(Buttons)[0]
    }
}

