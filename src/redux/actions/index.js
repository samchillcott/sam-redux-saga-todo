//Action Creator
export const addTodo = (todoText) => {
    // return an action
    return {
        type: 'ADD_TODO',
        payload: todoText
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

export const loadTodos = (newTodos) => {
    // console.log("loadTodos action fired");
    return {
        type: 'LOAD_TODOS',
        payload: newTodos
    }
}

export const saveTodos = (todos) => {
    //   console.log("saveTodos action fired");
    return {
        type: 'SAVE_TODOS',
        payload: todos
    }
}
