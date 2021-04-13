import { CHANGE_SCREEEN } from "../types"

const handlers = {
    [CHANGE_SCREEEN]: (state, payload) => payload,
    DEFAULT: state => state
}

export const screenReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action.payload)
}