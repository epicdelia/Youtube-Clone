import axios from 'axios';

const KEY = 'AIzaSyD7ifOLPlCtkESAJzaFWJy-BMvwAXyJh0Q';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})