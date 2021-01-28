import React, { Component } from 'react';
import Swiperflip from "../components/Swiperflip/Swiperflip";
import Button from "../components/Button/Button";
import watch1 from "../static/images/watch1.svg"
import Image from "../components/Image/Image"
class Trending extends Component {
  render() {
    return (
      <div className="trending--page fadein">
        <h1 className="trending--title"> INSPIRATION</h1>
        <Swiperflip />
        <div className="trending--banner">
          <h3>PASSION</h3>
          <h5>for watches and events</h5>
          <p> We are excited to share our expertise on watches with our clients</p>
        <div className="trending--btn">
          <Button link="/shop" mode="raised" design="accent"> SEE SHOP</Button>
        </div>
        </div>
        <div className="trending--banner2">
          <p className="trending--text">
            Vind voor jou de geschikte stijl voor elk event..
          </p>
          <div className="image--icon">
               <Image imageUrl={watch1} center/>

          </div>
       
        </div>
      </div>
    );
  }
}

export default Trending;
