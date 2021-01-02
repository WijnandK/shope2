import React, {Fragment} from 'react';
import Button from "./Button"


const Buttons = (props) => {
 
  return (
    <Fragment>
      <Button  design="raised"  >{props.text ? `${props.text}   `: "see more details"}</Button>
    <Button    design="raised"  mode="accent">Go All Product shop</Button>

    </Fragment>
  );
}

export default Buttons;
