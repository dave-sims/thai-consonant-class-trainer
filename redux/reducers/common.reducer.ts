import { INCREMENT_NUMBER, DECREMENT_NUMBER, CommonActionTypes, INCREMENT_WITH_PAYLOAD } from '../types';

interface CommonState {
    ourNumber: number
}

const initialState: CommonState = {
    ourNumber: 0
};

export function commonReducer(state: CommonState = initialState, action: CommonActionTypes): CommonState {
    switch (action.type) {
        case INCREMENT_NUMBER: {
            return {
                ourNumber: state.ourNumber + 1
            };
        }
        case DECREMENT_NUMBER: {
            return {
                ourNumber: state.ourNumber - 1
            };
        }
        case INCREMENT_WITH_PAYLOAD: {
            return {
                ourNumber: state.ourNumber + action.payload
            };
        }
        default:
            return state
    }
};