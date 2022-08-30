import { legacy_createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import mainReducer from '../reducers/main.reducer';
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    mainReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = legacy_createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}

