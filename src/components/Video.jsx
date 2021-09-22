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
          <iframe width="420" height="315" src= {videoSrc}>           
          </iframe> 
          
          <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>

           
          </div>
          
        </div>
    );
}

export default Video;