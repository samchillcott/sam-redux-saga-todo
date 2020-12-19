import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    if (action.type === 'ADD_TODO') {
        return [...state, 
                {isComplete: false,
                key: uuidv4(),
                text: action.payload
                }];
    } else if (action.type === 'COMPLETE_TODO') {
        console.log({payload: action.payload},"completeTodo from reducer");
        const newState = [...state];
        newState.forEach(element => {
            if (element.key === action.payload.key) {
                element.isComplete = !element.isComplete
            } 
        });
        return newState;
    } else if (action.type === 'REMOVE_TODO') {
        console.log({payload: action.payload},"remove todo fired from reducer");
    }
    return state
}

export default todoReducer;