import axios from 'axios';

const url = 'http://localhost:3001/dishes';

export const fetchPosts = () => axios.get(url);