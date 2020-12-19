import { SET_ACCESS_TOKEN, CLEAR_ACCESS_TOKEN, AuthActionTypes } from "../types"

interface AuthState {
    accessToken: string | null
}

const initialState: AuthState = {
    accessToken: null
};

export function authReducer(state: AuthState = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case SET_ACCESS_TOKEN: {
            return {
                accessToken: action.payload
            };
        }
        case CLEAR_ACCESS_TOKEN: {
            return {
                accessToken: null
            };
        }
        default:
            return state
    }
};