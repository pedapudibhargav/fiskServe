const dishesReducer = (stateDishes = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return stateDishes;
        case 'CREATE':
            return stateDishes;
        default:
            return stateDishes;
    }
}
export default dishesReducer;