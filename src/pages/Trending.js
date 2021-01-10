import React, { Component } from 'react';
import Swiperflip from "../components/Swiperflip/Swiperflip"
class Trending extends Component {
  render() {
    return (
      <div className="trending--page">
        <h1 className="trending--title"> INSPIRATION</h1>
        <Swiperflip />
        <div className="trending--banner">
          <h3>WITH PASSION</h3>
          <h5>for watches and events</h5>
          <p> We are excited to share our expertise on watches with our clients</p>
        </div>
      </div>
    );
  }
}

export default Trending;
