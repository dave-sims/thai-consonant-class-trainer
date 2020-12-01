export const INCREMENT_NUMBER = "INCREMENT_NUMBER"
export const DECREMENT_NUMBER = "DECREMENT_NUMBER"
export const INCREMENT_WITH_PAYLOAD = "INCREMENT_WITH_PAYLOAD"

interface IncrementAction {
    type: typeof INCREMENT_NUMBER
}

interface DecrementAction {
    type: typeof DECREMENT_NUMBER
}

interface IncrementWithPayloadAction {
    type: typeof INCREMENT_WITH_PAYLOAD
    payload: number
}

export type CommonActionTypes = IncrementAction | DecrementAction | IncrementWithPayloadAction