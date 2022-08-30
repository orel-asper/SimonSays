export const ADD_COLOR_ARRAY = 'ADD_COLOR_ARRAY';
export const CLEAR_COLOR_ARRAY = 'CLEAR_COLOR_ARRAY';
export const ADD_SCORE = 'ADD_SCORE';
export const CLEAR_SCORE = 'CLEAR_SCORE';

type actionType = {
    type: string,
    payload: any
}

export const add_color_array = (value: actionType) => ({
    type: ADD_COLOR_ARRAY,
    payload: value
})

export const clear_color_array = (value: actionType) => ({
    type: CLEAR_COLOR_ARRAY,
    payload: value
})

export const add_score = (value: actionType) => ({
    type: ADD_SCORE,
    payload: value
})

export const clear_score = (value: actionType) => ({
    type: CLEAR_SCORE,
    payload: value
})



