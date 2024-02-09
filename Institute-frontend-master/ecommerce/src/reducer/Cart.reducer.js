const initialData = []

const cartReducer = (state=initialData, action) => {
    switch(action.type){
        case "Add_To_Cart":
            return [...state, action.payload]

            default:
                return state;
    }
    return state;
}

export default cartReducer