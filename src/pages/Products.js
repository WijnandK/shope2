import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions/index"

import Cardlist from "../components/Products/Cardlist"
import FilterEdit from "../components/FilterEdit/FilterEdit";

class Products  extends Component {
state = {
  openFilterModal: false,
    filters:{
            brand:[],
            color:[],
             
        },
        loading: false,
        initproducts: null
}
 
 async componentDidMount() {
   await this.props.getBrands() ;
    await this.props.getColors() ;
    await this.props.getProductsInShop()
      console.log('been here')
    this.setState({initproducts: this.props.products.products})
  }
   getProductDetail  =   () => {
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
   finishEditHandler = () => {
    this.setState({ openFilterModal: false  });
  };
  onAcceptHandler = async (filter) => {
      console.log(filter)
      // let resultfilters = {}


          await this.props.getProductsInShop(filter)

    this.setState({openFilterModal: false})
  }
  render() {
    
       
    return (
      <div>
        <FilterEdit 
        editFilters={this.state.openFilterModal}
         onCancelEdit={this.cancelEditHandler}
         onAcceptHandler={this.onAcceptHandler}
         triggerNewProducts={this.getNewProducts}
        />
     
        <div>
        
           
            <button onClick={this.setEditFilters}  >Filters</button>
        
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
     getProductsInShop: (result) => dispatch(actions.getProductsInit(result)),

     getColors: (result) => dispatch(actions.getColorsToShop(result)),

     getBrands: (result) => dispatch(actions.getBrandsToShop(result)),
   };
 };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
