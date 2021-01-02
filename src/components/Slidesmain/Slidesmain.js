import React from 'react';
import Image from "../Image/Image"
import e from "../../static/images/e.jpg"

const Slidesmain = (props) => {
  return (
    <div className="slideprc__outside">
      <Image imageUrl={props.imagewatch} center/>
     
    </div>
  );
}

export default Slidesmain;
