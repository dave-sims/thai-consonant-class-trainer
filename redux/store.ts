import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const middleware = applyMiddleware(thunk);

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const configuredReducers = persistReducer(persistConfig, rootReducer);

export const store = createStore(configuredReducers, middleware);

export const persistor = persistStore(store);