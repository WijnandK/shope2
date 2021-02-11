import * as actionTypes from '../actions/actionsTypes';
 
const initState = {products: [], product: {} , error: false}
const reducer = ( state = initState, action) => {
    switch(action.type){
       case actionTypes.SET_PRODUCTS:
         return {...state, products: action.products}
           case actionTypes.SET_DETAIL_STATE:
         return {...state, product: action.product}
          case actionTypes.SET_PRODUCTS_FAIL: 
        return {...state, error: true}
        default:
            return state;
    }
}

export default reducer;