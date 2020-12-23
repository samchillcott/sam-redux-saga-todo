import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    const newState = [...state];
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, 
                {isComplete: false,
                key: uuidv4(),
                text: action.payload
                }];
        case 'COMPLETE_TODO':
            console.log({payload: action.payload},"completeTodo from reducer");
            // return state.map(todo => {
            //    if (todo.key === action.payload.key) {
            //        return action.payload
            //    } else {
            //        return todo
            //    }
            // action.payload.isComplete = !action.payload.isComplete

            // });
            
            newState.forEach(element => {
                if (element.key === action.payload.key) {
                    element.isComplete = !element.isComplete
                    console.log('State: ', state)
                } 
            });
            return newState;
        case 'REMOVE_TODO':
            console.log({payload: action.payload},"removeTodo fired from reducer");
            let index = newState.findIndex((x) => x.key === action.payload.key);
            newState.splice(index, 1);
            console.log('State: ', state)
            return newState;
        case 'EDIT_TODO':
            console.log({payload: action.payload},"edit fired from reducer");
            return state.map(todo => {
               if (todo.key === action.payload.key) {
                   return action.payload
               } else {
                   return todo
               }
            })
        default:
            return state
    }
}

export default todoReducer;