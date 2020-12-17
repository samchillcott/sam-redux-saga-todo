// Action creator
export const selectSong = song => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const addTodo = () => {
    return {
        type: 'ADD_TODO',
        payload: { 
            isComplete: false,
            key: "3d3f3d67-eaa7-4890-baad-5adf34b927e0",
            text: "cccc"
 }
    }
}