
import React from 'react'
// screens
import Scoreboard from '../screens/leaderboard/Scoreboard';
import Game from '../screens/game/Game';
// react native navigation 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// components
import Box from '../components/Box';
import GetSvg from '../components/GetSvg';
import GlobalStyle from '../theme/GlobalStyle';
import Text from '../components/Text';
import term from '../../terms';
// root config
import root_config from './root_config';

const {
    stacks,
    screens,
} = root_config;

const Tab = createBottomTabNavigator();

const TabButton: React.FC<any> = ({ focused, name }) => (
    <Box style={[GlobalStyle.RootBottomTabButton, focused ? { backgroundColor: 'rgba(0, 0, 0, .1)' } : { backgroundColor: '#33CCCC' }]}>
        <GetSvg id={name} fill="#fff" width={30} height={30} />
        <Text numberOfLines={1} style={GlobalStyle.RootBottomTabButtonText} >{term(name)}</Text>
    </Box>
)


const TabStack: React.FC = React.memo(() => {
    return (
        <Tab.Navigator
            initialRouteName={stacks.main}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#33CCCC',
                    borderTopColor: '#33CCCC',
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name={screens.main}
                component={Game}
                options={{
                    tabBarIcon: ({ focused }) => <TabButton focused={focused} name={screens.game} />,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name={screens.scoreboard} component={Scoreboard}
                options={{
                    tabBarIcon: ({ focused }) => <TabButton focused={focused} name={screens.scoreboard} />,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
})

export default TabStack;