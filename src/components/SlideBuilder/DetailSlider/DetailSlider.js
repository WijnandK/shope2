import React, { Component, Fragment } from 'react';
import Modal from "../../Modal/Modal"
import Backdrop from "../../Backdrop/Backdrop"
import Image from "../../Image/Image"

import ImageModal from "../../Modal/ImageModal"
class DetailSlider extends Component {




  acceptPostChangeHandler = () => {
        this.props.acceptHandler();

  }
  render() {
    return this.props.expanding ? (
      <Fragment>
        <Backdrop onClick={this.acceptPostChangeHandler} />
        <ImageModal
          
          acceptEnabled={ ()=> console.log('here')}
          onCancelModal={this.acceptPostChangeHandler}
          onAcceptModal={this.acceptPostChangeHandler}
          isLoading={this.props.loading}
        >
         
        <div className="fullsize-images">


        </div>
            
        </ImageModal>
      </Fragment>
    ) : null;
  }
}

export default DetailSlider;
