import React from 'react';
import Video from './components/Video';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';
import VideoList from './components/VideoList';
import VideoItem from './components/VideoItem';

class App extends React.Component {
  state = {
      videos: [],
      selectedVideo: null
  }
  handleSubmit = async (searchTerm) => {

    const response = await youtube.get('/search', {
        params: {
            q: searchTerm
        }
    })

    
      this.setState({
          videos: response.data.items
      })
      //console.log("this is resp",response);
  };
  handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }
render() {
return (
  <div>
     

    <SearchBar handleFormSubmit={this.handleSubmit}/>
    <Video   video={this.state.selectedVideo}/> 
    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
     
      </div>
   )
  }
  
}


export default App;
