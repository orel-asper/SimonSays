import * as React from "react";
import Svg, { Polygon } from "react-native-svg";

const Game = (props) => (
    <Svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        {...props}
    >
        <Polygon
            stroke="#fff"
            strokeWidth={2}
            points="3 22 21 12 3 2"
        />
    </Svg>
);

export default Game;