import axios from 'axios';
/* Creates customization for axios calls */
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6648616497c80616511c6392365224f5969d8f88fbbc8c0d56978ce4aca7dee5'
    } 
})