import React from "react"

const Video = (props) => {
    const videoSrc = `https://www.youtube.com/embed/${props.video}`;
    return (
        <iFrame width="420" height="315" src= { videoSrc}>
           
        </iFrame> 
    );
}

export default Video;