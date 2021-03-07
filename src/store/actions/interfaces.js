  
import * as actionTypes from "./actionsTypes";

 
export const getProductImg = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products,
  };
};
export const getProductImgFail= () => {
  return {
    type: actionTypes.SET_PRODUCTS_FAIL
  }
}
 
 

 
 