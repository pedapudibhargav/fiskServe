import axios from 'axios';

const url = 'http://localhost:3001/dishes';

export const fetchDishes= () => axios.get(url);
export const createDish = (newDish) => axios.post(url, newDish);