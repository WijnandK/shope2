import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions/index"

import Cardlist from "../components/Products/Cardlist"


class Products  extends Component {

  componentDidMount() {
    this.props.getProductsInShop()
  }
  getProductDetail = () => {
    
    this.props.history.push('/product')
  }

  render() {
     
    return (
      <div>
        <h1> PRODUCS</h1>
          <Cardlist products={this.props.products.products} productdetail={this.getProductDetail}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
 
    products: state.product
  };
};
 const mapDispatchToProps = (dispatch) => {
  return {
    getProductsInShop: (result) => dispatch(actions.getProductsToShop(result)),
   
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
