import * as actionTypes from '../actions/actionsTypes';
 
const initState = {products: [], product: {} }
const reducer = ( state = initState, action) => {
    switch(action.type){
       case actionTypes.SET_PRODUCTS:
         return {...state, products: action.products}
           case actionTypes.SET_DETAIL_STATE:
         return {...state, product: action.product}
        default:
            return state;
    }
}

export default reducer;