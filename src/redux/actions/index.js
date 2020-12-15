// Action creator
export const selectSong = song => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const addTodo = (id, task) => {
    return {
        type: 'ADD_TODO',
        payload: [
            
        ]
    }
}