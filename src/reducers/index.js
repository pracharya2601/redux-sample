import { combineReducers } from "redux";

//reducer
const songsReducer = () => {
    return[
        {
            title: 'Physical',
            artist: 'Dua Lipa',
            duration: '4:03'
        },
        {
            title: 'Life Is Good',
            artist: 'Future/ Drake',
            duration: '4:03'
        },
        {
            title: 'No Time To Die',
            artist: 'Billie Eilish',
            duration: '5.00'
        },
        {
            title: 'In your eyes',
            artist: 'The Weeknd',
            duration: '4:03'
        }
    ];
};

const selectSongReducer = (selectSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectSong;
}

export default combineReducers({
    songs: songsReducer,
    selectSong: selectSongReducer
})