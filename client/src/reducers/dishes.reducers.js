const dishesReducer = (stateDishes = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...stateDishes, action.payload ];
        default:
            return stateDishes;
    }
}
export default dishesReducer;