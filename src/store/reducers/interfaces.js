import * as actionTypes from '../actions/actionsTypes';
 
const initState = {products: [], product: {} , error: false, filterproduct: {}}
const reducer = ( state = initState, action) => {
    switch(action.type){
       case actionTypes.SET_PRODUCT_IMG:
         return {...state, productImg: action.imageUrl}
          
        default:
            return state;
    }
}

export default reducer;