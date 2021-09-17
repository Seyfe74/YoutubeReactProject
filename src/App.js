import logo from './logo.svg';
import './App.css';
import React, {Component, useEffect, useState} from 'react';
// additional imports needed


function App(props) {
  const [videos, setVideos] = useState([]);
  const [filteredVideo, filtersVideos] = useState(); //search variable inside()?
  
  async function fetchSearchResults() {
    let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?${filteredVideo}`)  // update url
    setVideos(response.data.results);
  }

  function mapVidoes(){
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
    <SongTable mapSongs={()} => mapSongs()} />
      </div>
    );
  }


export default App;
