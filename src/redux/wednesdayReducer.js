
export const CHANGE_THEME = 'CHANGE_THEME';
export const POST_CHECK = 'POST_CHECK';


const initialState = {
   style: "blue",
    success: true
}

export const wednesdayReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                style: action.style
            }
        case POST_CHECK:
            return {
                ...state,
                success: action.success
            }
    }
    return state;
}


export const changeThemeAC = (style) => {
    return {type: CHANGE_THEME, style}
}
export const postCheckAC = (success) => {
    return {type: POST_CHECK, success}
}



