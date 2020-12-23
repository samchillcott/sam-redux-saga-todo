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

export const editTodo = (newTodo) => {
    return {
        type: 'EDIT_TODO',
        payload: newTodo
    }
}

export const loadTodos = () => {
    return {
        type: 'LOAD_TODOS'
    }
}

export const saveTodos = (todos) => {
    return {
        type: 'SAVE_TODOS',
        payload: todos
    }
}
