import React from "react"

const Video = ({ video }) => {
    if (!video) {
      return <div>
         <h1>Enter search keyword </h1>
         <br></br>
         
      </div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(video);

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