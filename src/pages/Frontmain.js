import React, { Fragment, useState } from "react";
import Slidesbuild from "../components/SlideBuilder/Slidesbuild"

import Mainback from "../components/Mainbacks/Mainback";
 import Backslide from "../components/Backslides/Backslide"
import Mainbtns from "../components/Mainbacks/Mainbtns"
 const Frontmain = (props) => {
  const [index, setIndex] = useState(0);
  const [isFade, setFade] = useState(true);

  const setNewTitle = (i) => {
    setIndex(i);
    setFade(!isFade)
  };

  return (
    <Fragment>
        <Backslide caseIndex={index}/>
      <Slidesbuild setIndexback={setNewTitle} />
      <Mainback caseIndex={index} />
      <Mainbtns type={index}/>

    </Fragment>
  );
};

export default Frontmain;
