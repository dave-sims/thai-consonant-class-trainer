import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { commonReducer } from './common.reducer';

export const rootReducer = combineReducers({
    common: commonReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;