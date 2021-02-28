import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions/index"

import Cardlist from "../components/Products/Cardlist"
import FilterEdit from "../components/FilterEdit/FilterEdit";

class Products  extends Component {
state = {
  openFilterModal: false
}
 
  componentDidMount() {
   this.props.getBrands() ;
    this.props.getColors() ;
    this.props.getProductsInShop()
  }
  getProductDetail = () => {
    
    this.props.history.push('/product')
  }
  setEditFilters = () => {
    this.setState({
      openFilterModal: true
    })
  }
   cancelEditHandler = () => {
    this.setState({ openFilterModal: false  });
  };
  render() {
     
    return (
      <div>
        <FilterEdit 
        editFilters={this.state.openFilterModal}
         onCancelEdit={this.cancelEditHandler}
        />
        <h1> PRODUCS</h1>
        <div>
          <div>
            <h1>Filters</h1> 
            <button onClick={this.setEditFilters}  >Filters</button>
          </div>
        </div>
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

     getColors: (result) => dispatch(actions.getColorsToShop(result)),

     getBrands: (result) => dispatch(actions.getBrandsToShop(result)),
   };
 };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
