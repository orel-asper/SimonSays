import { StyleSheet, Dimensions, StatusBar, Platform, PixelRatio } from "react-native";
import { theme } from "./theme";

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
let BOTTOM_TAB_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT

const SCREEN_HEIGHT_WITH_STATUS_BAR = WINDOW_HEIGHT + STATUS_BAR_HEIGHT + BOTTOM_TAB_HEIGHT;


const CARD_HEIGHT = SCREEN_HEIGHT * .25
const isIOS = Platform.OS === 'ios'
const isAndroid = Platform.OS === 'android'

export const normalize = (size: number) => {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
    }
}


const spacing = {
    paddingHorizontal: 5,
    paddingVertical: 5
}

const spacingL = {
    paddingHorizontal: 8,
    paddingVertical: 8
}

const spacingXL = {
    paddingHorizontal: 12,
    paddingVertical: 12
}

const spacingXXL = {
    paddingHorizontal: 16,
    paddingVertical: 16
}

const font = {
    fontFamily: 'OpenSans-Regular',
}

const shadowBox = {
    ...Platform.select({
        android: {
            shadowColor: "darkgrey",
            shadowOffset: {
                width: 1,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 4,
        },
        ios: {
            shadowColor: "darkgrey",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 4,
        },
    })
}

const textShadow = {
    textShadowColor: "darkgrey",
    textShadowOffset: {
        width: 0,
        height: 1,
    },
    textShadowRadius: 2.65,
    elevation: 4,
}

const devBorder = {
    borderColor: theme.colors.primary,
    borderWidth: 1,
}
const devBorderWhite = {
    borderColor: theme.colors.background,
    borderWidth: 1,
}

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.background
    },
    text: {
        ...font,
        fontSize: normalize(16),
        color: theme.colors.textlight,
    },
    pageContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
        zIndex: 1,
    },
    ScrollView: {
        flexGrow: 1,
    },
    FlatList: {
        flexGrow: 1,
    },
    VirtualizedList: {
        flexGrow: 1,
    },
    MiddleOfScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Row: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    // ------------ AwesomeButton ------------
    AwesomeButton: {
        margin: normalize(5),
    },
    AwesomeButtonTextBig: {
        ...font,
        fontSize: normalize(50),
        fontWeight: 'bold',
        color: theme.colors.textlight,
    },
    AwesomeButtonText: {
        ...font,
        fontSize: normalize(30),
        fontWeight: 'bold',
        color: theme.colors.textlight,
    },
    // ------------ RootBottomTab ------------
    RootBottomTabButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    RootBottomTabButtonText: {
        fontSize: normalize(18),
        fontFamily: 'OpenSans-Regular',
        color: theme.colors.textlight,
    },
})

