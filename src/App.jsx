//import './App.css';
//import Video from './components/video';
//import React, {useEffect, useState} from 'react';
//import axios from 'axios';

// additional imports needed
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Video from './components/Video';
import VideoResult from './components/VideoResult';

function App(props) {
  const [videos, setVideos] = useState([]);
  const [filteredVideo, filterVideos] = useState('Cat videos');
  
  async function fetchVideos() {
    let response = await axios.get(`https://youtube.com.googleapis.com/youtube/v3/search?${filteredVideo}`)  // update url
    setVideos(response.data.results);
  }

  function mapVideos(){
    return videos.map(video =>
    <Video
      key={video.videoID}
      video={video}
      />
      )
  }

useEffect(() => {
  let mounted = true;
  if(mounted){
  fetchVideos();
    
  }
  return () => mounted = false;
}, [])


// import video player functional component to this?


return (
  <div>
    {<VideoResult mapVideos={() => mapVideos()} /> }
      </div>
    );
  }


export default App;
