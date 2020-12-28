import { v4 as uuidv4 } from 'uuid';
// import { sendData } from '../../api';

const initialState = [];

const todoReducer = (todos = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todos, 
                {isComplete: false,
                key: uuidv4(),
                text: action.payload
                }];
        case 'COMPLETE_TODO':
            console.log({payload: action.payload},"completeTodo from reducer");
            return todos.map(todo => {
               if (todo.key === action.payload.key) {
                    action.payload.isComplete = !action.payload.isComplete
                    return action.payload   
               } else {
                   return todo
               }
            });
        case 'REMOVE_TODO':
            console.log({payload: action.payload},"removeTodo fired from reducer");
            return todos.filter(todo => todo.key !== action.payload.key)
        case 'EDIT_TODO':
            console.log({payload: action.payload},"edit fired from reducer");
            return todos.map(todo => {
               if (todo.key === action.payload.key) {
                   return action.payload
               } else {
                   return todo
               }
            })
        case 'LOAD_TODOS':
            // console.log({payload: action.payload});
            return action.payload
        default:
            return todos
    }
}

export default todoReducer;