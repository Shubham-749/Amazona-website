import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            //show a loading box
            return { loading: true };

        //if I get the data from the server
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };

        //if there is a error
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

function productDetailsReducer(state = { product: {} }, action) {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            //show a loading box
            return { loading: true };

        //if I get the data from the server
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };

        //if there is a error
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { productListReducer, productDetailsReducer }