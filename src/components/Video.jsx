import React, { useState} from 'react';
import axios from 'axios';





const Video = ({ video }) => {


    if (!video) {
      return <div>
         <h1>Enter search keyword </h1>
         <br></br>
         
      </div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(video);
    
    return (
        <div>
          <iFrame width="420" height="315" src= {videoSrc}>           
          </iFrame> 
          
          <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>

           
            <form >
        <label>
         Enter Comments here ....
          <textarea  />
        </label>
        <input type="submit" value="Submit"   />
      </form>

          </div>
          
        </div>
    );
}

export default Video;