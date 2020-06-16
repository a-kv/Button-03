export const ADD_TODOLIST = 'ADD_TODOLIST';
export const DELETE_TODOLIST = 'DELETE_TODOLIST';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_LOADING = 'CHANGE_LOADING';


const initialState = {
    todolists: [],
    loading: true,
}

export const tuesdayReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {...state,
                todolists: [...state.todolists, action.newTodolist]}
        case DELETE_TODOLIST:
            return {
                ...state, todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            }
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl
                    } else {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}
                    }
                })
            }
        case UPDATE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id != action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            }
        case CHANGE_LOADING:
            return {
                ...state,
                loading: false
            }
    }
    console.log('reducer', action)
    return state;
}

export const updateTaskAC = (taskId, obj, todolistId) => {
    return {type: UPDATE_TASK, taskId, obj, todolistId};
}
export const addTodoListAC = (newTodolist) => {
    return {type: ADD_TODOLIST, newTodolist};
}

export const deleteTaskAC = (taskId, todolistId) => {
    return {type: DELETE_TASK, taskId, todolistId};
}

export const addTaskAC = (newTask, todolistId) => {
    return {type: ADD_TASK, newTask, todolistId};
}

export const changeLoadingAC = (loading) => {
    return {type: CHANGE_LOADING, loading: loading}
}



