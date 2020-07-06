export const CHANGE_THEME = './redux/wednesdayReducer/CHANGE_THEME';
export const POST_CHECK = './redux/wednesdayReducer/POST_CHECK';
export const TOGGLE_IS_FETCHING = './redux/wednesdayReducer/TOGGLE_IS_FETCHING';
export const CHANGE_NOTIFICATION = './redux/wednesdayReducer/CHANGE_NOTIFICATION';


const initialState = {
    style: "blue",
    success: true,
    isFetching: false,
    notification: 'Send request to server'
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case CHANGE_NOTIFICATION: {
            debugger
            return {...state, notification: action.notification}
        }
    }
    return state;
}


export const changeThemeAC = (style) => ({type: CHANGE_THEME, style});
export const postCheckAC = (success) => ({type: POST_CHECK, success});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const changeNotificationAC = (notification) => {
    debugger
    return {type: CHANGE_NOTIFICATION, notification}
};




