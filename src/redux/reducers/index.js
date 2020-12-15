import { combineReducers } from 'redux'

const todos = () => {
       console.log("tasksReducer")

    return [] 
};

// const songsReducer = () => {
//     return [
//         { title: 'No Scrubs', duration: '4.05' },
//         { title: 'No Way', duration: '2.15' },
//         { title: 'No Change', duration: '3.45' },
//         { title: 'No No No', duration: '2.55' },
//     ];
// };

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

const addTodoReducer = (action) => {
    if (action.type === 'ADD_TODO') {
        return action.payload;
    }
    return console.log('Something should happen here')
}

export default combineReducers({
    // songs: songsReducer,
    // selectedSong: selectedSongReducer,
    todos: todos
});