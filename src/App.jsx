import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Video from './components/Video';
import VideoResult from './components/VideoResult';

function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectVideosId, setVideoId] = useState([]);
  const [filteredVideo, filterVideos] = useState('Basketball');

  async function fetchVideos() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${filteredVideo}&key=AIzaSyBYQEcEnWgdhYikm7boJwGC-6Nj3KYaAJ8`)  // update url
    setVideos(response.data.items);
    selectVideosId = response.data.items[0].id.videoId; 
    setVideoId(response.data.items[0].id.videoId);
    
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
  console.log (selectVideosId)  
  }
  return () => mounted = false;
}, [])


// import video player functional component to this?


return (
  <div>
     

    {<VideoResult mapVideos={() => mapVideos()} /> }
    {<Video   vidId={() =>setVideoId(selectVideosId)} 
       /> }
     
      </div>
    );
  }


export default App;
