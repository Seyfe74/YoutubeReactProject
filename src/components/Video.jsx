import React from "react"

const Video = (props) => {
    //const vidId = props.video.id.videoId;
    const videoSrc = `https://www.youtube.com/embed/${props.vidId}`;
    //console.log(props.vidId);

   //const videoSrc = 'https://www.youtube.com/embed/cUIWYtAcoZE'
    return (
        <div>
        <iFrame width="420" height="315" src= {videoSrc}>           
        </iFrame> 
        <h2> {}</h2>

        </div>
    );
}

export default Video;