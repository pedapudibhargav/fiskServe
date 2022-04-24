import React from 'react';
import { useSelector } from 'react-redux';
const Dishes = () => {
    const dishes = useSelector((reduxState) =>
        reduxState.dishesReducer);
    console.log(dishes);
    return (
        <>
            <h2>Dishes</h2>
        </>
    );
}

export default Dishes;