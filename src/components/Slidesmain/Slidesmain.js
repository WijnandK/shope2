import React from 'react';
import Image from "../Image/Image"
  
const Slidesmain = (props) => {
  return (
    <div className="slideprc__outside">
      <Image imageUrl={props.imagewatch} center/>
     
    </div>
  );
}

export default Slidesmain;
