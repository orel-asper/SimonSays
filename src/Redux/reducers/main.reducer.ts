import { ADD_COLOR_ARRAY, CLEAR_COLOR_ARRAY, ADD_SCORE, CLEAR_SCORE } from '../actions/main.actions'

let initialState = {
    color_array: [],
    score: 0
}

interface IState {
    color_array: string[];
    score: number;
}

type actionType = {
    type: string,
    payload: any
}

export default (state = initialState, action: actionType): IState => {
    switch (action.type) {
        case ADD_COLOR_ARRAY:
            return {
                ...state,
                color_array: [...state.color_array, action.payload]
            }
        case CLEAR_COLOR_ARRAY:
            return {
                ...state,
                color_array: []
            }
        case ADD_SCORE:
            return {
                ...state,
                score: state.score + action.payload
            }
        case CLEAR_SCORE:
            return {
                ...state,
                score: 0
            }
        default:
            return state
    }
}
