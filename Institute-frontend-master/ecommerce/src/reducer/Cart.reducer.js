const initialData = {
    cart_item: []
}

const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case "Add_To_Cart":
            return { cart_item: [...state.cart_item, action.payload] }

        case "REMOVE_FROM_CART":
            return { cart_item: state.cart_item.filter(item => item.product_name != action.payload.product_name) }

        default:
            return state;   
    }

}

export default cartReducer