import axios from "axios";
 
import * as actionTypes from "./actionsTypes";

 
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products,
  };
};
export const setProductsFailed = () => {
  return {
    type: actionTypes.SET_PRODUCTS_FAIL
  }
}
export const getProductsToShop =   () => {
  return (dispatch) => {
    axios.get('http://localhost:3002/shop/products').then((res) => {
      dispatch(setProducts(res.data))
    })
    .catch((error) => {
      dispatch(setProductsFailed('Failer'))
    })
  }
}

export const setDetailProduct = (product) => {
  return {
    type: actionTypes.SET_DETAIL_STATE,
    product : product 
  };
};