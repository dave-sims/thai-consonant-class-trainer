export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN"
export const CLEAR_ACCESS_TOKEN = "CLEAR_ACCESS_TOKEN"

interface SetAccessTokenAction {
    type: typeof SET_ACCESS_TOKEN
    payload: string
}

interface ClearAccessTokenAction {
    type: typeof CLEAR_ACCESS_TOKEN
}


export type AuthActionTypes = SetAccessTokenAction | ClearAccessTokenAction 