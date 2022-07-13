import React from "react";
import './TrackList.css';
import Track from "../Track/Track";

class TrackList extends React.Component{
    renderAction(){
        if (this.props.isRemoval){
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }
    render(){
        return(
            <div className="TrackList" >
                {
                    this.props.tracks.map(track => {
                        return <Track track={track} key={track.id} 
                        onAdd={this.props.onAdd} />
                    })
                }
                </div>
        )
        
    }
}

export default TrackList;
