import { combineReducers } from "redux";

//reducer
const songsReducer = () => {
    return[
        {
            title: 'hello',
            duration: '4:05'
        },
        {
            title: 'hello hello ',
            duration: '10:05'
        },
        {
            title: 'hello hello',
            duration: '14:05'
        },
        {
            title: 'hello hello hello hi',
            duration: '8:05'
        }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})