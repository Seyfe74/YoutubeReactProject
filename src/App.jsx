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
  debugger;
  async function fetchVideos() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${filteredVideo}&key=AIzaSyBYQEcEnWgdhYikm7boJwGC-6Nj3KYaAJ8`)  // update url
    setVideos(response.data.items);
  }

  function mapVideos(){
    return videos.map(video =>
    <Video
      key={video.id.videoId}
      
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
    {<Video  />}
      </div>
    );
  }


export default App;
