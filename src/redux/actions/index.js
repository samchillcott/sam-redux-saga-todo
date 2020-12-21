//Action Creator
export const addTodo = (obj) => {
    // return an action
    return {
        type: 'ADD_TODO',
        payload: obj
    }
}

export const completeTodo = (todo) => {
    return {
        type: 'COMPLETE_TODO',
        payload: todo
    }
}

export const removeTodo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        payload: todo
    }
}

export const editTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        payload: {todo, newText: "hard coded action data"}
    }
}
