//import { FETCH_REQUEST, FETCH_FAILURE, FetchActionTypes } from "../types"
import { SET_ACCESS_TOKEN, CLEAR_ACCESS_TOKEN, AuthActionTypes } from "../types"
import { ActionCreator } from "redux";

export const setAccessToken: ActionCreator<AuthActionTypes> = (accessToken: string) => {
    return { type: SET_ACCESS_TOKEN, payload: accessToken };
}

export const clearAccessToken: ActionCreator<AuthActionTypes> = () => {
    return { type: CLEAR_ACCESS_TOKEN };
}
