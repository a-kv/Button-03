export const INC_COUNTER = 'INC_COUNTER';
export const ON_CHANGE_ERROR = 'ON_CHANGE_ERROR';
export const ON_CHANGE_TITLE = 'ON_CHANGE_TITLE';
export const SET_NAME = 'SET_NAME';


const initialState = {
        number: 0,
        error: true,
        names: [],
        title: ''
    }

export const mondayReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return {
                ...state,
                number: action.number,
            }
        case ON_CHANGE_ERROR: {
            return {
                    ...state,
                    error: action.error,
                }
        }
        case ON_CHANGE_TITLE: {
            return {
                    ...state,
                title: action.title,
                // error: action.error,
                }
        }
        case SET_NAME: {
            return {
                    ...state,
                names: action.names,
                }
        }
    }
    return state;
}
export const incCounterAC = (number) => {
    return {type: INC_COUNTER, number:number}
}
export const onChangeErrorAC = (error) => {
    return  {type: ON_CHANGE_ERROR, error: error};
}
export const onChangeTitleAC = (title) => {
    return  {type: ON_CHANGE_TITLE, title: title};
}
export const setNameAC = (names) => {
    return  {type: SET_NAME, names: names};
}



