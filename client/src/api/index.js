import axios from 'axios';

export const BE_URL = 'http://localhost:3001/dishes';

export const fetchDishes= () => axios.get(BE_URL);
export const createDish = (newDish) => axios.post(BE_URL, newDish);