//Action Creator
export const addTodo = (value) => {
    // return an action
    return {
        type: 'ADD_TODO',
        payload: value
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
