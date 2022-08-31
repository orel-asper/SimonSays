import { ADD_COLOR_ARRAY, CLEAR_COLOR_ARRAY, ADD_SCORE, CLEAR_SCORE, ADD_PLAYER } from '../actions/main.actions'

let initialState = {
    color_array: [],
    player: {
        name: '',
        score: 0,
    },
    highescore: 0,
}

interface IState {
    color_array: string[];
    player: {
        name: string;
        score: number;
    };
    highescore: number;
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
        case ADD_PLAYER:
            return {
                ...state,
                player: {
                    name: action.payload,
                    score: 0
                }
            }
        case ADD_SCORE:
            return {
                ...state,
                player: {
                    name: state.player.name,
                    score: state.player.score + action.payload
                },
                highescore: (state.player.score + action.payload > state.highescore) ? (state.player.score + action.payload) : state.highescore
            }
        case CLEAR_SCORE:
            return {
                ...state,
                player: {
                    name: state.player.name,
                    score: 0
                }
            }
        default:
            return state
    }
}
