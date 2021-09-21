import axios from 'axios';
const KEY = 'AIzaSyBgAHjiWi8mrZnSuluwRmzaZTCMc8Yqfuw'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})