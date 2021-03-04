import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index"

import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
import Checkbox from "../Form/Input/Checkbox";
import FilterCollapse from "./FilterCollapse"

class FilterEdit extends Component {
   state = {
       limit:6,
        skip:0,
        filters:{
            brand:[],
            color:[],
    
            price:[]
        }
  };
    cancelPostChangeHandler = () => {
    this.setState({
     
      filters: {
         color:[],
            brand:[],
       
            price:[]
      }
    });
    this.props.onCancelEdit();
  };
  
  acceptPostChangeHandler = () => {
        console.log('RENDER NEW GET PRODUCTS ')

        console.log(this.state.filters)
        this.setState({   filters:{
            brand:[],
            color:[],
    
            price:[]
        }})
        this.props.onAcceptHandler()
  };
 handleFilters = (filters,category) => {
       const newFilters = {...this.state.filters}
       newFilters[category] = filters;

        // if(category === "price"){
        //     let priceValues = this.handlePrice(filters);
        //     newFilters[category] = priceValues
        // }

      //  this.showFilteredResults(newFilters)
       this.setState({
           filters: newFilters
       })
       this.addedFilterList( filters)
    }
    addedFilterList = (data) => {
      console.log(data)
    }
  render() {
    console.log(this.state.filters)
    return (
      this.props.editFilters ? (
          <Fragment>
        <Backdrop onClick={this.cancelPostChangeHandler} />
        <Modal
          title="New Post"
          acceptEnabled={this.state.formIsValid}
          onCancelModal={this.cancelPostChangeHandler}
          onAcceptModal={this.acceptPostChangeHandler}
          isLoading={this.props.loading}
        >
            <FilterCollapse 
            title="Brands" 
            list={this.props.brands}
         handleFilters={(filters) => this.handleFilters(filters, 'brand')}

            /> 
          <FilterCollapse 
          title="Colors" 
          list={this.props.colors}
         handleFilters={(filters) => this.handleFilters(filters, 'color')}

          /> 

        </Modal>
      </Fragment>
      ) : null
    
    );
  }
}
 const mapStateToProps = (state) => {
  return {
    products: state.product,
    brands: state.product.brands,
    colors: state.product.colors
  };
};

 const mapDispatchToProps = (dispatch) => {
   return {
     getProductsInShop: (result) => dispatch(actions.getProductsToShop(result)),

  
   };
 };
export default connect(mapStateToProps, mapDispatchToProps)(FilterEdit);
