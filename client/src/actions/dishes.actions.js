import * as api from '../api';

// Action Creators
export const getDishes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchDishes();
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createDish = (dish) => async (dispatch) => {
    try {
        const {data} = await api.createDish(dish);
        dispatch({
            type: 'CREATE',
            payload: data
        });
    } catch (error) {
        console.error(error.message);
    }
}