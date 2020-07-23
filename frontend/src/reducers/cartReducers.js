import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);


            if (product) {
                //if product exists then replace 'product' with the items that come in cart
                //second product in 'product.product' is the Id of the product. 'x' is the previous item in cartItems
                return {
                    cartItems: state.cartItems.map(x => x.product === product.product ? item : x)
                };

            }
            return { cartItems: [...state.cartItems, item] };

        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter(x => x.product !== action.payload) }
        default:
            return state

    }
}

export { cartReducer }