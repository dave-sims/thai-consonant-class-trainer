//import { FETCH_REQUEST, FETCH_FAILURE, FetchActionTypes } from "../types"
import { INCREMENT_NUMBER, DECREMENT_NUMBER, INCREMENT_WITH_PAYLOAD, CommonActionTypes } from "../types"
import { ActionCreator } from "redux";

export const increment: ActionCreator<CommonActionTypes> = () => {
    return { type: INCREMENT_NUMBER };
}

export const decrement: ActionCreator<CommonActionTypes> = () => {
    return { type: DECREMENT_NUMBER };
}

export const incrementWithPayload: ActionCreator<CommonActionTypes> = (incby: number) => {
    return { type: INCREMENT_WITH_PAYLOAD, payload: incby };
}