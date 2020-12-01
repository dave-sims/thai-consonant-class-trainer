import { combineReducers } from 'redux';
import { commonReducer } from './common.reducer';
//import { storiesReducer } from './stories.reducer'

export const rootReducer = combineReducers({
    common: commonReducer,
    //stories: storiesReducer
});

export type RootState = ReturnType<typeof rootReducer>;