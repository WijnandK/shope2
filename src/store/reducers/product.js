import * as actionTypes from '../actions/actionsTypes';
 
const initState = {products: [], product: {} , error: false, }
const reducer = ( state = initState, action) => {
    switch(action.type){
       case actionTypes.SET_PRODUCTS:
         return {...state, products: action.products}
           case actionTypes.SET_DETAIL_STATE:
         return {...state, product: action.product}
          case actionTypes.SET_PRODUCTS_FAIL: 
        return {...state, error: true}
          case actionTypes.SET_PRODUCT_FILTER:
            return {...state, products: action.filterproducts}
          case actionTypes.GET_BRANDS:
            return {...state, brands: action.brands}
                  case actionTypes.GET_COLORS:
            return {...state, colors: action.colors}
        default:
            return state;
    }
}

export default reducer;