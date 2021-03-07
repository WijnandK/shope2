import React, { Component, Fragment } from 'react';
import Button from "../components/Button/Button"
import { connect } from "react-redux";

import Productslider from "../components/Products/Productslider"
import Accordion from "../components/Acccordion/Accordion"
import DetailSlider from "../components/SlideBuilder/DetailSlider/DetailSlider"
class Product extends Component {
  state = {
    expandImages: false
  }
  expandImagesHandler = () => {
    this.setState({expandImages: !  this.state.expandImages})
  }
  acceptHandler = () => {
    this.setState({expandImages: false})
  }
  render() {
      console.log(this.props.product)
    const {product} = this.props 
    return (
      <Fragment>
        <div className={`image__action__trigger ${this.state.expandImages ? "action-open" : ""}` } onClick={this.expandImagesHandler}>
          {!this.state.expandImages ? (<p  className="expand__open">See more</p>) : (<p className="expand__close">Close</p>)} 
        </div>
        <DetailSlider 
          expanding={this.state.expandImages} 
          images={this.props.product.images}
          acceptHandler={this.acceptHandler}
          />
      <div className="product_container">
        
        <div className="product_swiper_wrapper"> 
          <Productslider  images={this.props.product.images}/>
        </div>
         
        <h1 className="product_text"> { product.naam}</h1>
        <p className="product_des">{product.brand.name}</p>
        <p className="product_p"> Price: $ {product.prijs}</p>
        <p className="product_p">Popularity: {product.verkocht}</p>
        <p className="product_p">In stock</p>
        <Button mode="raised" design="success">ADD TO CART</Button>
        <Button mode="raised">BACK TO PRODUCTS</Button>
        <Accordion title="Product info" desc={product.beschrijving}  />
         <Accordion title="Design and materials" desc={product.type}  />

          <div style={{height: '29px'}}/>
      </div>
      </Fragment>
    );
  }
}

 const mapStateToProps = (state) => {
  return {
 
    product: state.product.product
  };
};
export default connect(mapStateToProps   )(Product);
