export const ADD_COLOR_ARRAY = 'ADD_COLOR_ARRAY';
export const CLEAR_COLOR_ARRAY = 'CLEAR_COLOR_ARRAY';
export const ADD_SCORE = 'ADD_SCORE';
export const CLEAR_SCORE = 'CLEAR_SCORE';
export const ADD_PLAYER = 'ADD_PLAYER';

type actionType = {
    type: string,
    payload: any
}

export const add_color_array = (value: string) => ({
    type: ADD_COLOR_ARRAY,
    payload: value
})

export const clear_color_array = () => ({
    type: CLEAR_COLOR_ARRAY
})

export const add_score = (value: number) => ({
    type: ADD_SCORE,
    payload: value
})

export const clear_score = () => ({
    type: CLEAR_SCORE
})

export const add_player = (value: string) => ({
    type: ADD_PLAYER,
    payload: value
})



