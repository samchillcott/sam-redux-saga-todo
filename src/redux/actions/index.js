//Action Creator
export const addTodo = (obj) => {
    // return an action
    return {
        type: 'ADD_TODO',
        payload: obj
    }
}

export const completeTodo = (obj) => {
    return {
        type: 'COMPLETE_TODO',
        payload: obj
    }
}

export const removeTodo = (obj) => {
    return {
        type: 'REMOVE_TODO',
        payload: obj
    }
}

export const editTodo = (value, obj) => {
    return {
        type: 'EDIT_TODO',
        payload: {value: value.target.value, obj: obj}
    }
}
