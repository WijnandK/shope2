import React, { Component, Fragment } from 'react';
import Image from "../Image/Image";
import e from "../../static/images/e.jpg"

class Card extends Component {
  render() {
     let brand  
     if ( this.props.item.brand) {
       brand = this.props.item.brand.name
     } else {
       brand = "see more"
     }
     

   
    let image = this.props.item.images[0]
    if (!image) {
      image = e
    }
    
    return (
      <Fragment >
        <div className="card_p_actions"  >
        <span>{this.props.item.verkocht } [ L ]</span>
          <span>Add to cart</span>
          </div>
        <div className="card_p_image">
          <Image imageUrl={image}/>
        </div>
        <p style={{maxHeight: '44px'}}>  {this.props.item.naam}</p>
      <strong> <p> {brand}</p></strong> 
      
        <p> $ - {this.props.item.prijs}</p>
      </Fragment>
    );
  }
}

export default Card;
