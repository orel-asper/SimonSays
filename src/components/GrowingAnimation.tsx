import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import GlobalStyle from '../theme/GlobalStyle';

type useGrowingAnimationProps = {
    text: string,
    duration: number,
}


const useGrowingAnimation = ({ text, duration }: useGrowingAnimationProps) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
        }).start();
    }, [duration]);

    return (
        <Animated.Text style={[GlobalStyle.GrowAnimation, {
            opacity: animatedValue,
            transform: [{
                scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }),
            }],
        }]}>
            {text}
        </Animated.Text>
    );
}

export default useGrowingAnimation;