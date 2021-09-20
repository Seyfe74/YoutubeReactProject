import React from 'react'

const VideoResult = (props) =>{

    return(
        <table className="table">
            <thead>
                <tr>
                    <th> {props.video}Video Name</th>
                </tr>
            </thead>
           {props.mapVideos()}
        </table>
    );
    
}
export default VideoResult;

