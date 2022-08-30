
import React, { useRef } from 'react'
// react native navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// nested stack
import TabStack from './TabStack';
//screen
import MainMenu from '../screens/main/MainMenu';
// root config
import root_config from './root_config';

const {
    stacks,
    screens,
} = root_config;

const Stack = createNativeStackNavigator();

const RootStack: React.FC = React.memo(() => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={screens.main}>
                <Stack.Screen name={screens.main} component={MainMenu} options={{ headerShown: false }} />
                <Stack.Screen name={screens.game} component={TabStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
})

export default RootStack;

