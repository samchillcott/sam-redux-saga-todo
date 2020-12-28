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

export const downloadTodos = (newTodos) => {
    console.log("downloadTodos action fired");
    return {
        type: 'DOWNLOAD_TODOS',
        payload: newTodos
        // payload: "fake coded newTodos"
    }
}

// export const uploadTodos = (todos) => {
//       console.log("upoloadTodos action fired");
//     return {
//         type: 'UPLOAD_TODOS',
//         payload: todos
//     }
// }
