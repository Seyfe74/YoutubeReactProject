import axios from 'axios';
const KEY = 'AIzaSyBYQEcEnWgdhYikm7boJwGC-6Nj3KYaAJ8'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})