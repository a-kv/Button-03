
export const CHANGE_THEME = 'CHANGE_THEME';


const initialState = {
   style: "blue"
}

export const wednesdayReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                style: action.style
            }
    }
    return state;
}


export const changeThemeAC = (style) => {
    return {type: CHANGE_THEME, style}
}



