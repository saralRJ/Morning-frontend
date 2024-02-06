const initialData = {
    count:100,
    // Fruits:['apple','orange','mango','kiwi']
}
const countReducer = (state= initialData, action) =>{
    switch (action.type){
        case 'Change_count':
            return {count: action.payload }
            default:
                return state;
    }

    // return state;
}
export default countReducer