import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

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
            frets:[],
            wood:[],
            price:[]
        }
  };
    cancelPostChangeHandler = () => {
    this.setState({
     
      filters: {
         brand:[],
            frets:[],
            wood:[],
            price:[]
      }
    });
    this.props.onCancelEdit();
  };
 handleFilters = (filters,category) => {
       const newFilters = {...this.state.filters}
       newFilters[category] = filters;

        if(category === "price"){
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues
        }

       this.showFilteredResults(newFilters)
       this.setState({
           filters: newFilters
       })
    }

  render() {
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
            <FilterCollapse title="Brands" list={this.props.brands}/> 
          <FilterCollapse title="Colors" list={this.props.colors}/> 

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
export default connect(mapStateToProps)(FilterEdit);
