/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { LogBox } from "react-native";
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import rootReducer from './src/Redux/rootReducer/rootReducer';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';



LogBox.ignoreLogs([
    "Invariant Violation: ViewPropTypes has been removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'",
    "Invariant Violation: Module AppRegistry is not a registered callable module (calling runApplication)"
])


const Main = () => {
    const { store, persistor } = rootReducer();
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}


AppRegistry.registerComponent(appName, () => Main);
