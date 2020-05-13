import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(!song) {
        return <div style={{margin: '10vh 0 0 10vw'}}>Select Song</div>
    }
    return(
    <div className="ui cards" style={{marginTop: '2vh'}}>
        <div className="card">
            <div className="content">
                <div className="header">Details for:</div>
                <div className="description">Title: {song.title}</div>
                <div className="meta">Artist: {song.artist}</div>
                <div className="description">Duration: {song.duration}</div>
            </div>
        </div>
    </div>
    )
};
const mapStateToProps = (state) => {
   return {song : state.selectSong }
}

export default connect(mapStateToProps)(SongDetail);