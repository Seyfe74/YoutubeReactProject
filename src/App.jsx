import React from 'react';
import Video from './components/Video';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';
import VideoList from './components/VideoList';
import VideoItem from './components/VideoItem';
import Comments from './components/Comments';
import axios from 'axios';

class App extends React.Component {
  state = {
      videos: [],
      Comment: [""],
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

  handleChange = (e) => {
      
        this.state.Comment= e.currentTarget.value
     
}

  onSubmit = (e) => {
  e.preventDefault();

  const variables = { 
                 
       videoId: this.state.selectedVideo.id,
       content: this.state.Comment.toString(),
       likes: 0,
       dislikes: 0, 
         
   }
   

   //console.log (this.state.selectedVideo.id.videoId)
   

   axios.post('http://127.0.0.1:8000/comment/', variables)
  .then(response=> {
      if(response.data.success) {
          console.log('Comment posted successfuly')
      } else {
          alert('Failed to save Comment')
      }
     
  })
}




render() {
return (
  <div>
     

    <SearchBar handleFormSubmit={this.handleSubmit}/>
    <Video   video={this.state.selectedVideo}/> 
    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
    <Comments handleChange = {this.handleChange} onSubmit = {this.onSubmit}/>
      </div>
   )
  }
  
}


export default App;
