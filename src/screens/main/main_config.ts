import { Dimensions } from "react-native"
import { palette } from "../../theme/theme"

const { width, height } = Dimensions.get("window")


export const letsplaybutton = {
    type: "primary",
    activityColor: "#ffc107",
    activeOpacity: 0.5,
    backgroundActive: "#ffc300",
    backgroundColor: "#ffb900",
    backgroundDarker: "#ff7e00",
    backgroundShadow: "#ff7e00",
    backgroundPlaceholder: "#ff8f00",
    backgroundProgress: "#ff7e00",
    borderColor: "#ff7e00",
    borderRadius: (height * .2),
    borderWidth: 1,
    height: (height * 0.4),
    width: (height * 0.4),
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    stretch: false,
    raiseLevel: 8,
    springRelease: true,
}